import DescribedValueDomainUISchema from './ui-schemas/DescribedValueDomainUISchema'
import { extractName } from '../../utilities/Common'

export function mergeGSIMUISchema (schema) {
  return new Promise(resolve => {
    const returnSchema = JSON.parse(JSON.stringify(schema))
    const name = extractName(schema.$ref)
    const properties = JSON.parse(JSON.stringify(schema.definitions[name].properties))

    if (DescribedValueDomainUISchema.name === name) {
      Object.keys(properties).forEach(key => {
        if (DescribedValueDomainUISchema.hideOnChoice.hasOwnProperty(key)) {
          returnSchema.definitions[name].properties[key].hideOnChoice = DescribedValueDomainUISchema.hideOnChoice[key]
        }
      })
    }

    resolve(returnSchema)
  })
}
