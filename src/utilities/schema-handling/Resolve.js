import { resolveDefaultProperties } from '../../producers/default'
import { resolveGSIMProperties } from '../../producers/gsim'

export function resolveProperties (producer, schema, url, specialFeatures, route) {
  switch (producer) {
    case 'GSIM':
      return resolveGSIMProperties(schema, url, specialFeatures, route)

    case 'Default':
      return resolveDefaultProperties(schema, url, specialFeatures, route)

    default:
      return null
  }
}
