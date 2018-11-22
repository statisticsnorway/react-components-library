import { generateGSIMDataState } from '../producers/gsim'

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
  return new Promise((resolve) => {
    const name = schema.$ref.replace('#/definitions/', '')
    const properties = schema.definitions[name].properties
    const dataObject = {}

    Object.keys(properties).forEach(key => {
      if (properties[key].hasOwnProperty('autofilled')) {
        dataObject[key] = producers(producer, key, user)
      } else {
        if (DEFAULT_VALUE_BY_TYPE.hasOwnProperty(properties[key].type)) {
          dataObject[key] = DEFAULT_VALUE_BY_TYPE[properties[key].type]
        } else {
          throw Error('Unknown type, cannot generate default value')
        }
      }
    })

    resolve(dataObject)
  })
}

export function fillDataState (producer, schema, user) {
  // Logic to fill data state when fetching data
}
