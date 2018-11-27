import { fetchGSIMOptions } from '../../producers/gsim/GSIMOptions'

export function fetchOptions (producer, url) {
  switch (producer) {
    case 'GSIM':
      return fetchGSIMOptions(url)

    default:
      return null
  }
}

function buildOptions (producer, endpoints) {
  return new Promise(resolve => {
    Promise.all(
      endpoints.map(url => {
        return fetchOptions(producer, url)
      })
    ).then(allOptions => {
      const options = [].concat.apply([], allOptions)

      resolve(options)
    })
  })
}

export function populateOptions (producer, schema) {
  return new Promise(resolve => {
    const returnSchema = JSON.parse(JSON.stringify(schema))
    const name = schema.$ref.replace('#/definitions/', '')
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
    })
  })
}
