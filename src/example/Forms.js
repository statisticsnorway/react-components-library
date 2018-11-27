import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Button, Container, Dropdown, Icon, Label, Menu } from 'semantic-ui-react'

import { splitOnUppercase } from '../utilities/Common'
import { SchemaHandler, FormBuilder, TableBuilder } from '../components'

class Forms extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ready: false,
      schemas: []
    }
  }

  componentDidMount () {
    const url = this.props.endpoint + 'data?schema=embed'
    const producer = this.props.producer
    const endpoint = this.props.endpoint

    SchemaHandler(url, producer, endpoint).then(result => {
      this.setState({
        schemas: result,
        ready: true
      })
    }).catch(error => {
      console.log(error)
    })
  }

  // TODO: Remove
  checkState = () => {
    console.log(this.state)
    console.log(this.props)
  }

  render () {
    const {ready, schemas} = this.state

    return (
      <div>
        <Menu fixed='top'>
          <Menu.Item header as={Link} to={this.props.route} disabled={!ready}>
            GSIM domener
            <Label color='teal' size='large'>{ready ? schemas.length : <Icon fitted loading name='spinner' />}</Label>
          </Menu.Item>
          <Dropdown item text='Vis alle' scrolling disabled={!ready}>
            <Dropdown.Menu>
              {ready && schemas.map((schema, index) => {
                const domain = schema.$ref.replace('#/definitions/', '')
                const link = this.props.route + domain

                return <Dropdown.Item key={index} as={Link} to={link} content={splitOnUppercase(domain)} />
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Opprett ny' scrolling disabled={!ready}>
            <Dropdown.Menu>
              {ready && schemas.map((schema, index) => {
                const domain = schema.$ref.replace('#/definitions/', '')
                const link = this.props.route + domain + '/new'

                return <Dropdown.Item key={index} as={Link} to={link} content={splitOnUppercase(domain)} />
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
        <Container fluid style={{marginTop: '5em'}}>
          {ready && schemas.map((schema, index) => {
            const domain = schema.$ref.replace('#/definitions/', '')
            const path = this.props.route + domain + '/:id'

            return <Route key={index} path={path} exact
                          render={({match}) => <FormBuilder params={match.params} producer={this.props.producer}
                                                            schema={JSON.parse(JSON.stringify(schema))}
                                                            endpoint={this.props.endpoint} />} />
          })}
          {ready && schemas.map((schema, index) => {
            const domain = schema.$ref.replace('#/definitions/', '')
            const path = this.props.route + domain

            return <Route key={index} path={path} exact
                          render={({match}) => <TableBuilder params={match.params} producer={this.props.producer}
                                                             schema={JSON.parse(JSON.stringify(schema))}
                                                             endpoint={this.props.endpoint} routing={path} />} />
          })}
          <Button color='pink' content='Outer State' onClick={this.checkState} />
        </Container>
      </div>
    )
  }
}

export default Forms
