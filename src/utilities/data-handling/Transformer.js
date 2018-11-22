import DefaultGSIMUISchema from '../producers/gsim/DefaultGSIMUISchema'

function producers (producer) {
  switch (producer) {
    case 'GSIM':
      return DefaultGSIMUISchema

    default:
      return null
  }
}

export function transformProperties (producer, schema, data, fromSource) {
  const returnObject = {...data}
  const name = schema.$ref.replace('#/definitions/', '')
  const properties = schema.definitions[name].properties
  const transformer = producers(producer).transformer

  Object.keys(properties).forEach(property => {
    Object.keys(transformer).forEach(transformable => {
      if (properties[property].hasOwnProperty('customType') && properties[property].customType === transformable) {
        if (Array.isArray(returnObject[property]) && returnObject[property].length !== 0) {
          returnObject[property].forEach((value, index) => {
            Object.keys(transformer[transformable]).forEach(transformKey => {
              if (fromSource) {
                returnObject[property][index][transformKey] = returnObject[property][index][transformer[transformable][transformKey]]

                delete returnObject[property][index][transformer[transformable][transformKey]]
              } else {
                returnObject[property][index][transformer[transformable][transformKey]] = returnObject[property][index][transformKey]

                delete returnObject[property][index][transformKey]
              }
            })
          })
        }
      }
    })
  })

  return returnObject
}