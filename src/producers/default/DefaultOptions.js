import { fetchData } from '../../utilities/http-clients/fetch'

// TODO: There is little difference between producers here that should be dealt with
function createOptions (response, prefix, languageCode, addPrefix) {
  const options = []

  let cleanedPrefix = ''

  if (addPrefix) {
    cleanedPrefix = ' (' + prefix.replace(/\//ig, '') + ')'
  }

  Object.keys(response).forEach(value => {
    let text = response[value].id

    if (response[value].name !== undefined) {
      text = response[value].name
    }

    options.push({
      key: response[value].id,
      text: text + cleanedPrefix,
      value: prefix + response[value].id
    })
  })

  return options
}

export function fetchDefaultOptions (url, languageCode, addPrefix) {
  return new Promise((resolve, reject) => {
    fetchData(url).then(response => {
      const prefix = '/' + url.substring(url.lastIndexOf('/') + 1) + '/'

      if (response.length !== 0) {
        resolve(createOptions(response, prefix, languageCode, addPrefix))
      } else {
        resolve([])
      }
    }).catch(error => {
      reject(error)
    })
  })
}
