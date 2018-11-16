export function mergeDefaultUiSchema(schema, defaultUi) {
  let jsonSchema = JSON.parse(schema)
  let uiDefaultSchema = JSON.parse(defaultUi)

  let definitions = jsonSchema.definitions
  let uiDefaultTypes = uiDefaultSchema.ui

  for(let definition in definitions) {
    if(definitions.hasOwnProperty(definition)){
      let properties = definitions[definition].properties
      for(let property in properties) {
        if(properties.hasOwnProperty(property)){
          let propertyList = properties[property]
          for(let propertyValue in propertyList) {
            if(propertyList.hasOwnProperty(propertyValue)){
              if(propertyValue === 'type'){
                if(uiDefaultTypes.hasOwnProperty(propertyList[propertyValue])){
                  let defaultProperty = uiDefaultTypes[propertyList[propertyValue]]
                  for(let key in defaultProperty) {
                    if(defaultProperty.hasOwnProperty(key)){
                      propertyList[key] = defaultProperty[key]
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  jsonSchema.definitions = definitions
  return jsonSchema
}

export function mergeUiSchemas(schema, uiSchemaFiles) {

  let jsonSchema = JSON.parse(schema)
  let jsonDefinitions = jsonSchema.definitions

  const length = uiSchemaFiles.length

  for(let i = 0, l = length; i < l; i++) {
    const file = uiSchemaFiles[i]
    let fileReader = new FileReader()
    fileReader.readAsText(file);
    fileReader.onloadend = () => {
      let data = fileReader.result

      let fileName = file.name.toString().substring(file.name.toString().indexOf('_') + 1, file.name.toString().length)
      fileName = fileName.replace(/\.[^/.]+$/, "");

      for(let definition in jsonDefinitions) {
        if(jsonDefinitions.hasOwnProperty(definition)){
          if(fileName === definition){
            let jsonObjects = jsonDefinitions[definition]['properties']
            let uiSchema = JSON.parse(data.toString())

            let uiSchemaObjects = uiSchema[definition]
            for(let jsonObject in jsonObjects) {
              if(jsonObjects.hasOwnProperty(jsonObject)){
                if(uiSchemaObjects.hasOwnProperty(jsonObject)){
                  let jsonProperties = jsonObjects[jsonObject]
                  let uiSchemaProperties = uiSchemaObjects[jsonObject]
                  for(let uiSchemaProperty in uiSchemaProperties) {
                    jsonProperties[uiSchemaProperty] = uiSchemaProperties[uiSchemaProperty]
                  }
                }
              }
            }
          }
          jsonSchema.definitions[definition] = jsonDefinitions[definition]
        }
      }
    }
  }
  return jsonSchema
}