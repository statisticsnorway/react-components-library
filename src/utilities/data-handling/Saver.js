import { transformProperties } from './Transformer'
import { putData } from '../http-clients/fetch'
import { extractName } from '../Common'

export function saveData (producer, schema, data, endpoint, namespace, languageCode, specialFeatures) {
  return new Promise((resolve, reject) => {
    transformProperties(producer, schema, data, languageCode, false, specialFeatures).then(savableData => {
      const url = endpoint + namespace + extractName(schema.$ref) + '/' + savableData.id

      putData(url, endpoint, savableData, languageCode).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  })
}
