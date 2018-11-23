import DefaultGSIMUISchema from '../producers/gsim/DefaultGSIMUISchema'

function producers (producer) {
  switch (producer) {
    case 'GSIM':
      return DefaultGSIMUISchema

    default:
      return null
  }
}

export function mergeDefaultUISchema (producer, schema) {
  return new Promise(resolve => {
    const defaultUISchema = producers(producer)
    const returnSchema = JSON.parse(JSON.stringify(schema))
    const name = schema.$ref.replace('#/definitions/', '')
    const properties = JSON.parse(JSON.stringify(schema.definitions[name].properties))

    Object.keys(schema.definitions).forEach(definition => {
      Object.keys(schema.definitions[definition].properties).forEach(property => {
        if (schema.definitions[definition].required.includes(property)) {
          returnSchema.definitions[definition].properties[property].required = true
        }
      })

      delete returnSchema.definitions[definition].required
    })

    Object.keys(properties).forEach(key => {
      returnSchema.definitions[name].properties[key].name = key

      if (defaultUISchema.type.hasOwnProperty(properties[key].type)) {
        returnSchema.definitions[name].properties[key].component = defaultUISchema.type[properties[key].type].component
      }

      if (defaultUISchema.format.hasOwnProperty(properties[key].format)) {
        returnSchema.definitions[name].properties[key].component = defaultUISchema.format[properties[key].format].component
      }

      if (defaultUISchema.autofilled.includes(key)) {
        returnSchema.definitions[name].properties[key].autofilled = true
        returnSchema.definitions[name].properties[key].component = 'DCStatic'

        if (properties[key].hasOwnProperty('format') && properties[key].format === 'date-time') {
          returnSchema.definitions[name].properties[key].format = 'date'

          returnSchema.definitions[name].properties[key].multiple = properties[key].type === 'array'
        }
      }

      if (defaultUISchema.groups.common.includes(key)) {
        returnSchema.definitions[name].properties[key].group = 'common'
      }
    })

    resolve(returnSchema)
  })
}
