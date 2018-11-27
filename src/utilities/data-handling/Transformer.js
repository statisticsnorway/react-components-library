import DefaultGSIMUISchema from '../../producers/gsim/DefaultGSIMUISchema'

function producers (producer) {
  switch (producer) {
    case 'GSIM':
      return DefaultGSIMUISchema

    default:
      return null
  }
}

export function transformProperties (producer, schema, data, fromSource) {
  const returnObject = JSON.parse(JSON.stringify(data))
  const name = schema.$ref.replace('#/definitions/', '')
  const properties = schema.definitions[name].properties
  const transformer = producers(producer).transformer

  Object.keys(properties).forEach(property => {
    if (returnObject[property] === '') {
      delete returnObject[property]
    }

    if (Array.isArray(returnObject[property]) && returnObject[property].length === 0) {
      delete returnObject[property]
    }

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

    // TODO: This is GSIM spesific, needs work
    if (properties[property].hasOwnProperty('customType') && properties[property].customType === 'MultilingualText' && returnObject.hasOwnProperty(property)) {
      if (fromSource) {
        returnObject[property] = returnObject[property][0].languageText // TODO: This is slightly dangerous since because of [0]
      } else {
        const value = returnObject[property]

        returnObject[property] = [{languageCode: 'nb', languageText: value}]
      }
    }
  })

  return returnObject
}
