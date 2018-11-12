'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('react');
var axios = _interopDefault(require('axios'));

var dataFetcher = function dataFetcher(url) {
  return new Promise(function (resolve, reject) {
    axios.get(url).then(function (response) {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
};

exports.DataFetcher = dataFetcher;
