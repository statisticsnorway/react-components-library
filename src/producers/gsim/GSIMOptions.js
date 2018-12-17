import { fetchData } from '../../utilities/http-clients/fetch'

function createOptions (response, prefix, languageCode, addPrefix) {
  const options = []

  let cleanedPrefix = ''

  if (addPrefix) {
    cleanedPrefix = ' (' + prefix.replace(/\//ig, '') + ')'
  }

  Object.keys(response).forEach(value => {
    let text = response[value].name[0].languageText

    response[value].name.forEach(name => {
      if (name.languageCode === languageCode) text = name.languageText
    })

    options.push({
      key: response[value].id,
      text: text + cleanedPrefix,
      value: prefix + response[value].id
    })
  })

  return options
}

export function fetchGSIMOptions (url, languageCode, addPrefix) {
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
