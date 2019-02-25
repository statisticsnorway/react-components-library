import React, { Component } from 'react'
import { Button, Divider } from 'semantic-ui-react'

import { dataFetcher } from '../utilities/http-clients/axios/DataFetcher'
import { dataSaver } from '../utilities/http-clients/axios/DataSaver'
import { dataDeleter } from '../utilities/http-clients/axios/DataDeleter'

class Axios extends Component {
  handleOnClickFetch () {
    const ldsFetchUrl = 'http://localhost:9090/data/Agent/'

    dataFetcher(ldsFetchUrl).then((result) => console.log('Result from url ' + ldsFetchUrl + ': ', result)).catch((reason) => console.log('Error: ', reason))
  }

  handleOnClickSave () {
    const ldsSaveUrl = 'http://localhost:9090/data/Agent/b02e7d00-e740-11e8-9e27-758293bd596e'

    const data = {
      'id': 'b02e7d00-e740-11e8-9e27-758293bd596e',
      'name':
        [{
          'languageCode': 'nb',
          'languageText': 'c'
        }],
      'description':
        [{
          'languageCode': 'nb',
          'languageText': 'c'
        }],
      'createdDate': '2018-11-13T12:36:53.092Z',
      'createdBy': 'Test',
      'version': '1.0.0',
      'versionValidFrom': '2018-11-13T12:36:53.093Z',
      'lastUpdatedDate': '2018-11-13T12:36:53.093Z',
      'lastUpdatedBy': 'Test',
      'validFrom': '2018-11-13T12:36:53.093Z',
      'validUntil': '2019-11-13T12:36:53.093Z',
      'agentType': 'ORGANIZATION',
      'isExternal': false
    }

    dataSaver(ldsSaveUrl, data).then((result) => console.log('Result from url ' + ldsSaveUrl + ': ', result)).catch((reason) => console.log('Error: ', reason))
  }

  handleOnClickDelete () {
    const startUrl = 'http://localhost:9090/data/Agent'
    const id = 'b02e7d00-e740-11e8-9e27-758293bd596e'
    const ldsDeleteUrl = startUrl + '/' + id

    dataDeleter(ldsDeleteUrl).then((result) => console.log('Result from url ' + ldsDeleteUrl + ': ', result)).catch((reason) => console.log('Error: ', reason))
  }

  render () {
    return (
      <div>

        <Button onClick={this.handleOnClickFetch}>Fetch</Button>
        <Divider />
        <Button onClick={this.handleOnClickSave}>Save</Button>
        <Divider />
        <Button onClick={this.handleOnClickDelete}>Delete</Button>

      </div>
    )
  }
}

export default Axios
