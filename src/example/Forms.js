import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Button, Container, Dropdown, Icon, Label, Menu, Message } from 'semantic-ui-react'

import { extractName, splitOnUppercase } from '../utilities/Common'
import { DCFormBuilder, DCTableBuilder, SchemaHandler } from '../components'
import { UI } from '../utilities/Enum'

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

  // TODO: Remove
  checkState = () => {
    console.log(this.state)
    console.log(this.props)
  }

  render () {
    const {ready, schemas, message} = this.state
    const {producer, route, endpoint} = this.props

    return (
      <div>
        <Menu fixed='top'>
          <Menu.Item header as={Link} to={route} disabled={!ready}>
            {UI.MENU_HEADER}
            <Label color='teal' size='large'>{ready ? schemas.length : <Icon fitted loading name='spinner' />}</Label>
          </Menu.Item>
          <Dropdown item text={UI.SHOW_ALL} scrolling disabled={!ready}>
            <Dropdown.Menu>
              {ready && schemas.map((schema, index) => {
                const domain = extractName(schema.$ref)
                const link = route + domain

                return <Dropdown.Item key={index} as={Link} to={link} content={splitOnUppercase(domain)} />
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text={UI.CREATE_NEW} scrolling disabled={!ready}>
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
                                                              endpoint={endpoint} />} />
          })}
          {ready && schemas.map((schema, index) => {
            const domain = extractName(schema.$ref)
            const path = route + domain

            return <Route key={index} path={path} exact
                          render={({match}) => <DCTableBuilder params={match.params} producer={producer}
                                                               schema={JSON.parse(JSON.stringify(schema))}
                                                               endpoint={endpoint} routing={path} />} />
          })}
          {/*TODO: Remove*/}
          <Button color='pink' content='Outer State' onClick={this.checkState} />
        </Container>
      </div>
    )
  }
}

export default Forms
