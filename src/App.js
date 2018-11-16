import React, { Component } from 'react';
import { Button, Grid, Segment, Menu } from 'semantic-ui-react'
import JsonSchemaHandler from './schemaHandler/JsonSchemaHandler'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hideSchemaHandler : true
    }

    this.activateSchemasHandling = this.activateSchemasHandling.bind(this)
    this.deactivateSchemasHandling = this.deactivateSchemasHandling.bind(this)
  }

  activateSchemasHandling() {
    this.setState({
      ...this.state,
      hideSchemaHandler : false
    })
  }

  deactivateSchemasHandling() {
    this.setState({
      ...this.state,
      hideSchemaHandler : true
    })
  }

  render() {
    return (
      <div className="App">
        <Button basic onClick={this.activateSchemasHandling}>Handle Schemas</Button>
        <Button basic onClick={this.deactivateSchemasHandling}>Cancel</Button>
        <Segment name="jsonHandler" hidden={this.state.hideSchemaHandler}>
          <JsonSchemaHandler />
        </Segment>
      </div>
    );
  }
}

export default App;
