import React, { Component } from 'react';
import { Step, Icon, Button, Divider, Grid } from 'semantic-ui-react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import { mergeDefaultUiSchema, mergeUiSchema } from "./merge";
import 'codemirror/lib/codemirror.css';
import ui from '../utilities/DefaultUISchema'
import '../index.css'


class JsonSchemaHandler extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jsonSchema: '',
      defaultUiSchema: JSON.stringify(ui, null, 2),
      uiSchema: '',
      mergedDefaultUiJsonSchema: '',
      mergedUiJsonSchema: '',
      mergedDefaultUiSchemaReady: false,
      mergedUiSchemaReady: false,
      jsonSchemasReady: false,
      uiSchemasReady: false,
      uiSchemaFiles: [],
      ready: false,
      uploadingDone: false,
      errors: []
    }
  }

  componentDidMount() {

  }

  handleUploadInput(event, ref) {
    const files = event.target.files
    const length = files.length
    const ready = ref + 'Ready'

    for(let i = 0, l = length; i < l; i++) {
      const file = files[i]
      let fileReader = new FileReader()
      fileReader.readAsText(file)
      fileReader.onloadend = () => {
        let data = fileReader.result
        let json = JSON.parse(data)

        if(ref === 'jsonSchemas'){
          this.setState({
            ...this.state,
            jsonSchema: JSON.stringify(json, null, 2),
            jsonSchemasReady: true
          })
        } else if(ref === 'uiSchemas'){
          this.setState({
            uiSchemaFiles: files,
            uploadingDone: true
          })
        }
      }
    }

    this.setState({
      [ready]: true
    }, () => {
      this.setState({uploadingDone: true})
    })
  }

  uploadButtonClick = (event) => {
    this.refs[event.target.name].click()
  }

  handleMergeButtonClick = (event) => {
    if(event.target.name === 'mergeDefaultUI'){
      let mergedJsonSchema = mergeDefaultUiSchema(this.state.jsonSchema, this.state.defaultUiSchema)
      this.setState({
        ...this.state,
        mergedDefaultUiJsonSchema: JSON.stringify(mergedJsonSchema, null, 2),
        mergedDefaultUiSchemaReady: true
      })
    }

    if(event.target.name === 'mergeUiSchema'){
      let jsonSchemaMerged = mergeUiSchema(this.state.mergedDefaultUiJsonSchema, this.state.uiSchemaFiles)
      setTimeout(() => {
        this.setState({
          ...this.state,
          mergedUiJsonSchema: JSON.stringify(jsonSchemaMerged, null, 2),
          mergedUiJsonSchemaReady: true
        }, function() {
        });
      }, 10)
    }
  }

  render() {

    const {jsonSchemasReady, uiSchemasReady, mergedDefaultUiSchemaReady} = this.state
    return (
      <div>
        <Step.Group widths={3}>
          <Step link active ref="jsonSchema" completed={jsonSchemasReady}>
            <Icon name='file text' />
            <Step.Content>
              <Step.Title></Step.Title>
              <Step.Description></Step.Description>
              <Button name='jsonSchemaUploader' color='grey' content='Velg Json Schema'
                      onClick={(event) => {
                        this.uploadButtonClick(event)
                      }} />

              <input ref='jsonSchemaUploader' type='file' multiple style={{display: 'none'}} accept='.json'
                     onChange={(event, name = 'jsonSchemas') => {
                       this.handleUploadInput(event, name)
                     }} />
            </Step.Content>
          </Step>
          <Step link ref="defaultUiSchema">
            <Icon name='file text outline' />
            <Step.Content>
              <Step.Title>Default UI Schema</Step.Title>
              <Step.Description></Step.Description>
            </Step.Content>
          </Step>
          <Step link ref="uiSchema" completed={uiSchemasReady}>
            <Icon name='file image' />
            <Step.Content>
              <Step.Title></Step.Title>
              <Step.Description></Step.Description>
              <Button name='uiSchemaUploader' color='grey' content='Velg UI Schema for domain'
                      onClick={(event) => {
                        this.uploadButtonClick(event)
                      }} />
              <input ref='uiSchemaUploader' type='file' multiple style={{display: 'none'}} accept='.json'
                     onChange={(event, name = 'uiSchemas') => {
                       this.handleUploadInput(event, name)
                     }} />
            </Step.Content>
          </Step>
        </Step.Group>
        <div>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <CodeMirror
                  value={this.state.jsonSchema}
                  options={{
                    lineNumbers: true,
                    height: '100%',
                    readOnly: false,
                    autoScroll: false
                  }}
                  style={{"height": "800px"}}
                  onChange={(editor, data, value) => {
                  }}
                />
              </Grid.Column>
              <Grid.Column>
                <CodeMirror
                  value={this.state.defaultUiSchema}
                  options={{
                    lineNumbers: true,
                    height: '100%',
                    readOnly: false,
                    autoScroll: false
                  }}
                  style={{"height": "800px"}}
                  onChange={(editor, data, value) => {
                  }}
                />
              </Grid.Column>
              <Grid.Column>
                <CodeMirror
                  value={this.state.uiSchema}
                  options={{
                    lineNumbers: true,
                    height: '100%',
                    readOnly: false,
                    autoScroll: false
                  }}
                  style={{"height": "800px"}}
                  onChange={(editor, data, value) => {
                  }}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
                <Button.Group floated='left'>
                  <Button>Cancel</Button>
                  <Button.Or />
                  <Button name="mergeDefaultUI"
                          ref="mergeSchemas"
                          content='Merge Default UI Schema'
                          positive
                          onClick={(event) => {
                            this.handleMergeButtonClick(event)
                          }}
                          disabled={!(jsonSchemasReady)}
                  />
                </Button.Group>
              </Grid.Column>
              <Grid.Column>
                <Button.Group floated='left'>
                  <Button>Cancel</Button>
                  <Button.Or />
                  <Button name="mergeUiSchema"
                          content='Merge UI Schema'
                          positive
                          onClick={(event) => {
                            this.handleMergeButtonClick(event)
                          }}
                          disabled={!(jsonSchemasReady && mergedDefaultUiSchemaReady)}
                  />
                </Button.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider horizontal></Divider>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Divider horizontal>Merged default Ui Schema</Divider>
                <CodeMirror
                  value={this.state.mergedDefaultUiJsonSchema}
                  options={{
                    lineNumbers: true,
                    height: '100%',
                    readOnly: false,
                    autoScroll: false
                  }}
                  style={{"height": "800px"}}
                  onChange={(editor, data, value) => {
                  }}
                />
              </Grid.Column>
              <Grid.Column>
                <Divider horizontal>Merged UI Schema</Divider>
                <CodeMirror
                  value={this.state.mergedUiJsonSchema}
                  options={{
                    lineNumbers: true,
                    height: '100%',
                    readOnly: false,
                    autoScroll: false
                  }}
                  style={{"height": "800px"}}
                  onChange={(editor, data, value) => {
                  }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </div>
      </div>
    );
  }
}

export default JsonSchemaHandler;
