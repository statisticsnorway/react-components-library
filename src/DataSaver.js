import React from 'react'
import axios from 'axios'

export function dataSaver (url, data) {
  return new Promise((resolve, reject) => {
    axios.put(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
        resolve(response.statusText)

      }).catch((error) => {
      reject(error)
    })
  })
}
