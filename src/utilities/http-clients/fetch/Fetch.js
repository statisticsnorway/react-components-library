import { MESSAGES } from '../../Enum'

export function fetchData (url, languageCode, timeout = 3000) {
  return new Promise((resolve, reject) => {
    const controller = new AbortController()
    const signal = controller.signal

    let timer = setTimeout(() => {
      reject(MESSAGES.TIMEOUT[languageCode] + url)
      controller.abort()
    }, timeout)

    fetch(url, {
      signal: signal,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(response => {
      if ((response.status >= 200 && response.status < 300) || response.status === 404) {
        response.json().then(
          json => resolve(json)
        )
      } else {
        response.text().then(text => {
          if (text === null || text === '') {
            try {
              text = response.statusText.toString()
            } catch (error) {
              text = 'Error: '
            }
          }

          reject(text + ' (' + url + ')')
        })
      }
    }).catch(error => {
      reject(error.toString() + ' \'' + url + '\'')
    }).finally(() =>
      clearTimeout(timer)
    )
  })
}
