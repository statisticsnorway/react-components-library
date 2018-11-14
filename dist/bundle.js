'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('react');
var axios = _interopDefault(require('axios'));

function dataSaver(url, data) {
  return new Promise(function (resolve, reject) {
    axios.put(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      resolve(response.statusText);
    }).catch(function (error) {
      reject(error);
    });
  });
}

//export { dataFetcher } from './DataFetcher'

exports.dataSaver = dataSaver;
