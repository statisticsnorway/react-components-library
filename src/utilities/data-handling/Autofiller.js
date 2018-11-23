import { updateGSIMDataState } from '../producers/gsim'

function producers (producer, element, user, version, versionIncrementation) {
  switch (producer) {
    case 'GSIM':
      return updateGSIMDataState(element, user, version, versionIncrementation)

    default:
      return null
  }
}

export function updateAutofill (producer, schema, data, user, versionIncrementation) {
  return new Promise(resolve => {
    const name = schema.$ref.replace('#/definitions/', '')
    const properties = schema.definitions[name].properties
    const dataObject = JSON.parse(JSON.stringify(data))

    Object.keys(properties).forEach(key => {
      if (properties[key].hasOwnProperty('autofilled')) {
        if (producers(producer, key, user, data.version, versionIncrementation !== null)) {
          dataObject[key] = producers(producer, key, user, data.version, versionIncrementation)
        }
      }
    })

    resolve(dataObject)
  })
}
