import DefaultUISchema from '../../producers/default/DefaultUISchema'
import DefaultGSIMUISchema from '../../producers/gsim/DefaultGSIMUISchema'
import { transformGSIMProperties } from '../../producers/gsim'
import { extractName } from '../Common'

function producers (producer) {
  switch (producer) {
    case 'GSIM':
      return DefaultGSIMUISchema

    case 'Default':
      return DefaultUISchema

    default:
      return null
  }
}

function producersSpecialProperties (producer, schema, data, languageCode, fromSource, specialFeatures) {
  switch (producer) {
    case 'GSIM':
      return transformGSIMProperties(producer, schema, data, languageCode, fromSource, specialFeatures)

    case 'Default':
      return data

    default:
      return null
  }
}

function checkEmpty (property) {
  if (property === '') {
    return true
  } else if (Array.isArray(property) && property.length === 0) {
    return true
  } else return typeof property === 'object' && Object.keys(property).length === 0
}

function transformDefaultProperties (producer, schema, data, fromSource) {
  return new Promise(resolve => {
    const returnData = JSON.parse(JSON.stringify(data))
    const name = extractName(schema.$ref)
    const properties = schema.definitions[name].properties
    const transformer = producers(producer).transformer

    Object.keys(properties).forEach(property => {
      if (checkEmpty(returnData[property])) {
        delete returnData[property]
      }

      Object.keys(transformer).forEach(transformable => {
        if (properties[property].hasOwnProperty('customType') && properties[property].customType === transformable) {
          if (Array.isArray(returnData[property]) && returnData[property].length !== 0) {
            returnData[property].forEach((value, index) => {
              Object.keys(transformer[transformable]).forEach(transformKey => {
                if (fromSource) {
                  // TODO: If this variable is an array and any of its elements is null, the input fields does not handle them
                  // correctly. This must either be adressed in the backend or here. Awaiting discussion.
                  returnData[property][index][transformKey] = returnData[property][index][transformer[transformable][transformKey]]

                  delete returnData[property][index][transformer[transformable][transformKey]]
                } else {
                  returnData[property][index][transformer[transformable][transformKey]] = returnData[property][index][transformKey]

                  delete returnData[property][index][transformKey]
                }
              })
            })
          }
        }
      })
    })

    resolve(returnData)
  })
}

export function transformProperties (producer, schema, data, languageCode, fromSource, specialFeatures) {
  return new Promise(resolve => {
    transformDefaultProperties(producer, schema, data, fromSource).then(transformedProperties => {
        resolve(producersSpecialProperties(producer, schema, transformedProperties, languageCode, fromSource, specialFeatures))
      }
    )
  })
}
