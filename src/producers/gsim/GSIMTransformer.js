import { extractName } from '../../utilities/Common'

export function transformGSIMProperties (producer, schema, data, languageCode, fromSource, specialFeatures) {
  const returnData = JSON.parse(JSON.stringify(data))
  const name = extractName(schema.$ref)
  const properties = schema.definitions[name].properties

  Object.keys(properties).forEach(property => {
    if (properties[property].hasOwnProperty('customType') && properties[property].customType === 'MultilingualText') {
      if (returnData.hasOwnProperty(property)) {
        if (fromSource) {
          if (specialFeatures) {
            const values = []

            data[property].forEach(multilingual => {
              values.push({option: multilingual.languageCode, text: multilingual.languageText})
            })

            returnData[property] = values
          } else {
            let text = data[property][0].languageText

            data[property].forEach(multilingual => {
              if (multilingual.languageCode === languageCode) {
                text = multilingual.languageText
              }
            })

            returnData[property] = text
          }
        } else {
          if (specialFeatures) {
            const values = []

            data[property].forEach(multilingual => {
              values.push({languageCode: multilingual.option, languageText: multilingual.text})
            })

            returnData[property] = values
          } else {
            // TODO: This array overrides the array stored in the object in LDS which means it loses stored langauge texts
            // for other language codes on save. That might not be a desired outcome
            returnData[property] = [{languageCode: languageCode, languageText: data[property]}]
          }
        }
      }
    }
  })

  return returnData
}
