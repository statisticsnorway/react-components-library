import { transformProperties } from './Transformer'
import { putData } from '../http-clients/fetch'

export function saveData (producer, schema, data, endpoint) {
  return new Promise((resolve, reject) => {
    transformProperties(producer, schema, data, false).then(savableData => {
      const url = endpoint + 'data/' + schema.$ref.replace('#/definitions/', '') + '/' + savableData.id

      putData(url, savableData).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  })
}
