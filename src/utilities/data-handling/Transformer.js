import DefaultGSIMUISchema from '../../producers/gsim/DefaultGSIMUISchema'
import { transformGSIMProperties } from '../../producers/gsim/GSIMTransformer'

function producers (producer) {
  switch (producer) {
    case 'GSIM':
      return DefaultGSIMUISchema

    default:
      return null
  }
}

function producersSpecialProperties (producer, schema, data, fromSource) {
  switch (producer) {
    case 'GSIM':
      return transformGSIMProperties(producer, schema, data, fromSource)

    default:
      return null
  }
}

function transformDefaultProperties (producer, schema, data, fromSource) {
  return new Promise(resolve => {
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
    })
    resolve(returnObject)
  })
}

export function transformProperties (producer, schema, data, fromSource) {
  return new Promise(resolve => {
    transformDefaultProperties(producer, schema, data, fromSource).then(transformedProperties => {
        resolve(producersSpecialProperties(producer, schema, transformedProperties, fromSource))
      }
    )
  })
}
