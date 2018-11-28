import { transformProperties } from './Transformer'
import { putData } from '../http-clients/fetch'

export function saveData (producer, schema, data, endpoint) {
  return new Promise((resolve, reject) => {
    const saveableData = transformProperties(producer, schema, data, false)
    const url = endpoint + 'data/' + schema.$ref.replace('#/definitions/', '') + '/' + saveableData.id

    putData(url, saveableData).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
