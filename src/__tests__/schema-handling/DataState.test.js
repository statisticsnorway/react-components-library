import setDataToSchemaInitial from './setDataToSchemaInitial'
import setDataToSchemaResult from './setDataToSchemaResult'

import { setDataToSchema } from '../../utilities/schema-handling/DataState'

describe('DataState', () => {
  it('Fills value properties in schema with values from data state', () => {
    expect.assertions(1)

    setDataToSchema(setDataToSchemaInitial.schema, setDataToSchemaInitial.data, 'en')
      .then(result => expect(result.returnSchema).toEqual(setDataToSchemaResult.schema))
  })
})
