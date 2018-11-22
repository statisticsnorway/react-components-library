import React, { Component } from 'react'
import { Button, Header, Segment } from 'semantic-ui-react'
import JsonSchemaHandler from './schemaHandler/JsonSchemaHandler'

class Merge extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hideSchemaHandler: true
    }

    this.activateSchemasHandling = this.activateSchemasHandling.bind(this)
    this.deactivateSchemasHandling = this.deactivateSchemasHandling.bind(this)
  }

  activateSchemasHandling () {
    this.setState({
      ...this.state,
      hideSchemaHandler: false
    })
  }

  deactivateSchemasHandling () {
    this.setState({
      ...this.state,
      hideSchemaHandler: true
    })
  }

  render () {
    return (
      <div>

        <Segment basic textAlign='center'>
          <Header as='h1' dividing>
            Test av dc-react-component-library
          </Header>
        </Segment>
        <Segment basic textAlign='center'>
          <Button basic onClick={this.activateSchemasHandling}>Handle Schemas</Button>
          <Button basic onClick={this.deactivateSchemasHandling}>Cancel</Button>
          <Segment textAlign='left' name="jsonHandler" hidden={this.state.hideSchemaHandler}>
            <JsonSchemaHandler />
          </Segment>
        </Segment>
      </div>
    )
  }
}

export default Merge
