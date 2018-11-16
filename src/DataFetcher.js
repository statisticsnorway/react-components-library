import React from 'react'
import axios from 'axios'

export function dataFetcher (url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        resolve(response.data)

      }).catch((error) => {
      reject(error)
    })
  })
}

