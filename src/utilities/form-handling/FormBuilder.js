import React, { Component } from 'react'
import { Button, Dimmer, Form, Grid, Header, Message } from 'semantic-ui-react'

import { DCFormField } from 'dc-react-form-fields-library'
import { generateDataState } from '../schema-handling/DataState'
import { splitOnUppercase } from '../Common'
import { validation } from '../data-handling/Validator'
import { saveData } from '../data-handling/Saver'
import { updateAutofill } from '../data-handling/Autofiller'

const version = {
  component: 'DCRadio',
  name: 'versionIncrementation',
  displayName: 'Versjonsinkrementering',
  description: 'Hvordan skal versjonen inkrementeres?',
  value: '2',
  options: [
    {text: 'Major', value: '0'},
    {text: 'Minor', value: '1'},
    {text: 'Patch', value: '2'}
  ]
}

class FormBuilder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ready: false,
      readOnly: false,
      message: '',
      saved: false,
      versionIncrementation: '2',
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
    this.setState({readOnly: !this.state.readOnly}, () => {
      if (!this.state.readOnly) {
        this.setState({message: ''})
      }
    })
  }

  handleValueChange = (name, value) => {
    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      },
      saved: false
    })
  }

  handleVersionIncrementationChange = (name, value) => {
    this.setState({
      [name]: value,
      saved: false
    })
  }

  validateAndSave = (event) => {
    event.preventDefault()

    this.setState({ready: false}, () => {
      validation(this.state.schema, this.state.data).then(resultWithoutErrors => {
        this.setState({
          schema: resultWithoutErrors
        }, () => {
          updateAutofill(this.props.producer, this.state.schema, this.state.data, 'Test', this.state.versionIncrementation).then(result => {
            this.setState({
              data: result
            }, () => {
              const updatedSchema = {...this.state.schema}

              Object.keys(updatedSchema.definitions[this.state.name].properties).forEach(key => {
                if (result.hasOwnProperty(key)) {
                  if (updatedSchema.definitions[this.state.name].properties[key].hasOwnProperty('autofilled')) {
                    updatedSchema.definitions[this.state.name].properties[key].value = [result[key]]
                  } else {
                    updatedSchema.definitions[this.state.name].properties[key].value = result[key]
                  }
                }
              })

              this.setState({
                schema: updatedSchema
              }, () => {
                saveData(this.props.producer, this.state.schema, this.state.data, this.props.endpoint).then(response => {
                  this.setState({
                    ready: true,
                    saved: true,
                    message: 'Objektet ble lagret (saga-execution-id: ' + response['saga-execution-id'] + ')',
                    readOnly: true
                  })
                })
              })
            })
          }).catch(error => {
            this.setState({
              ready: true,
              saved: false,
              message: error
            })
          })
        })
      }).catch(resultWithErrors => {
        this.setState({
          ready: true,
          schema: resultWithErrors,
          saved: false,
          message: 'Objektet ble ikke lagret, rett opp feil og lagre igjen'
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
    const {ready, readOnly, message, saved, schema, name, description} = this.state

    if (ready) {
      const formIcon = readOnly ? 'lock' : 'unlock'
      const formIconColor = readOnly ? 'red' : 'green'
      const properties = schema.definitions[name].properties

      return (
        <Form>
          <Header as='h1' content={splitOnUppercase(name)} subheader={description}
                  icon={{name: formIcon, color: formIconColor, link: true, onClick: this.handleLockClick}} />
          {message !== '' && <Message color={saved ? 'green' : 'red'} content={message.toString()} />}
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

                <DCFormField properties={version} valueChange={this.handleVersionIncrementationChange} />
                <Button color='pink' content='Inner State' onClick={this.checkState} /> {/* TODO: Remove */}
                <Button color='green' content='Lagre' onClick={this.validateAndSave} />
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
