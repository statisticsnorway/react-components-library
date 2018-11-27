import moment from 'moment'

const uuidv4 = require('uuid/v4')

function setVersion (version, versionIncrementation) {
  const versionIncrement = parseInt(versionIncrementation)
  const versionArray = version.split('.')

  let updatedVersion

  versionArray[versionIncrement] = parseInt(versionArray[versionIncrement]) + 1
  updatedVersion = versionArray.join('.')

  return updatedVersion
}

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

export function updateGSIMDataState (element, user, version, versionIncrementation) {
  switch (element) {
    case 'lastUpdatedDate':
    case 'versionValidFrom':
      return moment()

    case 'version':
      return setVersion(version, versionIncrementation)

    case 'lastUpdatedBy':
      return user

    default:
      return null
  }
}
