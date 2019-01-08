import DefaultUISchema from '../../producers/default/DefaultUISchema'
import DefaultGSIMUISchema from '../../producers/gsim/DefaultGSIMUISchema'
import { resolveDefaultTableObject } from '../../producers/default'
import { resolveGSIMTableObject } from '../../producers/gsim'

function producers (producer) {
  switch (producer) {
    case 'GSIM':
      return DefaultGSIMUISchema

    case 'Default':
      return DefaultUISchema

    default:
      return null
  }
}

export function resolveTableHeaders (producer) {
  return producers(producer).table.defaultTableHeaders
}

export function resolveTableObject (producer, data, languageCode) {
  switch (producer) {
    case 'GSIM':
      return resolveGSIMTableObject(data, languageCode)

    case 'Default':
      return resolveDefaultTableObject(data)

    default:
      return null
  }
}
