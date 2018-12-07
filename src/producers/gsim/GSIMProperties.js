import DefaultGSIMUISchema from './DefaultGSIMUISchema'
import { extractName } from '../../utilities/Common'

function resolveReferences (properties, returnSchema, schema, key, name) {
  const customType = extractName(properties[key].items.$ref)

  returnSchema[name].properties[key].customType = customType

  if (customType === 'MultilingualText') {
    returnSchema[name].properties[key].component = 'DCText'
  } else {
    returnSchema[name].properties[key].multiValue = true
    returnSchema[name].properties[key].component = 'DCMultiInput'
  }

  Object.keys(schema[customType].properties).forEach(property => {
    if (schema[customType].properties[property].hasOwnProperty('enum')) {
      const options = []

      schema[customType].properties[property].enum.forEach(value => {
        options.push({key: value, text: value, value: value})
      })

      returnSchema[name].properties[key].options = options

      delete returnSchema[customType].properties[property].enum
    }
  })
}

function resolveLinks (properties, returnSchema, url, key) {
  const linkedKey = key.replace('_link_property_', '')
  const endpoints = []

  Object.keys(properties[key].properties).forEach(property => {
    endpoints.push(url + 'data/' + property)
  })

  returnSchema[linkedKey].endpoints = endpoints
  returnSchema[linkedKey].component = 'DCDropdown'

  if (properties[linkedKey].type === 'array') {
    returnSchema[linkedKey].multiSelect = true
  }

  delete returnSchema[key]
}

function resolveEnums (properties, returnSchema) {
  const options = []

  properties.enum.forEach(value => {
    options.push({key: value, text: value, value: value})
  })

  returnSchema.options = options
  returnSchema.component = 'DCDropdown'

  delete returnSchema.enum
}

export function resolveGSIMProperties (schema, url) {
  return new Promise(resolve => {
    const returnSchema = JSON.parse(JSON.stringify(schema))
    const name = extractName(schema.$ref)
    const properties = JSON.parse(JSON.stringify(schema.definitions[name].properties))

    Object.keys(properties).forEach(key => {
      if (properties[key].hasOwnProperty('items')) {
        if (properties[key].items.hasOwnProperty('$ref')) {
          resolveReferences(properties, returnSchema.definitions, schema.definitions, key, name)
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

      if (properties[key].hasOwnProperty('enum')) {
        resolveEnums(properties[key], returnSchema.definitions[name].properties[key])
      }

      if (DefaultGSIMUISchema.icons.user.includes(key)) {
        returnSchema.definitions[name].properties[key].icon = 'user'
      }
    })

    resolve(returnSchema)
  })
}
