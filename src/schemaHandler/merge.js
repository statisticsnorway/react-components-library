export function mergeDefaultUiSchema(schema, defaultUi) {
  const returnSchema = JSON.parse(schema)
  const defaultUiSchema = JSON.parse(defaultUi)
  const name = returnSchema.$ref.replace('#/definitions/', '')
  const properties = returnSchema.definitions[name].properties

  Object.keys(properties).forEach(key => {
    if(defaultUiSchema.ui.hasOwnProperty(properties[key].type)){
      returnSchema.definitions[name].properties[key].component = defaultUiSchema.ui[properties[key].type].component
    }
  })

  return returnSchema
}

export function mergeUiSchema(schema, uiSchemaFiles) {
  const returnSchema = JSON.parse(schema)
  const name = returnSchema.$ref.replace('#/definitions/', '')

  const uiSchemaFileName = 'UISchema_' + name + '.json'
  console.log(uiSchemaFileName)

  const properties = returnSchema.definitions[name].properties

  Object.keys(uiSchemaFiles).forEach(key => {
    const fileName = uiSchemaFiles[key].name
    if(fileName === uiSchemaFileName){
      let fileReader = new FileReader()
      fileReader.readAsText(uiSchemaFiles[key]);
      fileReader.onloadend = () => {
        let data = fileReader.result
        let uiSchema = JSON.parse(data.toString())
        Object.keys(properties).forEach(key => {
          if(uiSchema[name].hasOwnProperty(key)){
            Object.keys(uiSchema[name][key]).forEach(property => {
              let temp = uiSchema[name][key][property]
              returnSchema.definitions[name].properties[key][property] = uiSchema[name][key][property]
            })
          }
        })
      }
    }
  })
  return returnSchema
}