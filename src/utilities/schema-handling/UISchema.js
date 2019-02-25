import { mergeGSIMUISchema } from '../../producers/gsim'

export function mergeUISchema (producer, schema) {
  switch (producer) {
    case 'GSIM':
      return mergeGSIMUISchema(schema)

    case 'Default':
      return schema

    default:
      return null
  }
}
