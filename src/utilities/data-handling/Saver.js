import { transformProperties } from './Transformer'
import { dataSaver } from '../form-handling/axios/DataSaver'

export function saveData (producer, schema, data, endpoint) {
  const saveableData = transformProperties(producer, schema, data, false)
  const url = endpoint + 'data/' + schema.$ref.replace('#/definitions/', '') + '/' + saveableData.id

  console.log(url)
  console.log(saveableData)
  dataSaver(url, saveableData).then(response => {
    console.log(response)
  }).catch(error => {
    console.log(error)
  })
}
