import { fetchData } from '../../http-clients/fetch/Fetch'

export function fetchGSIMOptions (url) {
  return new Promise(resolve => {
    const options = []

    fetchData(url).then(response => {
      const prefix = '/' + url.substring(url.lastIndexOf('/') + 1) + '/'

      if (response.length !== 0) {
        Object.keys(response).forEach(value => {
          let text = response[value].name[0].languageText

          response[value].name.forEach(name => {
            if (name.languageCode === 'nb') {
              text = name.languageText
            }
          })

          options.push({
            key: response[value].id,
            text: text,
            value: prefix + response[value].id
          })
        })

        resolve(options)
      } else {
        resolve(options)
      }
    }).catch(() => {
      // TODO: Tell user something went wrong
      resolve(options)
    })
  })
}
