import axios from 'axios'

export function dataDeleter (url) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response.statusText)

    }).catch((error) => {
      reject(error)
    })
  })
}
