const types = ['string', 'number', 'object']

function checkRequiredIsNotEmpty (schema, data, name) {
  const properties = schema.definitions[name].properties
  const errors = {}

  Object.keys(properties).forEach(key => {
    if (properties[key].required) {
      if (properties[key].type === 'array' && data[key].length === 0) {
        errors[key] = 'Cannot be blank'
      } else if (types.includes(typeof properties[key].type)) {
        if (data[key] === '' || data[key] === null || data[key] === undefined) {
          errors[key] = 'Cannot be blank'
        }
      } else {
        errors[key] = 'Unknown type, cannot check if empty'
      }
    }
  })

  return errors
}

export function validation (schema, data) {
  return new Promise((resolve, reject) => {
    const returnSchema = {...schema}
    const name = schema.$ref.replace('#/definitions/', '')
    const errors = checkRequiredIsNotEmpty(schema, data, name)

    Object.keys(schema.definitions[name].properties).forEach(key => {
      if (schema.definitions[name].properties[key].hasOwnProperty('autofilled')) {
        returnSchema.definitions[name].properties[key].value = [data[key]]
      } else {
        returnSchema.definitions[name].properties[key].value = data[key]
      }

      if (Object.keys(errors).length !== 0) {
        if (errors.hasOwnProperty(key)) {
          returnSchema.definitions[name].properties[key].error = errors[key]
        } else {
          delete returnSchema.definitions[name].properties[key].error
        }
      } else {
        delete returnSchema.definitions[name].properties[key].error
      }
    })

    if (Object.keys(errors).length === 0) {
      resolve(returnSchema)
    } else {
      reject(returnSchema)
    }
  })
}
