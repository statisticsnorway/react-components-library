import { setVersion } from '../../utilities/Common'

const uuidv4 = require('uuid/v4')

export function generateDefaultDataState (element) {
  switch (element) {
    case 'id':
      return uuidv4()

    case 'version':
      return '1.0.0'

    default:
      return null
  }
}

export function updateNewDefaultDataState (element) {
  switch (element) {
    case 'version':
      return '1.0.0'

    default:
      return null
  }
}

export function updateDefaultDataState (element, version, versionIncrementation) {
  switch (element) {
    case 'version':
      return setVersion(version, versionIncrementation)

    default:
      return null
  }
}
