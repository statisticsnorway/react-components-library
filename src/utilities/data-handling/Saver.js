import { transformProperties } from './Transformer'
import { putData } from '../http-clients/fetch'
import { extractName } from '../Common'

export function saveData (producer, schema, data, endpoint) {
  return new Promise((resolve, reject) => {
    transformProperties(producer, schema, data, false).then(savableData => {
      const url = endpoint + 'data/' + extractName(schema.$ref) + '/' + savableData.id

      putData(url, endpoint, savableData).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  })
}
