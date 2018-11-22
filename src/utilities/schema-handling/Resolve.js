import { resolveGSIMProperties } from '../producers/gsim'

export function resolveProperties (producer, schema, url) {
  switch (producer) {
    case 'GSIM':
      return resolveGSIMProperties(schema, url)

    default:
      return null
  }
}
