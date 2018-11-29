import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'

import Axios from './example/Axios'
import Merge from './example/Merge'
import Home from './example/Home'
import Forms from './example/Forms'
import { GSIM } from './producers/index'

class App extends Component {
  render () {
    return (
      <Segment basic>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/axios' exact component={Axios} />
          <Route path='/merge' exact component={Merge} />
          <Route path={GSIM.route}
                 render={() => <Forms producer={GSIM.producer} endpoint={GSIM.endpoint} route={GSIM.route} />} />
        </Switch>
      </Segment>
    )
  }
}

export default App
