import DefaultGSIMUISchema from '../../producers/gsim/DefaultGSIMUISchema'
import { resolveGSIMTableObject } from '../../producers/gsim'

function producers (producer) {
  switch (producer) {
    case 'GSIM':
      return DefaultGSIMUISchema

    default:
      return null
  }
}

export function resolveTableHeaders (producer) {
  return producers(producer).table.defaultTableHeaders
}

export function resolveTableObject (producer, data) {
  switch (producer) {
    case 'GSIM':
      return resolveGSIMTableObject(data)

    default:
      return null
  }
}
