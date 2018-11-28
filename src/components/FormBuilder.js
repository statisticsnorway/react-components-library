import React, { Component } from 'react'
import { Button, Dimmer, Form, Grid, Header, Message } from 'semantic-ui-react'

import { DCFormField } from 'dc-react-form-fields-library'
import { defaultVersioning } from '../producers'
import { splitOnUppercase } from '../utilities/Common'
import { saveData, updateAutofill, validation } from '../utilities/data-handling'
import { fillDataState, generateDataState, populateOptions } from '../utilities/schema-handling'

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
      hiddenFields: [],
      name: this.props.schema.$ref.replace('#/definitions/', ''),
      description: this.props.schema.definitions[this.props.schema.$ref.replace('#/definitions/', '')].description,
      problem: false
    }
  }

  componentDidMount () {
    populateOptions(this.props.producer, this.props.schema).then(schema => {
      if (this.props.params.id === 'new') {
        this.newComponent(this.props.producer, schema, 'Test')
      } else {
        fillDataState(this.props.producer, schema, this.props.params.id, this.props.endpoint).then(result => {
          const properties = schema.definitions[this.state.name].properties

          let hiddenFields = []

          Object.keys(result).forEach(key => {
            if (properties[key].hasOwnProperty('autofilled')) {
              properties[key].value = [result[key]]
            } else {
              properties[key].value = result[key]
            }
          })

          Object.keys(properties).forEach(property => {
            if (properties[property].hasOwnProperty('hideOnChoice')) {
              hiddenFields = hiddenFields.concat(properties[property].hideOnChoice[result[property]])
            }
          })

          this.setState({
            data: result,
            schema: schema,
            hiddenFields: hiddenFields
          }, () => this.setState({ready: true}))
        }).catch(error => {
          this.setState({
            problem: true,
            message: 'Could not fill data state: ' + error
          })
        })
      }
    }).catch(error => {
      this.setState({
        problem: true,
        message: 'Could not populate dropdown: ' + error
      })
    })
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.params.id !== nextProps.params.id && nextProps.params.id === 'new') {
      this.setState({ready: false}, () => {
        populateOptions(this.props.producer, this.props.schema).then(schema => {
          this.newComponent(this.props.producer, schema, 'Test')
        })
      })

      return true
    }

    if (this.state.hiddenFields !== nextState.hiddenFields) {
      return true
    }

    return this.state.data === nextState.data
  }

  newComponent (producer, schema, user) {
    const properties = schema.definitions[this.state.name].properties

    generateDataState(producer, schema, user).then(result => {
      Object.keys(properties).forEach(key => {
        if (properties[key].hasOwnProperty('autofilled')) {
          properties[key].value = [result[key]]
        }
      })

      this.setState({
        data: result,
        schema: schema,
        hiddenFields: [],
        message: '',
        saved: false,
        readOnly: false
      }, () => this.setState({ready: true}))
    })
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

  handleVisibilityChange = (name, value) => {
    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      },
      hiddenFields: this.state.schema.definitions[this.state.name].properties[name].hideOnChoice[value],
      saved: false
    })
  }

  validateAndSave = (event) => {
    event.preventDefault()

    const schema = JSON.parse(JSON.stringify(this.state.schema))
    const data = JSON.parse(JSON.stringify(this.state.data))

    this.setState({ready: false}, () => {
      validation(schema, data).then(resultWithoutErrors => {
        this.setState({schema: resultWithoutErrors}, () => {
          updateAutofill(this.props.producer, schema, data, 'Test', this.state.versionIncrementation, (this.props.params.id === 'new')).then(result => {
            this.setState({data: result}, () => {
              const updatedSchema = JSON.parse(JSON.stringify(this.state.schema))
              const savedMessage = this.props.params.id === 'new' ? 'lagret' : 'oppdatert'

              Object.keys(updatedSchema.definitions[this.state.name].properties).forEach(key => {
                if (result.hasOwnProperty(key)) {
                  if (updatedSchema.definitions[this.state.name].properties[key].hasOwnProperty('autofilled')) {
                    updatedSchema.definitions[this.state.name].properties[key].value = [result[key]]
                  } else {
                    updatedSchema.definitions[this.state.name].properties[key].value = result[key]
                  }
                }
              })

              if (this.props.params.id === 'new') {
                const newUrl = window.location.pathname.replace('/new', '/' + this.state.data.id)
                window.history.pushState({}, '', newUrl)
              }

              this.setState({schema: updatedSchema}, () => {
                saveData(this.props.producer, updatedSchema, result, this.props.endpoint).then(response => {
                  this.props.params.id = this.state.data.id.slice(0)
                  this.setState({
                    ready: true,
                    saved: true,
                    message: 'Objektet ble ' + savedMessage + ' (saga-execution-id: ' + response['saga-execution-id'] + ')',
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
    const {ready, readOnly, message, saved, schema, hiddenFields, name, description, problem} = this.state

    if (problem) {
      return (
        <div>
          <Header as='h1' content={splitOnUppercase(name)} subheader={description} dividing
                  icon={{name: 'warning', color: 'red'}}/>
          {message !== '' && <Message negative content={message.toString()}/>}
        </div>
      )
    }

    if (ready) {
      const formIcon = readOnly ? 'lock' : 'unlock'
      const formIconColor = readOnly ? 'red' : 'green'
      const properties = schema.definitions[name].properties

      return (
        <Form>
          <Header as='h1' content={splitOnUppercase(name)} subheader={description} dividing
                  icon={{name: formIcon, color: formIconColor, link: true, onClick: this.handleLockClick}}/>
          {message !== '' && <Message color={saved ? 'green' : 'red'} content={message.toString()}/>}
          <Dimmer.Dimmable dimmed={readOnly}>
            <Dimmer active={readOnly} style={{
              backgroundColor: 'rgba(0,0,0,.0010)',
              border: 'solid',
              borderWidth: '0.1rem',
              borderColor: 'rgba(33, 186, 69,.25',
              borderRadius: '.3rem',
              zIndex: 1
            }}/>
            <Grid columns='equal' style={{padding: '0.5rem', zIndex: 0}} divided>
              <Grid.Column>
                {Object.keys(properties).map((property, index) => {
                  if (!properties[property].hasOwnProperty('autofilled') && properties[property].group !== 'common') {
                    if (properties[property].hasOwnProperty('hideOnChoice')) {
                      return <DCFormField key={index} properties={properties[property]}
                                          valueChange={this.handleVisibilityChange}/>
                    } else {
                      if (Array.isArray(hiddenFields) && hiddenFields.length !== 0 && hiddenFields.includes(property)) {
                        return null
                      } else {
                        return <DCFormField key={index} properties={properties[property]}
                                            valueChange={this.handleValueChange}/>
                      }
                    }
                  }

                  return null
                })}
              </Grid.Column>
              <Grid.Column>
                {Object.keys(properties).map((property, index) => {
                  if (!properties[property].hasOwnProperty('autofilled') && properties[property].group === 'common') {
                    return <DCFormField key={index} properties={properties[property]}
                                        valueChange={this.handleValueChange}/>
                  }

                  return null
                })}
              </Grid.Column>
              <Grid.Column>
                {Object.keys(properties).map((property, index) => {
                  if (properties[property].hasOwnProperty('autofilled')) {
                    return <DCFormField key={index} properties={properties[property]}
                                        valueChange={this.handleValueChange}/>
                  }

                  return null
                })}

                {this.props.params.id !== 'new' &&
                <DCFormField properties={defaultVersioning} valueChange={this.handleVersionIncrementationChange}/>
                }

                <Button color='green' content={this.props.params.id === 'new' ? 'Lagre' : 'Oppdater'}
                        onClick={this.validateAndSave}/>
              </Grid.Column>
            </Grid>
          </Dimmer.Dimmable>
          {/*TODO: Remove*/}
          <Button color='pink' content='Inner State' onClick={this.checkState}/>
        </Form>
      )
    }

    return (
      <Header as='h1' content={splitOnUppercase(name)} subheader={description} dividing
              icon={{name: 'spinner', color: 'teal', loading: true}}/>
    )
  }
}

export default FormBuilder
