import { setVersion } from '../../utilities/Common'

const uuidv4 = require('uuid/v4')

export function generateGSIMDataState (element, user) {
  switch (element) {
    case 'createdDate':
    case 'lastUpdatedDate':
    case 'versionValidFrom':
    case 'validFrom':
      const now = new Date()

      return now.toISOString()

    case 'id':
      return uuidv4()

    case 'version':
      return '1.0.0'

    case 'createdBy':
    case 'lastUpdatedBy':
      return user

    default:
      return null
  }
}

export function updateNewGSIMDataState (element, user) {
  switch (element) {
    case 'createdDate':
    case 'lastUpdatedDate':
    case 'versionValidFrom':
    case 'validFrom':
      const now = new Date()

      return now.toISOString()

    case 'version':
      return '1.0.0'

    case 'createdBy':
    case 'lastUpdatedBy':
      return user

    default:
      return null
  }
}

export function updateGSIMDataState (element, user, version, versionIncrementation) {
  switch (element) {
    case 'lastUpdatedDate':
    case 'versionValidFrom':
      const now = new Date()

      return now.toISOString()

    case 'version':
      return setVersion(version, versionIncrementation)

    case 'lastUpdatedBy':
      return user

    default:
      return null
  }
}
