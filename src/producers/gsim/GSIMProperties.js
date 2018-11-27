import DefaultGSIMUISchema from './DefaultGSIMUISchema'

export function resolveGSIMProperties (schema, url) {
  return new Promise(resolve => {
    const returnSchema = JSON.parse(JSON.stringify(schema))
    const name = schema.$ref.replace('#/definitions/', '')
    const properties = JSON.parse(JSON.stringify(schema.definitions[name].properties))

    Object.keys(properties).forEach(key => {
      if (properties[key].hasOwnProperty('items')) {
        if (properties[key].items.hasOwnProperty('$ref')) {
          const customType = properties[key].items.$ref.replace('#/definitions/', '')

          returnSchema.definitions[name].properties[key].customType = customType

          if (customType === 'MultilingualText') {
            returnSchema.definitions[name].properties[key].component = 'DCText'
          } else {
            returnSchema.definitions[name].properties[key].multiValue = true
            returnSchema.definitions[name].properties[key].component = 'DCMultiInput'
          }

          Object.keys(schema.definitions[customType].properties).forEach(property => {
            if (schema.definitions[customType].properties[property].hasOwnProperty('enum')) {
              const options = []

              schema.definitions[customType].properties[property].enum.forEach(value => {
                options.push({key: value, text: value, value: value})
              })

              returnSchema.definitions[name].properties[key].options = options

              delete schema.definitions[customType].properties[property].enum
            }
          })
        }

        if (properties[key].items.hasOwnProperty('format') && properties[key].items.format === 'date-time') {
          returnSchema.definitions[name].properties[key].component = 'DCDate'
          returnSchema.definitions[name].properties[key].multiple = properties[key].type === 'array'
        }

        delete returnSchema.definitions[name].properties[key].items
      }

      if (key.startsWith('_link_property_')) {
        const linkedKey = key.replace('_link_property_', '')
        const endpoints = []

        Object.keys(properties[key].properties).forEach(property => {
          endpoints.push(url + 'data/' + property)
        })

        returnSchema.definitions[name].properties[linkedKey].endpoints = endpoints
        returnSchema.definitions[name].properties[linkedKey].component = 'DCDropdown'

        if (properties[linkedKey].type === 'array') {
          returnSchema.definitions[name].properties[linkedKey].multiSelect = true
        }

        delete returnSchema.definitions[name].properties[key]
      }

      if (properties[key].hasOwnProperty('enum')) {
        const options = []

        properties[key].enum.forEach(value => {
          options.push({key: value, text: value, value: value})
        })

        returnSchema.definitions[name].properties[key].options = options
        returnSchema.definitions[name].properties[key].component = 'DCDropdown'

        delete schema.definitions[name].properties[key].enum
      }

      if (DefaultGSIMUISchema.icons.user.includes(key)) {
        returnSchema.definitions[name].properties[key].icon = 'user'
      }
    })

    resolve(returnSchema)
  })
}
