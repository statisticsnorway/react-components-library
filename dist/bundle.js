'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('react');
var axios = _interopDefault(require('axios'));

function dataFetcher(url) {
  return new Promise(function (resolve, reject) {
    axios.get(url).then(function (response) {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
}

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

function dataDeleter(url, id) {
  return new Promise(function (resolve, reject) {
    axios.delete(url + id, {
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

exports.dataFetcher = dataFetcher;
exports.dataSaver = dataSaver;
exports.dataDeleter = dataDeleter;
