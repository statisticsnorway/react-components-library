import React from 'react'
import { splitOnUppercase, extractName, setVersion } from '../utilities/Common'


test('split sting on uppercase', () => {
  const splitString = splitOnUppercase('SplitOnUppercase')
  expect(splitString).toEqual('Split On Uppercase')
})


test('extract name from #/definitions/ string', () => {
  const onlyNameString = extractName('#/definitions/Name')
  expect (onlyNameString).toEqual('Name')
})


