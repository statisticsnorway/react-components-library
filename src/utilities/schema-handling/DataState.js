import { generateDefaultDataState } from '../../producers/default'
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

    case 'Default':
      return generateDefaultDataState(element)

    default:
      return null
  }
}

export function generateDataState (producer, schema, user, languageCode) {
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
          throw Error(MESSAGES.UNKNOWN_GENERATE[languageCode])
        }
      }
    })

    resolve(dataObject)
  })
}

export function fillDataState (producer, schema, id, endpoint, namespace, languageCode, specialFeatures) {
  return new Promise((resolve, reject) => {
    const name = extractName(schema.$ref)
    const url = endpoint + namespace + name + '/' + id

    fetchData(url, languageCode).then(response => {
      transformProperties(producer, schema, response, languageCode, true, specialFeatures).then(transformedData => {
        resolve(transformedData)
      })
    }).catch(error => {
      reject(error)
    })
  })
}

export function setDataToSchema (schema, data, languageCode) {
  return new Promise(resolve => {
    const name = extractName(schema.$ref)
    const returnSchema = JSON.parse(JSON.stringify(schema))
    const properties = returnSchema.definitions[name].properties

    let returnHiddenFields = []

    Object.keys(data).forEach(key => {
      if (properties[key].hasOwnProperty('autofilled')) {
        properties[key].value = [data[key]]
      } else {
        if (data[key] !== '' && (Array.isArray(data[key]) && data[key].length > 0)) {
          if (properties[key].component === 'UIDropdown') {
            if (!properties[key].options.some(r => data[key].includes(r.value))) {
              properties[key].warning = MESSAGES.MISSING_LINK[languageCode]
            }
          }

          if (properties[key].component === 'UIMultiInput') {
            if (data[key].hasOwnProperty('option') && !properties[key].options.some(r => data[key].option === r.value)) {
              properties[key].warning = MESSAGES.MISSING_LINK[languageCode]
            }
          }
        }

        properties[key].value = data[key]
      }
    })

    Object.keys(properties).forEach(property => {
      if (properties[property].hasOwnProperty('hideOnChoice')) {
        returnHiddenFields = returnHiddenFields.concat(properties[property].hideOnChoice[data[property]])
      }
    })

    resolve({ returnSchema, returnHiddenFields })
  })
}
