import { extractName } from '../../utilities/Common'

export function transformGSIMProperties (producer, schema, data, fromSource) {
  const returnData = JSON.parse(JSON.stringify(data))
  const name = extractName(schema.$ref)
  const properties = schema.definitions[name].properties

  Object.keys(properties).forEach(property => {
    if (properties[property].hasOwnProperty('customType') && properties[property].customType === 'MultilingualText') {
      if (returnData.hasOwnProperty(property)) {
        if (fromSource) {
          let text = data.name[0].languageText
          data[property].forEach(multilingual => {
            if (multilingual.languageCode === 'nb') {
              text = multilingual.languageText
            }
          })
          returnData[property] = text
        } else {
          const value = returnData[property]

          returnData[property] = [{languageCode: 'nb', languageText: value}]
        }
      }
    }
  })
  return returnData
}
