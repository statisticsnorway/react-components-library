import { mergeGSIMUISchema } from '../../producers/gsim'

export function mergeUISchema (producer, schema) {
  switch (producer) {
    case 'GSIM':
      return mergeGSIMUISchema(schema)

    default:
      return null
  }
}
