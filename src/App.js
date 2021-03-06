import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'

import Home from './example/Home'
import Forms from './example/Forms'
import { Default, GSIM } from './producers/index'

class App extends Component {
  render () {
    return (
      <Segment basic>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path={GSIM.route}
                 render={() => <Forms producer={GSIM.producer} endpoint={GSIM.endpoint} route={GSIM.route}
                                      namespace={GSIM.namespace} languageCode={GSIM.languageCode}
                                      specialFeatures={GSIM.specialFeatures} />} />
          <Route path={Default.route}
                 render={() => <Forms producer={Default.producer} endpoint={Default.endpoint} route={Default.route}
                                      languageCode={Default.languageCode} namespace={Default.namespace}
                                      specialFeatures={Default.specialFeatures} />} />
        </Switch>
      </Segment>
    )
  }
}

export default App
