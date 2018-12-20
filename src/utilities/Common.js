export function splitOnUppercase (string) {
  if (typeof string === 'string') {
    return string.match(/[A-Z][a-z]+|[0-9]+/g).join(' ')
  } else {
    return string
  }
}

export function extractName (string) {
  if (typeof string === 'string') {
    return string.replace('#/definitions/', '')
  } else {
    return string
  }
}

export function setVersion (version, versionIncrementation) {
  const versionIncrement = parseInt(versionIncrementation)
  const versionArray = version.split('.')

  versionArray[versionIncrement] = parseInt(versionArray[versionIncrement]) + 1

  return versionArray.join('.')
}
