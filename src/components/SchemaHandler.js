import { fetchData } from '../utilities/http-clients/fetch'
import { mergeDefaultUISchema, mergeUISchema, resolveProperties } from '../utilities/schema-handling'

export function SchemaHandler (url, producer, endpoint) {
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
          Promise.all(
            resolvedSchemas.map(resolvedSchema => {
              return mergeUISchema(producer, resolvedSchema)
            })
          ).then(finishedSchemas => {
            resolve(finishedSchemas)
          })
        }).catch(error => {
          reject(error)
        })
      }).catch(error => {
        reject(error)
      })
    }).catch(error => {
      reject(error)
    })
  })
}
