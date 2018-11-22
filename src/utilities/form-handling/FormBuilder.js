import React, { Component } from 'react'
import { Button, Dimmer, Form, Grid, Header } from 'semantic-ui-react'

import { DCFormField } from 'dc-react-form-fields-library'
import { generateDataState } from '../schema-handling/DataState'
import { splitOnUppercase } from '../Common'
import { checkRequiredIsNotEmpty, validate } from '../data-handling/Validator'

class FormBuilder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ready: false,
      readOnly: false,
      data: {},
      schema: {},
      name: this.props.schema.$ref.replace('#/definitions/', ''),
      description: this.props.schema.definitions[this.props.schema.$ref.replace('#/definitions/', '')].description
    }
  }

  componentDidMount () {
    const schema = {...this.props.schema}

    generateDataState('GSIM', schema, 'Test').then(result => {
      Object.keys(schema.definitions[this.state.name].properties).forEach(key => {
        if (schema.definitions[this.state.name].properties[key].hasOwnProperty('autofilled')) {
          schema.definitions[this.state.name].properties[key].value = [result[key]]
        }
      })

      if (this.props.params.id === 'new') {
        this.setState({
          data: result,
          schema: schema
        }, () => this.setState({ready: true}))
      } else {
        // Logic to fetch data and populate values
      }
    })
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return this.state.data === nextState.data
  }

  handleLockClick = () => {
    this.setState({readOnly: !this.state.readOnly})
  }

  handleValueChange = (name, value) => {
    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    })
  }

  validate = () => {
    this.setState({ready: false}, () => {
      validate(this.state.schema, this.state.data).then(result => {
        this.setState({
          ready: true,
          schema: result
        })
      })
    })
  }

  // TODO: Remove
  checkState = () => {
    console.log(this.state)
    console.log(this.props)
  }

  render () {
    const {ready, readOnly, schema, name, description} = this.state

    if (ready) {
      const formIcon = readOnly ? 'lock' : 'unlock'
      const formIconColor = readOnly ? 'red' : 'green'
      const properties = schema.definitions[name].properties

      return (
        <Form>
          <Header as='h1' content={splitOnUppercase(name)} subheader={description}
                  icon={{name: formIcon, color: formIconColor, link: true, onClick: this.handleLockClick}} />
          <Dimmer.Dimmable dimmed={readOnly}>
            <Dimmer active={readOnly} style={{
              backgroundColor: 'rgba(0,0,0,.01)',
              border: 'solid',
              borderWidth: '0.1rem',
              borderColor: 'rgba(219,40,40,.1'
            }} />
            <Grid columns='equal' style={{padding: '0.5rem'}} divided>
              <Grid.Column>
                {Object.keys(properties).map((property, index) => {
                  if (!properties[property].hasOwnProperty('autofilled') && properties[property].group !== 'common') {
                    return <DCFormField key={index} properties={properties[property]}
                                        valueChange={this.handleValueChange} />
                  }

                  return null
                })}
              </Grid.Column>
              <Grid.Column>
                {Object.keys(properties).map((property, index) => {
                  if (!properties[property].hasOwnProperty('autofilled') && properties[property].group === 'common') {
                    return <DCFormField key={index} properties={properties[property]}
                                        valueChange={this.handleValueChange} />
                  }

                  return null
                })}
              </Grid.Column>
              <Grid.Column>
                {Object.keys(properties).map((property, index) => {
                  if (properties[property].hasOwnProperty('autofilled')) {
                    return <DCFormField key={index} properties={properties[property]}
                                        valueChange={this.handleValueChange} />
                  }

                  return null
                })}
                <Button color='pink' content='Inner State' onClick={this.checkState} /> {/* TODO: Remove */}
                <Button color='yellow' content='validate' onClick={this.validate} />
              </Grid.Column>
            </Grid>
          </Dimmer.Dimmable>
        </Form>
      )
    }

    return (
      <Header as='h1'
              content={splitOnUppercase(name)}
              subheader={description}
              icon={{name: 'spinner', color: 'teal', loading: true}} />
    )
  }
}

export default FormBuilder
