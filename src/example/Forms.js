import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Button, Container, Dropdown, Icon, Label, Menu } from 'semantic-ui-react'

import FormBuilder from '../utilities/form-handling/FormBuilder'
import { schemaHandling } from '../utilities/schema-handling'
import { splitOnUppercase } from '../utilities/Common'

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

    schemaHandling(url, producer, endpoint).then(result => {
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
                          render={({match}) => <FormBuilder params={match.params} schema={schema}
                                                            producer={this.props.producer}
                                                            endpoint={this.props.endpoint} />} />
          })}
          <Button color='pink' content='Outer State' onClick={this.checkState} /> {/* TODO: Remove */}
        </Container>
      </div>
    )
  }
}

export default Forms
