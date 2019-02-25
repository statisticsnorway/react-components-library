import populateOptionsInitial from './populateOptionsInitial'
import populateOptionsResult from './populateOptionsResult'

import { fetchGSIMOptions } from '../../producers/gsim/GSIMOptions'
import { populateOptions } from '../../utilities/schema-handling'

jest.mock('../../producers/gsim/GSIMOptions', () => ({fetchGSIMOptions: jest.fn()}))
fetchGSIMOptions.mockImplementation(() => Promise.resolve(populateOptionsInitial.options))

describe('Options', () => {
  it('Sets options correctly', () => {
    populateOptions('GSIM', populateOptionsInitial.schema, 'en').then(result => {
      expect(result).toEqual(populateOptionsResult.schema)
    })
  })
})
