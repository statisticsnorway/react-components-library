import { generateGSIMDataState } from '../../producers/gsim'
import { transformProperties } from '../data-handling'
import { fetchData } from '../http-clients/fetch'
import { extractName } from '../Common'
import { MESSAGES } from '../Enum'

const DEFAULT_VALUE_BY_TYPE = {
  array: [],
  boolean: false,
  number: '',
  object: {},
  string: ''
}

function producers (producer, element, user) {
  switch (producer) {
    case 'GSIM':
      return generateGSIMDataState(element, user)

    default:
      return null
  }
}

export function generateDataState (producer, schema, user) {
  return new Promise(resolve => {
    const name = extractName(schema.$ref)
    const properties = schema.definitions[name].properties
    const dataObject = {}

    Object.keys(properties).forEach(key => {
      if (properties[key].hasOwnProperty('autofilled')) {
        dataObject[key] = producers(producer, key, user)
      } else {
        if (DEFAULT_VALUE_BY_TYPE.hasOwnProperty(properties[key].type)) {
          dataObject[key] = DEFAULT_VALUE_BY_TYPE[properties[key].type]
        } else {
          throw Error(MESSAGES.UNKNOWN_GENERATE)
        }
      }
    })

    resolve(dataObject)
  })
}

export function fillDataState (producer, schema, id, endpoint) {
  return new Promise((resolve, reject) => {
    const name = schema.$ref.replace('#/definitions/', '')
    const url = endpoint + 'data/' + name + '/' + id

    fetchData(url).then(response => {
      transformProperties(producer, schema, response, true).then(transformedData => {
        resolve(transformedData)
      })
    }).catch(error => {
      reject(error)
    })
  })
}
