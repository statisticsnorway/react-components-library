import React, { Component } from 'react'
import { dataFetcher } from './DataFetcher'
import { dataSaver } from './DataSaver'
import { dataDeleter } from './DataDeleter'
import { Form, Segment, Header, Divider, Button } from 'semantic-ui-react'
import JsonSchemaHandler from './schemaHandler/JsonSchemaHandler'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hideSchemaHandler: true
    }

    this.activateSchemasHandling = this.activateSchemasHandling.bind(this)
    this.deactivateSchemasHandling = this.deactivateSchemasHandling.bind(this)
  }

  activateSchemasHandling() {
    this.setState({
      ...this.state,
      hideSchemaHandler: false
    })
  }

  deactivateSchemasHandling() {
    this.setState({
      ...this.state,
      hideSchemaHandler: true
    })
  }

  handleOnClickFetch() {
    const ldsFetchUrl = 'http://localhost:9090/data/Agent/'

    dataFetcher(ldsFetchUrl).then((result) => console.log('Result from url ' + ldsFetchUrl + ': ', result)).catch((reason) => console.log('Error: ', reason))
  }

  handleOnClickSave() {
    const ldsSaveUrl = 'http://localhost:9090/data/Agent/b02e7d00-e740-11e8-9e27-758293bd596e'

    const data = {
      "id": "b02e7d00-e740-11e8-9e27-758293bd596e",
      "name":
        [{
          "languageCode": "nb",
          "languageText": "c"
        }],
      "description":
        [{
          "languageCode": "nb",
          "languageText": "c"
        }],
      "createdDate": "2018-11-13T12:36:53.092Z",
      "createdBy": "Test",
      "version": "1.0.0",
      "versionValidFrom": "2018-11-13T12:36:53.093Z",
      "lastUpdatedDate": "2018-11-13T12:36:53.093Z",
      "lastUpdatedBy": "Test",
      "validFrom": "2018-11-13T12:36:53.093Z",
      "validUntil": "2019-11-13T12:36:53.093Z",
      "agentType": "ORGANIZATION",
      "isExternal": false
    }

    dataSaver(ldsSaveUrl, data).then((result) => console.log('Result from url ' + ldsSaveUrl + ': ', result)).catch((reason) => console.log('Error: ', reason))
  }

  handleOnClickDelete () {
    const startUrl = 'http://localhost:9090/data/Agent'
    const id = 'b02e7d00-e740-11e8-9e27-758293bd596e'
    const ldsDeleteUrl = startUrl + '/' + id

    dataDeleter(ldsDeleteUrl).then((result) => console.log('Result from url ' + ldsDeleteUrl + ': ', result)).catch((reason) => console.log('Error: ', reason))
  }

  render () {
    return (
      <div>
        <Form>
          <Segment basic textAlign='center'>
            <Header as='h1' dividing>
              Test av dc-react-component-library
            </Header>
            <Divider />
            <Button onClick={this.handleOnClickFetch}>Fetch</Button>
            <Divider />
            <Button onClick={this.handleOnClickSave}>Save</Button>
          </Segment>
          <Segment basic textAlign='center'>
            <Button basic onClick={this.activateSchemasHandling}>Handle Schemas</Button>
            <Button basic onClick={this.deactivateSchemasHandling}>Cancel</Button>
            <Segment textAlign='left' name="jsonHandler" hidden={this.state.hideSchemaHandler}>
              <JsonSchemaHandler />
            </Segment>
            <Header as='h1' dividing>
              Test av dc-react-component-library
            </Header>
            <Divider/>
            <Button onClick={this.handleOnClickFetch}>Fetch</Button>
            <Divider/>
            <Button onClick={this.handleOnClickSave}>Save</Button>
            <Divider/>
            <Button onClick={this.handleOnClickDelete}>Delete</Button>
          </Segment>
        </Form>
      </div>
    )
  }
}

export default App
