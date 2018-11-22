import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'

import Axios from './example/Axios'
import Merge from './example/Merge'
import Home from './example/Home'
import Forms from './example/Forms'

class App extends Component {
  render () {
    return (
      <Segment basic>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/axios' exact component={Axios} />
          <Route path='/merge' exact component={Merge} />
          <Route path='/form'
                 render={() => <Forms producer='GSIM' endpoint='http://localhost:9090/' route='/form/' />} />
        </Switch>
      </Segment>
    )
  }
}

export default App
