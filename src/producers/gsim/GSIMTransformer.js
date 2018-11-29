import { extractName } from '../../utilities/Common'

export function transformGSIMProperties (producer, schema, data, fromSource) {
  const returnObject = JSON.parse(JSON.stringify(data))
  const name = extractName(schema.$ref)
  const properties = schema.definitions[name].properties

  Object.keys(properties).forEach(property => {
    // TODO: Too long if
    if (properties[property].hasOwnProperty('customType') && properties[property].customType === 'MultilingualText' && returnObject.hasOwnProperty(property)) {
      if (fromSource) {
        let text = data.name[0].languageText
        data[property].forEach(multilingual => {
          if (multilingual.languageCode === 'nb') {
            text = multilingual.languageText
          }
        })
        returnObject[property] = text
      } else {
        const value = returnObject[property]

        returnObject[property] = [{languageCode: 'nb', languageText: value}]
      }
    }
  })
  return returnObject
}
