import React, { Component } from 'react'
import { dataFetcher } from './DataFetcher'

const lds = 'http://localhost:9090/data/AgentInRole/'

class App extends Component {

  componentDidMount(){
    dataFetcher(lds).then((result) => console.log('Result from url ' + lds + ': ',result)).catch((reason) => console.log('Error: ', reason))
  }

  render () {
    return (
      <div>
        <form>
          <label> Test av dc-react-component-library </label>
        </form>
      </div>
    )
  }
}
export default App
