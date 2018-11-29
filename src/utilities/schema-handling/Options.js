import { fetchGSIMOptions } from '../../producers/gsim/GSIMOptions'
import { extractName } from '../Common'

export function fetchOptions (producer, url) {
  switch (producer) {
    case 'GSIM':
      return fetchGSIMOptions(url)

    default:
      return null
  }
}

function buildOptions (producer, endpoints) {
  return new Promise((resolve, reject) => {
    Promise.all(
      endpoints.map(url => {
        return fetchOptions(producer, url)
      })
    ).then(allOptions => {
      const options = [].concat.apply([], allOptions)

      resolve(options)
    }).catch(error => {
      reject(error)
    })
  })
}

export function populateOptions (producer, schema) {
  return new Promise((resolve, reject) => {
    const returnSchema = JSON.parse(JSON.stringify(schema))
    const name = extractName(schema.$ref)
    const properties = JSON.parse(JSON.stringify(schema.definitions[name].properties))

    Promise.all(
      Object.keys(properties).map(value => {
        if (properties[value].hasOwnProperty('endpoints')) {
          return buildOptions(producer, properties[value].endpoints)
        }

        return null
      })
    ).then(options => {
      Object.keys(returnSchema.definitions[name].properties).forEach((key, index) => {
        if (options[index] !== null) {
          returnSchema.definitions[name].properties[key].options = options[index]

          delete returnSchema.definitions[name].properties[key].endpoints
        }
      })

      resolve(returnSchema)
    }).catch(error => {
      reject(error)
    })
  })
}
