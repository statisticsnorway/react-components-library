import { fetchData } from '../utilities/http-clients/fetch'
import { mergeDefaultUISchema, mergeUISchema, resolveProperties } from '../utilities/schema-handling'
import { MESSAGES } from '../utilities/Enum'

export function SchemaHandler (url, producer, endpoint, specialFeatures, route) {
  return new Promise((resolve, reject) => {
    fetchData(url).then(result => {
      Promise.all(
        result.map(schema => {
          return mergeDefaultUISchema(producer, schema)
        })
      ).then(mergedSchemas => {
        Promise.all(
          mergedSchemas.map(mergedSchema => {
            return resolveProperties(producer, mergedSchema, endpoint, specialFeatures, route)
          })
        ).then(resolvedSchemas => {
          Promise.all(
            resolvedSchemas.map(resolvedSchema => {
              return mergeUISchema(producer, resolvedSchema)
            })
          ).then(finishedSchemas => {
            resolve(finishedSchemas)
          }).catch(error => {
            reject(MESSAGES.SCHEMA_HANDLER_ERROR + error.toString())
          })
        }).catch(error => {
          reject(MESSAGES.SCHEMA_HANDLER_ERROR + error.toString())
        })
      }).catch(error => {
        reject(MESSAGES.SCHEMA_HANDLER_ERROR + error.toString())
      })
    }).catch(error => {
      reject(error)
    })
  })
}
