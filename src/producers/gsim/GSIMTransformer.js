import { extractName } from '../../utilities/Common'

export function transformGSIMProperties (producer, schema, data, languageCode, fromSource) {
  const returnData = JSON.parse(JSON.stringify(data))
  const name = extractName(schema.$ref)
  const properties = schema.definitions[name].properties

  Object.keys(properties).forEach(property => {
    if (properties[property].hasOwnProperty('customType') && properties[property].customType === 'MultilingualText') {
      if (returnData.hasOwnProperty(property)) {
        if (fromSource) {
          let text = data[property][0].languageText

          data[property].forEach(multilingual => {
            if (multilingual.languageCode === languageCode) {
              text = multilingual.languageText
            }
          })

          returnData[property] = text
        } else {
          // TODO: This array overrides array stored in object in LDS which means it loses stored langauge texts for other
          // language codes on save.
          returnData[property] = [{languageCode: languageCode, languageText: data[property]}]
        }
      }
    }
  })

  return returnData
}
