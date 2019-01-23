import React from 'react'
import { splitOnUppercase, extractName, setVersion, handleRoute } from '../utilities/Common'


test('split sting on uppercase', () => {
  const splitString = splitOnUppercase('SplitOnUppercase')
  expect(splitString).toEqual('Split On Uppercase')
})


test('extract name from #/definitions/ string', () => {
  const onlyNameString = extractName('#/definitions/Name')
  expect (onlyNameString).toEqual('Name')
})

test('set version', () => {
  const version = '1'
  const versionIncrement = ''
  const newVersion = setVersion(version, versionIncrement)
  expect (newVersion).toEqual('1')
})

test('remove / from string', () => {
  const stringWith = 'stringWith/'
  const stringWithout = handleRoute(stringWith)
  expect (stringWithout).toEqual('stringWith')
})
