import React from 'react'
import { splitOnUppercase, extractName, setVersion, handleRoute } from '../utilities/Common'

test('splitOnUppercase', () => {
  const splitString = splitOnUppercase('SplitOnUppercase')
  expect(splitString).toEqual('Split On Uppercase')
})

test('extractName', () => {
  const onlyNameString = extractName('#/definitions/Name')
  expect(onlyNameString).toEqual('Name')
})

test('setVersion', () => {
  const version = '1'
  const versionIncrement = ''
  const newVersion = setVersion(version, versionIncrement)
  expect(newVersion).toEqual('1')
})

test('handleRoute', () => {
  const stringWith = 'stringWith/'
  const stringWithout = handleRoute(stringWith)
  expect(stringWithout).toEqual('stringWith')
})
