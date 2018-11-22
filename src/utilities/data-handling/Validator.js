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

export function validate (schema, data) {
  return new Promise(resolve => {
    const name = schema.$ref.replace('#/definitions/', '')
    const errors = checkRequiredIsNotEmpty(schema, data, name)

    if (Object.keys(errors).length !== 0) {
      const data = {...schema}
      const schema = {...data}

      Object.keys(schema.definitions[name].properties).forEach(key => {
        if (schema.definitions[name].properties[key].hasOwnProperty('autofilled')) {
          schema.definitions[name].properties[key].value = [data[key]]
        } else {
          schema.definitions[name].properties[key].value = data[key]
        }

        if (errors.hasOwnProperty(key)) {
          schema.definitions[name].properties[key].error = errors[key]
        } else {
          delete schema.definitions[name].properties[key].error
        }
      })

      resolve(schema)
    }
  })
}
