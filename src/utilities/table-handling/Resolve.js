import DefaultGSIMUISchema from '../../producers/gsim/DefaultGSIMUISchema'

function producers (producer) {
  switch (producer) {
    case 'GSIM':
      return DefaultGSIMUISchema

    default:
      return null
  }
}

export function resolveTableHeaders (producer) {
  return producers(producer).defaultTableHeaders
}
