import React, { Component } from 'react'
import { Button, Dimmer, Divider, Form, Grid, Header, Icon, Label, Message, Popup } from 'semantic-ui-react'

import { UIFormField } from 'react-form-fields-library'
import { defaultVersioning } from '../producers'
import { extractName, splitOnUppercase } from '../utilities/Common'
import {
  saveData,
  setAutofillAndClean,
  transformProperties,
  updateAutofill,
  validation
} from '../utilities/data-handling'
import { fillDataState, generateDataState, populateOptions } from '../utilities/schema-handling'
import { DIV, MESSAGES, UI } from '../utilities/Enum'
import { setDataToSchema } from '../utilities/schema-handling/DataState'

class UIFormBuilder extends Component {
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
      problem: false,
      isNew: this.props.params.id === 'new',
      fresh: true
    }
  }

  componentDidMount () {
    const {isNew} = this.state
    const {producer, schema, params, endpoint, namespace, user, languageCode, specialFeatures} = this.props

    populateOptions(producer, schema, languageCode).then(populatedSchema => {
      if (isNew) {
        this.newComponent(producer, populatedSchema, user, languageCode)
      } else {
        fillDataState(producer, populatedSchema, params.id, endpoint, namespace, languageCode, specialFeatures).then(filledData => {
          setDataToSchema(populatedSchema, filledData, languageCode).then(filled => {
            this.setState({
              data: filledData,
              schema: filled.returnSchema,
              hiddenFields: filled.returnHiddenFields
            }, () => this.setState({ready: true}))
          })
        }).catch(error => {
          this.setState({
            problem: true,
            message: MESSAGES.NOT_FILL[languageCode] + error
          })
        })
      }
    }).catch(error => {
      this.setState({
        problem: true,
        message: MESSAGES.NOT_POPULATE[languageCode] + error
      })
    })
  }

  shouldComponentUpdate (nextProps, nextState) {
    const {hiddenFields, data, fresh} = this.state
    const {params, producer, schema, user, namespace, languageCode} = this.props

    if (hiddenFields !== nextState.hiddenFields) return true

    if (fresh !== nextState.fresh) return true

    if (params.id !== nextProps.params.id && nextProps.params.id === 'new') {
      this.setState({
        ready: false,
        isNew: true
      }, () => {
        populateOptions(producer, schema, namespace, languageCode).then(populatedSchema => {
          this.newComponent(producer, populatedSchema, user)
        })
      })

      return true
    }

    return data === nextState.data
  }

  newComponent (producer, schema, user, languageCode) {
    const {name} = this.state
    const properties = schema.definitions[name].properties

    generateDataState(producer, schema, user, languageCode).then(generatedDataState => {
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
      fresh: false,
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
      const {schema, data, versionIncrementation, hiddenFields, isNew} = this.state
      const {producer, endpoint, namespace, user, languageCode, specialFeatures} = this.props
      const copiedSchema = JSON.parse(JSON.stringify(schema))

      validation(copiedSchema, data, languageCode).then(schemaWithoutErrors => {
        updateAutofill(producer, schemaWithoutErrors, data, user, versionIncrementation, isNew).then(autofilledData => {
          setAutofillAndClean(schemaWithoutErrors, autofilledData, hiddenFields).then(finished => {
            const savedMessage = isNew ? MESSAGES.SAVED[languageCode] : MESSAGES.UPDATED[languageCode]

            saveData(producer, finished.returnSchema, finished.returnData, endpoint, namespace, languageCode, specialFeatures).then(response => {
              if (isNew) {
                const newUrl = window.location.pathname.replace('/new', '/' + autofilledData.id)

                window.history.pushState({}, '', newUrl)
              }

              this.setState({
                schema: finished.returnSchema,
                data: finished.returnData,
                saved: true,
                message: MESSAGES.WAS_SAVED[languageCode] + savedMessage + ' (' + DIV.SAGA + ': ' + response[DIV.SAGA] + ')',
                readOnly: true,
                isNew: false,
                fresh: true
              }, () => this.setState({ready: true}))
            }).catch(saveError => {
              this.setState({
                schema: schemaWithoutErrors,
                saved: false,
                message: MESSAGES.WAS_NOT_SAVED[languageCode] + ' ' + saveError
              }, () => this.setState({ready: true}))
            })
          })
        })
      }).catch(schemaWithErrors => {
        this.setState({
          ready: true,
          schema: schemaWithErrors,
          saved: false,
          message: MESSAGES.CORRECT_ERRORS[languageCode]
        })
      })
    })
  }

  simulateSaveAndDownloadJson = (event) => {
    event.preventDefault()

    this.setState({ready: false}, () => {
      const {name, schema, data, versionIncrementation, hiddenFields, isNew} = this.state
      const {producer, user, languageCode, specialFeatures} = this.props
      const copiedSchema = JSON.parse(JSON.stringify(schema))

      validation(copiedSchema, data, languageCode).then(schemaWithoutErrors => {
        updateAutofill(producer, schemaWithoutErrors, data, user, versionIncrementation, isNew).then(autofilledData => {
          setAutofillAndClean(schemaWithoutErrors, autofilledData, hiddenFields).then(finished => {
            transformProperties(producer, finished.returnSchema, finished.returnData, languageCode, false, specialFeatures).then(saveableData => {
              const downloadableJson = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(saveableData, null, ' '))
              const downloadLink = <a href={`data: ${downloadableJson}`}
                                      download={name + DIV.JSON_FILE_ENDING}>{UI.DOWNLOAD_JSON[languageCode]}</a>

              this.setState({
                schema: finished.returnSchema,
                data: finished.returnData,
                saved: true,
                message: downloadLink
              }, () => {
                this.setState({ready: true})
              })
            })
          })
        })
      }).catch(schemaWithErrors => {
        this.setState({
          ready: true,
          schema: schemaWithErrors,
          saved: false,
          message: MESSAGES.CORRECT_ERRORS[languageCode]
        })
      })
    })
  }

  refreshOptions = (event) => {
    event.preventDefault()

    this.setState({ready: false}, () => {
      const {producer, languageCode} = this.props
      const {schema, data} = this.state

      populateOptions(producer, schema, languageCode).then(populatedSchema => {
        setDataToSchema(populatedSchema, data, languageCode).then(filled => {
          this.setState({
            ready: true,
            schema: filled.returnSchema
          })
        })
      })
    })
  }

  render () {
    const {ready, readOnly, message, saved, schema, hiddenFields, name, description, problem, isNew, fresh} = this.state
    const {specialFeatures, languageCode} = this.props

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
          <Popup flowing hideOnScroll position='left center'
                 trigger={<Label attached='top right' color={fresh ? 'green' : 'orange'} circular size='big'
                                 icon={{fitted: true, name: fresh ? 'save' : 'edit'}} />}>
            <Icon color='blue' name='info circle' />
            {fresh ? MESSAGES.NO_CHANGES_MADE[languageCode] : MESSAGES.CHANGES_MADE[languageCode]}
          </Popup>

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
                      return <UIFormField key={index} properties={properties[property]} languageCode={languageCode}
                                          valueChange={this.handleVisibilityChange} />
                    } else {
                      if (Array.isArray(hiddenFields) && hiddenFields.length !== 0 && hiddenFields.includes(property)) {
                        return null
                      } else {
                        return <UIFormField key={index} properties={properties[property]} languageCode={languageCode}
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
                    return <UIFormField key={index} properties={properties[property]} languageCode={languageCode}
                                        valueChange={this.handleValueChange} />
                  }

                  return null
                })}
              </Grid.Column>
              <Grid.Column>
                {Object.keys(properties).map((property, index) => {
                  if (properties[property].hasOwnProperty('autofilled')) {
                    return <UIFormField key={index} properties={properties[property]} languageCode={languageCode}
                                        valueChange={this.handleValueChange} />
                  }

                  return null
                })}

                {/*Consider adding version identifier to UISchemas*/}
                {!isNew && properties.hasOwnProperty('version') &&
                <UIFormField properties={defaultVersioning} valueChange={this.handleVersionIncrementationChange}
                             languageCode={languageCode} />
                }

                <Button color='teal' icon='refresh' content={UI.REFRESH_OPTIONS[languageCode]}
                        onClick={this.refreshOptions} />
                <Divider hidden />
                <Button primary content={isNew ? UI.SAVE[languageCode] : UI.UPDATE[languageCode]} icon='save'
                        onClick={this.validateAndSave} />
              </Grid.Column>
            </Grid>
            {specialFeatures &&
            <Popup flowing hideOnScroll position='right center'
                   trigger={<Button color='teal' content={UI.CREATE_JSON[languageCode]}
                                    onClick={this.simulateSaveAndDownloadJson} />}>
              <Icon color='blue' name='info circle' />
              {MESSAGES.GENERATE_JSON[languageCode]}
            </Popup>
            }
          </Dimmer.Dimmable>
        </Form>
      )
    }

    return (
      <Header as='h1' content={splitOnUppercase(name)} subheader={description} dividing
              icon={{name: 'spinner', color: 'teal', loading: true}} />
    )
  }
}

export default UIFormBuilder
