import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from 'semantic-ui-react'

class Home extends Component {
  render () {
    return (
      <Container textAlign='center'>
        <Button as={Link} primary to='/axios' content='Axios test' />
        <Button as={Link} primary to='/merge' content='Merge test' />
        <Button as={Link} primary to='/gsim' content='Form test (GSIM Producer)' />
        <Button as={Link} primary to='/default' content='Form test (Default Producer)' />
      </Container>
    )
  }
}

export default Home
