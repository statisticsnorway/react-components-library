import { extractName, handleRoute } from '../../utilities/Common'

// TODO: There is little difference between producers here that should be dealt with
function resolveReferences (properties, returnSchema, schema, key, name, specialFeatures, route) {
  const customType = extractName(properties[key].items.$ref)

  returnSchema[name].properties[key].customType = customType
  returnSchema[name].properties[key].description.push('Input type: ' + customType)

  returnSchema[name].properties[key].multiValue = true
  returnSchema[name].properties[key].component = 'DCMultiInput'

  if (specialFeatures) {
    returnSchema[name].properties[key].showLinks = true
    returnSchema[name].properties[key].route = handleRoute(route)
  }

  Object.keys(schema[customType].properties).forEach(property => {
    returnSchema[name].properties[key].description.push(
      schema[customType].properties[property].displayName + ': '
      + returnSchema[customType].properties[property].description
    )
  })
}

function resolveLinks (properties, returnSchema, url, key, specialFeatures, route) {
  const linkedKey = key.replace('_link_property_', '')
  const endpoints = []

  Object.keys(properties[key].properties).forEach(property => {
    endpoints.push(url + 'data/' + property)
  })

  returnSchema[linkedKey].endpoints = endpoints
  returnSchema[linkedKey].component = 'DCDropdown'

  if (specialFeatures) {
    returnSchema[linkedKey].showLinks = true
    returnSchema[linkedKey].route = handleRoute(route)
  }

  if (properties[linkedKey].type === 'array') {
    returnSchema[linkedKey].multiSelect = true
  }

  delete returnSchema[key]
}

export function resolveDefaultProperties (schema, url, specialFeatures, route) {
  return new Promise(resolve => {
    const returnSchema = JSON.parse(JSON.stringify(schema))
    const name = extractName(schema.$ref)
    const properties = JSON.parse(JSON.stringify(schema.definitions[name].properties))

    Object.keys(properties).forEach(key => {
      const description = []

      description.push(returnSchema.definitions[name].properties[key].description)
      returnSchema.definitions[name].properties[key].description = description

      if (properties[key].hasOwnProperty('items')) {
        if (properties[key].items.hasOwnProperty('$ref')) {
          resolveReferences(properties, returnSchema.definitions, schema.definitions, key, name, specialFeatures, route)
        }

        if (properties[key].items.hasOwnProperty('format') && properties[key].items.format === 'date-time') {
          returnSchema.definitions[name].properties[key].component = 'DCDate'
          returnSchema.definitions[name].properties[key].multiple = properties[key].type === 'array'
        }

        delete returnSchema.definitions[name].properties[key].items
      }

      if (key.startsWith('_link_property_')) {
        resolveLinks(properties, returnSchema.definitions[name].properties, url, key)
      }
    })

    resolve(returnSchema)
  })
}
