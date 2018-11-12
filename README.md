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

### Examples of functions in use
dataFetcher 

    const url = 'http://localhost:9090/data/AgentInRole/'
    
    dataFetcher(url).then((result) => console.log('Result from url ' + url + ': ',result)).catch((reason) => console.log('Error: ', reason))




