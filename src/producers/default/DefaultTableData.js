import DefaultUISchema from './DefaultUISchema'

// TODO: There is little difference between producers here that should be dealt with
export function resolveDefaultTableObject (data) {
  const tableSchema = DefaultUISchema.table
  const tableObject = {}

  tableSchema.defaultTableHeaders.forEach(header => {
    if (Object.keys(tableSchema.needsTransforming).includes(header)) {
      switch (tableSchema.needsTransforming[header]) {
        default:
          tableObject[header] = data[header]
      }
    } else {
      tableObject[header] = data[header]
    }
  })

  return tableObject
}
