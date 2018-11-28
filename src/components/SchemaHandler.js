import { fetchData } from '../utilities/http-clients/fetch'
import { mergeDefaultUISchema } from '../utilities/schema-handling/Merge'
import { resolveProperties } from '../utilities/schema-handling/Resolve'
import { mergeUISchema } from '../utilities/schema-handling/UISchema'

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
          console.log(error)
          reject(error)
        })
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    }).catch(error => {
      console.log(error)
      reject(error)
    })
  })
}