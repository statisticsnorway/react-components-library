import { mergeDefaultUISchema } from '../utilities/schema-handling/Merge'
import { resolveProperties } from '../utilities/schema-handling/Resolve'
import { fetchData } from '../utilities/http-clients/fetch/Fetch'

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
