# dc-react-components-library
DC React Components Library is a React Component library used for generating complex forms from JSONSchemas with producers.

### How it works
This library consists of these components:
* FormBuilder
  * This component expects params, producer, schema and endpoint
* TableBuilder
  * This component expects  params, producer, schema, endpoint and routing
* SchemaHandler
  * This function expects url, producer and endpoint

The SchemaHandler fetches JSONSchemas from the provided url, then resolves its properties with help from the producer. 
The provided endpoint is where the data gets stored.

FormBuilder and TableBuilder use the schema produced by SchemaHandler and builds the UI.

The concept of this library is to be able to produce forms and tables from data stored in [LDS](https://github.com/statisticsnorway/linked-data-store-documentation) 

Example:
 ```javascript
 import { FormBuilder, TableBuilder, SchemaHandler }  from 'dc-react-components-library'
 
 class App extends Component {
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
 
     SchemaHandler(url, producer, endpoint).then(result => {
       this.setState({
         schemas: result,
         ready: true
       })
     }).catch(error => {
       console.log(error)
     })
   }

   render () {
     const {ready, schemas} = this.state
 
     return (
       <div>
         <Menu fixed='top'>
           <Menu.Item header as={Link} to={this.props.route} disabled={!ready}>
             My domains
             <Label color='teal' size='large'>{ready ? schemas.length : <Icon fitted loading name='spinner' />}</Label>
           </Menu.Item>
           <Dropdown item text='Show all' scrolling disabled={!ready}>
             <Dropdown.Menu>
               {ready && schemas.map((schema, index) => {
                 const domain = schema.$ref.replace('#/definitions/', '')
                 const link = this.props.route + domain
 
                 return <Dropdown.Item key={index} as={Link} to={link} content={splitOnUppercase(domain)} />
               })}
             </Dropdown.Menu>
           </Dropdown>
           <Dropdown item text='New' scrolling disabled={!ready}>
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
                           render={({match}) => <FormBuilder params={match.params} producer={this.props.producer}
                                                             schema={JSON.parse(JSON.stringify(schema))}
                                                             endpoint={this.props.endpoint} />} />
           })}
           {ready && schemas.map((schema, index) => {
             const domain = schema.$ref.replace('#/definitions/', '')
             const path = this.props.route + domain
 
             return <Route key={index} path={path} exact
                           render={({match}) => <TableBuilder params={match.params} producer={this.props.producer}
                                                              schema={JSON.parse(JSON.stringify(schema))}
                                                              endpoint={this.props.endpoint} routing={path} />} />
           })}
         </Container>
       </div>
     )
   }
 }
 ```
**Note:**
* Routing
Notice have how the routing handles the distinction between presenting an existing versus a new object by checking the id in params.

* Producer
The producer takes care of special functionality given by the structure of the JSONSchema. With the producer the library 
flattens properties and resolves them so they are more tailored for UI generation and handling. 

* This library uses [Semantic UI](https://semantic-ui.com/introduction/getting-started.html) for styling and therefore 
  requires your project to to have `semantic-ui-css` and `semantic-ui-react` as dependencies (since those are not packaged with this library)
    * Do not forget to wrap your DCFormField components inside the [Semantic UI React](https://react.semantic-ui.com/) 
    component `Form` (like in the example above)
    * Also do not forget to add `import 'semantic-ui-css/semantic.min.css'` in your `index.js`
* The DCDate component uses [Moment.js](https://momentjs.com/docs/) and [ReactJS Datepicker](https://reactdatepicker.com/) 
  so if you wish to use it you need `react-datepicker` and `moment` as dependencies in your project
    * Again do not forget to add the css - `import 'react-datepicker/dist/react-datepicker.css'` in your `index.js`
  
### How producers work
Because JSONSchemas are different the Producers are functions that merges, resolves, builds and populates the schema to 
be used by the UI, all based upon a default UISchema. 

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

    const ldsSaveUrl = 'http://localhost:9090/data/Agent/b02e7d00-e740-11e8-9e27-758293bd596e'

    const data = {
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
    
dataDeleter
    
     const ldsDeleteUrl = 'http://localhost:9090/data/Agent/'
     const id = 'b02e7d00-e740-11e8-9e27-758293bd596e'
    
      dataDeleter(ldsDeleteUrl, id).then((result) => console.log('Result from url ' + ldsDeleteUrl + ': ', result)).catch((reason) => console.log('Error: ', reason))    


