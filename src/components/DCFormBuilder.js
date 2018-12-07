import React, { Component } from 'react'
import { Button, Dimmer, Form, Grid, Header, Message } from 'semantic-ui-react'

import { DCFormField } from 'dc-react-form-fields-library'
import { defaultVersioning } from '../producers'
import { extractName, splitOnUppercase } from '../utilities/Common'
import { saveData, setAutofillAndClean, updateAutofill, validation } from '../utilities/data-handling'
import { fillDataState, generateDataState, populateOptions } from '../utilities/schema-handling'
import { DIV, MESSAGES, UI } from '../utilities/Enum'
import { setDataToSchema } from '../utilities/schema-handling/DataState'

class DCFormBuilder extends Component {
  constructor (props) {
    super(props)

    const name = extractName(this.props.schema.$ref)

    this.state = {
      ready: false,
      readOnly: false,
      message: '',
      saved: false,
      versionIncrementation: '2',
      data: {},
      schema: {},
      hiddenFields: [],
      name: name,
      description: this.props.schema.definitions[name].description,
      problem: false
    }
  }

  componentDidMount () {
    const {producer, schema, params, endpoint, user} = this.props

    populateOptions(producer, schema).then(populatedSchema => {
      // TODO: Another check here for the state thing
      if (params.id === 'new') {
        this.newComponent(producer, populatedSchema, user)
      } else {
        fillDataState(producer, populatedSchema, params.id, endpoint).then(filledData => {
          setDataToSchema(populatedSchema, filledData).then(filled => {
            this.setState({
              data: filledData,
              schema: filled.returnSchema,
              hiddenFields: filled.returnHiddenFields
            }, () => this.setState({ready: true}))
          })
        }).catch(error => {
          this.setState({
            problem: true,
            message: MESSAGES.NOT_FILL + error
          })
        })
      }
    }).catch(error => {
      this.setState({
        problem: true,
        message: MESSAGES.NOT_POPULATE + error
      })
    })
  }

  shouldComponentUpdate (nextProps, nextState) {
    const {hiddenFields, data} = this.state
    const {params, producer, schema, user} = this.props

    if (hiddenFields !== nextState.hiddenFields) return true

    // TODO: Another check here for the state thing
    if (params.id !== nextProps.params.id && nextProps.params.id === 'new') {
      this.setState({ready: false}, () => {
        populateOptions(producer, schema).then(populatedSchema => {
          this.newComponent(producer, populatedSchema, user)
        })
      })

      return true
    }

    return data === nextState.data
  }

  newComponent (producer, schema, user) {
    const {name} = this.state
    const properties = schema.definitions[name].properties

    generateDataState(producer, schema, user).then(generatedDataState => {
      Object.keys(properties).forEach(key => {
        if (properties[key].hasOwnProperty('autofilled')) {
          properties[key].value = [generatedDataState[key]]
        }
      })

      this.setState({
        data: generatedDataState,
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
      if (!this.state.readOnly) this.setState({message: ''})
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

    this.setState({ready: false}, () => {
      const {schema, data, versionIncrementation, hiddenFields} = this.state
      const {producer, params, endpoint, user} = this.props
      const copiedSchema = JSON.parse(JSON.stringify(schema))

      validation(copiedSchema, data).then(schemaWithoutErrors => {
        updateAutofill(producer, schemaWithoutErrors, data, user, versionIncrementation, (params.id === 'new')).then(autofilledData => {
          setAutofillAndClean(schemaWithoutErrors, autofilledData, hiddenFields).then(finished => {
            const savedMessage = params.id === 'new' ? MESSAGES.SAVED : MESSAGES.UPDATED

            saveData(producer, finished.returnSchema, finished.returnData, endpoint).then(response => {
              if (params.id === 'new') {
                const newUrl = window.location.pathname.replace('/new', '/' + autofilledData.id)

                window.history.pushState({}, '', newUrl)

                // TODO: Make this state instead of mutating props (check other TODO aswell, further up)
                this.props.params.id = autofilledData.id.slice(0)
              }

              this.setState({
                schema: finished.returnSchema,
                data: finished.returnData,
                saved: true,
                message: MESSAGES.WAS_SAVED + savedMessage + ' (' + DIV.SAGA + ': ' + response[DIV.SAGA] + ')',
                readOnly: true
              }, () => this.setState({ready: true}))
            }).catch(saveError => {
              this.setState({
                schema: schemaWithoutErrors,
                saved: false,
                message: MESSAGES.WAS_NOT_SAVED + ' ' + saveError
              }, () => this.setState({ready: true}))
            })
          })
        })
      }).catch(schemaWithErrors => {
        this.setState({
          ready: true,
          schema: schemaWithErrors,
          saved: false,
          message: MESSAGES.CORRECT_ERRORS
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
    const {params} = this.props

    if (problem) {
      return (
        <div>
          <Header as='h1' content={splitOnUppercase(name)} subheader={description} dividing
                  icon={{name: 'warning', color: 'red'}} />
          {message !== '' && <Message negative content={message} />}
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
                  icon={{name: formIcon, color: formIconColor, link: true, onClick: this.handleLockClick}} />
          {message !== '' && <Message color={saved ? 'green' : 'red'} content={message} />}
          <Dimmer.Dimmable dimmed={readOnly}>
            <Dimmer active={readOnly} style={{
              backgroundColor: 'rgba(0,0,0,.0010)',
              border: 'solid',
              borderWidth: '0.1rem',
              borderColor: 'rgba(33, 186, 69,.25',
              borderRadius: '.3rem',
              zIndex: 1
            }} />
            <Grid columns='equal' style={{padding: '0.5rem', zIndex: 0}} divided>
              <Grid.Column>
                {Object.keys(properties).map((property, index) => {
                  if (!properties[property].hasOwnProperty('autofilled') && properties[property].group !== 'common') {
                    if (properties[property].hasOwnProperty('hideOnChoice')) {
                      return <DCFormField key={index} properties={properties[property]}
                                          valueChange={this.handleVisibilityChange} />
                    } else {
                      if (Array.isArray(hiddenFields) && hiddenFields.length !== 0 && hiddenFields.includes(property)) {
                        return null
                      } else {
                        return <DCFormField key={index} properties={properties[property]}
                                            valueChange={this.handleValueChange} />
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

                {params.id !== 'new' &&
                <DCFormField properties={defaultVersioning} valueChange={this.handleVersionIncrementationChange} />
                }

                <Button primary content={params.id === 'new' ? UI.SAVE : UI.UPDATE}
                        onClick={this.validateAndSave} />
              </Grid.Column>
            </Grid>
          </Dimmer.Dimmable>
          {/*TODO: Remove*/}
          <Button color='pink' content='Inner State' onClick={this.checkState} />
        </Form>
      )
    }

    return (
      <Header as='h1' content={splitOnUppercase(name)} subheader={description} dividing
              icon={{name: 'spinner', color: 'teal', loading: true}} />
    )
  }
}

export default DCFormBuilder
