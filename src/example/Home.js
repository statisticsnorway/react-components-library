import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from 'semantic-ui-react'

class Home extends Component {
  render () {
    return (
      <Container textAlign='center'>
        <Button as={Link} primary to='/axios' content='Axios test' />
        <Button as={Link} primary to='/merge' content='Merge test' />
        <Button as={Link} primary to='/form' content='Form test' />
      </Container>
    )
  }
}

export default Home
