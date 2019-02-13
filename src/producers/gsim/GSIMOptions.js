import { fetchData } from '../../utilities/http-clients/fetch'

export function createOptions (response, prefix, languageCode, addPrefix) {
  const options = []

  let cleanedPrefix = ''

  if (addPrefix) {
    cleanedPrefix = ' (' + prefix.replace(/\//ig, '') + ')'
  }

  if (Array.isArray(response)) {
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
  } else {
    let text = response.name[0].languageText

    response.name.forEach(name => {
      if (name.languageCode === languageCode) text = name.languageText
    })

    options.push({
      key: response.id,
      text: text + cleanedPrefix,
      value: prefix + response.id
    })
  }

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
