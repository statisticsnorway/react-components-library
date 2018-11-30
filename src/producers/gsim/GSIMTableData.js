import DefaultGSIMUISchema from '../../producers/gsim/DefaultGSIMUISchema'

export function resolveGSIMTableObject (data) {
  const tableSchema = DefaultGSIMUISchema.table
  const tableObject = {}

  tableSchema.defaultTableHeaders.forEach(header => {
    if (Object.keys(tableSchema.needsTransforming).includes(header)) {
      switch (tableSchema.needsTransforming[header]) {
        case 'MultilingualText':
          let text = data[header][0].languageText

          data[header].forEach(multilingual => {
            if (multilingual.languageCode === 'nb') {
              text = multilingual.languageText
            }
          })

          tableObject[header] = text
          break

        default:
          tableObject[header] = data[header]
      }
    } else {
      tableObject[header] = data[header]
    }
  })

  return tableObject
}
