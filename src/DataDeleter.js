import React from 'react'
import axios from 'axios'

export function dataDeleter (url, id) {
  return new Promise((resolve, reject) => {
    axios.delete(url + id, {
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
