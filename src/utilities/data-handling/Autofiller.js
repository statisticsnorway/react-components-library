import { updateDefaultDataState, updateNewDefaultDataState } from '../../producers/default'
import { updateGSIMDataState, updateNewGSIMDataState } from '../../producers/gsim'
import { extractName } from '../Common'

function producers (producer, element, user, version, versionIncrementation) {
  switch (producer) {
    case 'GSIM':
      return updateGSIMDataState(element, user, version, versionIncrementation)

    case 'GSIMNew':
      return updateNewGSIMDataState(element, user)

    case 'Default':
      return updateDefaultDataState(element, version, versionIncrementation)

    case 'DefaultNew':
      return updateNewDefaultDataState(element)

    default:
      return null
  }
}

export function updateAutofill (producer, schema, data, user, versionIncrementation, isNew) {
  return new Promise(resolve => {
    const name = extractName(schema.$ref)
    const properties = schema.definitions[name].properties
    const returnData = JSON.parse(JSON.stringify(data))

    Object.keys(properties).forEach(key => {
      if (properties[key].hasOwnProperty('autofilled')) {
        if (isNew) {
          const updateNewProducer = producer + 'New'

          if (producers(updateNewProducer, key, user) !== null) {
            returnData[key] = producers(updateNewProducer, key, user)
          }
        } else {
          if (producers(producer, key, user, data.version, versionIncrementation) !== null) {
            returnData[key] = producers(producer, key, user, data.version, versionIncrementation)
          }
        }
      }
    })

    resolve(returnData)
  })
}

export function setAutofillAndClean (schema, data, hiddenFields) {
  return new Promise(resolve => {
    const name = extractName(schema.$ref)
    const returnSchema = JSON.parse(JSON.stringify(schema))
    const returnData = JSON.parse(JSON.stringify(data))

    Object.keys(returnSchema.definitions[name].properties).forEach(key => {
      if (data.hasOwnProperty(key)) {
        if (returnSchema.definitions[name].properties[key].hasOwnProperty('autofilled')) {
          returnSchema.definitions[name].properties[key].value = [data[key]]
        } else {
          returnSchema.definitions[name].properties[key].value = data[key]
        }
      }
    })

    Object.keys(data).forEach(key => {
      if (hiddenFields.includes(key)) {
        delete returnData[key]
      }
    })

    resolve({returnSchema, returnData})
  })
}
