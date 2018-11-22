import moment from 'moment'

const uuidv4 = require('uuid/v4')

export function generateGSIMDataState (element, user) {
  switch (element) {
    case 'createdDate':
    case 'lastUpdatedDate':
    case 'versionValidFrom':
    case 'validFrom':
      return moment()

    case 'id':
      return uuidv4()

    case 'version':
      return '1.0.0'

    case 'lastUpdatedBy':
    case 'createdBy':
      return user

    default:
      return null
  }
}
