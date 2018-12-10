import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Container, Dropdown, Icon, Label, Menu, Message } from 'semantic-ui-react'

import { DCFormBuilder, DCTableBuilder, SchemaHandler } from '../components'
import { extractName, splitOnUppercase } from '../utilities/Common'

class Forms extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ready: false,
      schemas: [],
      message: ''
    }
  }

  componentDidMount () {
    const {producer, endpoint} = this.props
    const updatedUrl = endpoint + 'data?schema=embed'

    SchemaHandler(updatedUrl, producer, endpoint).then(schemas => {
      this.setState({
        schemas: schemas,
        ready: true
      })
    }).catch(error => {
      this.setState({
        schemas: [],
        ready: true,
        message: error
      })
    })
  }

  render () {
    const {ready, schemas, message} = this.state
    const {producer, route, endpoint, languageCode, specialFeatures} = this.props

    return (
      <div>
        <Menu fixed='top'>
          <Menu.Item header as={Link} to={route} disabled={!ready}>
            GSIM domains
            <Label color='teal' size='large'>{ready ? schemas.length : <Icon fitted loading name='spinner' />}</Label>
          </Menu.Item>
          <Dropdown item text='Show all' scrolling disabled={!ready}>
            <Dropdown.Menu>
              {ready && schemas.map((schema, index) => {
                const domain = extractName(schema.$ref)
                const link = route + domain

                return <Dropdown.Item key={index} as={Link} to={link} content={splitOnUppercase(domain)} />
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Create new' scrolling disabled={!ready}>
            <Dropdown.Menu>
              {ready && schemas.map((schema, index) => {
                const domain = extractName(schema.$ref)
                const link = route + domain + '/new'

                return <Dropdown.Item key={index} as={Link} to={link} content={splitOnUppercase(domain)} />
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
        <Container fluid style={{marginTop: '5em'}}>
          {ready && message !== '' && <Message error content={message} />}
          {ready && schemas.map((schema, index) => {
            const domain = extractName(schema.$ref)
            const path = route + domain + '/:id'

            return <Route key={index} path={path} exact
                          render={({match}) => <DCFormBuilder params={match.params} producer={producer}
                                                              schema={JSON.parse(JSON.stringify(schema))}
                                                              languageCode={languageCode}
                                                              specialFeatures={specialFeatures}
                                                              endpoint={endpoint} user='Test user' />} />
          })}
          {ready && schemas.map((schema, index) => {
            const domain = extractName(schema.$ref)
            const path = route + domain

            return <Route key={index} path={path} exact
                          render={({match}) => <DCTableBuilder params={match.params} producer={producer}
                                                               schema={JSON.parse(JSON.stringify(schema))}
                                                               languageCode={languageCode}
                                                               specialFeatures={specialFeatures}
                                                               endpoint={endpoint} routing={path} />} />
          })}
        </Container>
      </div>
    )
  }
}

export default Forms
