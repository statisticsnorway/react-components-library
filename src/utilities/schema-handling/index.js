import { fetchData } from '../form-handling/fetch/Fetch'
import { mergeDefaultUISchema } from './Merge'
import { resolveProperties } from './Resolve'

export function schemaHandling (url, producer, endpoint) {
  return new Promise((resolve, reject) => {
    fetchData(url).then(result => {
      Promise.all(
        result.map(schema => {
          return mergeDefaultUISchema(producer, schema)
        })
      ).then(mergedSchemas => {
        Promise.all(
          mergedSchemas.map(mergedSchema => {
            return resolveProperties(producer, mergedSchema, endpoint)
          })
        ).then(resolvedSchemas => {
          resolve(resolvedSchemas)
        }).catch(error => {
          console.log(error)
          reject()
        })
      }).catch(error => {
        console.log(error)
        reject()
      })
    }).catch(error => {
      console.log(error)
      reject()
    })
  })
}
