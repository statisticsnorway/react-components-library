# dc-react-components-library
DC React Components Library

### How this library was created
- Created by create-react-app
- Added Rollup for bundling the code and babel for transpiling JSX into native javascript.

### How to use this library in another React application directly from GitHub (useful in early development)
1. In your React application run `yarn add https://github.com/statisticsnorway/dc-react-components-library.git` 
    * Optionally add `#name-of-branch` at the end to use a specific branch instead of master
2. Import functions in your React application e.g. `import { dataFetcher } from 'dc-react-components-library'`

### Useful information
* Your imported library does not automatically stay up to date with the latest commits to GitHub so you have to run 
`yarn upgrade dc-react-components-library` in your React application to get the latest "build"

### Test it yourself
An App.js is added to the library for test purpose. Run `yarn start` and navigate to `http://localhost:3000/`

### Examples of functions in use with linked-data-store
Precondition:
lds is up and running on localhost:9090

dataFetcher 

    const url = 'http://localhost:9090/data/AgentInRole/'
    
    dataFetcher(url).then((result) => console.log('Result from url ' + url + ': ',result)).catch((reason) => console.log('Error: ', reason))

dataSaver

    let ldsSaveUrl = 'http://localhost:9090/data/Agent/b02e7d00-e740-11e8-9e27-758293bd596e'

    let data = {
      "id": "b02e7d00-e740-11e8-9e27-758293bd596e",
      "name":
        [{"languageCode": "nb",
          "languageText": "c"}],
      "description":
        [{"languageCode": "nb",
          "languageText": "c"}],
      "createdDate": "2018-11-13T12:36:53.092Z",
      "createdBy": "Test",
      "version": "1.0.0",
      "versionValidFrom": "2018-11-13T12:36:53.093Z",
      "lastUpdatedDate": "2018-11-13T12:36:53.093Z",
      "lastUpdatedBy": "Test",
      "validFrom": "2018-11-13T12:36:53.093Z",
      "validUntil": "2019-11-13T12:36:53.093Z",
      "agentType": "ORGANIZATION",
      "isExternal": false
    }

    dataSaver(ldsSaveUrl, data).then((result) => console.log('Result from url ' + ldsSaveUrl + ': ', result)).catch((reason) => console.log('Error: ', reason))
    
    


