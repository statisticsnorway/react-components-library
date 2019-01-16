import { resolveDefaultProperties } from '../../producers/default'
import { resolveGSIMProperties } from '../../producers/gsim'

export function resolveProperties (producer, schema, url, namespace, specialFeatures, route) {
  switch (producer) {
    case 'GSIM':
      return resolveGSIMProperties(schema, url, namespace, specialFeatures, route)

    case 'Default':
      return resolveDefaultProperties(schema, url, namespace, specialFeatures, route)

    default:
      return null
  }
}
