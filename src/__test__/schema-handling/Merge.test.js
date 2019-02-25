import cleanDefinitionsDefinitions from './cleanDefinitionsDefinitions'
import cleanDefinitionsReturnSchema from './cleanDefinitionsReturnSchema'
import cleanDefinitionsResult from './cleanDefinitionsResult'

import updateAndCleanPropertiesProperties from './updateAndCleanPropertiesProperties'
import updateAndCleanPropertiesReturnSchema from './updateAndCleanPropertiesReturnSchema'
import updateAndCleanPropertiesResult from './updateAndCleanPropertiesResult'
import DefaultGSIMUISchema from '../../producers/gsim/DefaultGSIMUISchema'

import mergeDefaultUISchemaSchema from './mergeDefaultUISchemaSchema'
import mergeDefaultUISchemaResult from './mergeDefaultUISchemaResult'

import { cleanDefinitions, updateAndCleanProperties, mergeDefaultUISchema } from '../../utilities/schema-handling/Merge'

const util = require('util')

describe('Merge', () => {
  it('cleanDefinitions', () => {
    const definitions = cleanDefinitionsDefinitions
    const returnSchema = cleanDefinitionsReturnSchema
    const result = cleanDefinitionsResult

    cleanDefinitions(definitions, returnSchema)

    return expect(returnSchema).toEqual(result)
  })

  it('updateAndCleanProperties', () => {
    const properties = updateAndCleanPropertiesProperties
    const returnSchema = updateAndCleanPropertiesReturnSchema
    const defaultUISchema = DefaultGSIMUISchema
    const name = 'Agent'
    const result = updateAndCleanPropertiesResult

    updateAndCleanProperties(properties, returnSchema, defaultUISchema, name)

    return expect(returnSchema).toEqual(result)
  })

  it('mergeDefaultUISchema', () => {
    const producer = 'GSIM'
    const schema = mergeDefaultUISchemaSchema
    const result = mergeDefaultUISchemaResult

    return mergeDefaultUISchema(producer, schema).then(mergedSchemas =>
      expect(mergedSchemas).toEqual(result))
  })
})







