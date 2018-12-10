# dc-react-components-library
DC React Components Library is a React Component library used for generating complex forms from JSONSchemas with Producers.

### How it works
This library consists of these components:
* DCFormBuilder
  * This component expects `params, producer, schema` and `endpoint`
* DCTableBuilder
  * This component expects  `params, producer, schema, endpoint` and `routing`
* SchemaHandler
  * This function expects `url, producer` and `endpoint`

The SchemaHandler fetches JSONSchemas from the provided url, then resolves its properties with help from the Producer. 
The provided endpoint should point to the data storage.

DCFormBuilder and DCTableBuilder use the schema produced by SchemaHandler and builds the UI.

The concept of this library is to be able to produce forms and tables from data stored in 
[LDS](https://github.com/statisticsnorway/linked-data-store-documentation).

### Example:
 ```javascript
import { DCFormBuilder, DCTableBuilder, SchemaHandler }  from 'dc-react-components-library'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ready: false,
      schemas: [],
      message: ''
    }
  }

  componentDidMount () {
    const {producer, endpoint} = this.props
    const updatedUrl = endpoint + 'data?schema=embed'

    SchemaHandler(updatedUrl, producer, endpoint).then(schemas => {
      this.setState({
        schemas: schemas,
        ready: true
      })
    }).catch(error => {
      this.setState({
        schemas: [],
        ready: true,
        message: error
      })
    })
  }

  render () {
    const {ready, schemas, message} = this.state
    const {producer, route, endpoint} = this.props

    return (
      <div>
        <Menu fixed='top'>
          <Menu.Item header as={Link} to={route} disabled={!ready}>
            GSIM domains
            <Label color='teal' size='large'>{ready ? schemas.length : <Icon fitted loading name='spinner' />}</Label>
          </Menu.Item>
          <Dropdown item text='Show all' scrolling disabled={!ready}>
            <Dropdown.Menu>
              {ready && schemas.map((schema, index) => {
                const domain = extractName(schema.$ref)
                const link = route + domain

                return <Dropdown.Item key={index} as={Link} to={link} content={splitOnUppercase(domain)} />
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Create new' scrolling disabled={!ready}>
            <Dropdown.Menu>
              {ready && schemas.map((schema, index) => {
                const domain = extractName(schema.$ref)
                const link = route + domain + '/new'

                return <Dropdown.Item key={index} as={Link} to={link} content={splitOnUppercase(domain)} />
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
        <Container fluid style={{marginTop: '5em'}}>
          {ready && message !== '' && <Message error content={message} />}
          {ready && schemas.map((schema, index) => {
            const domain = extractName(schema.$ref)
            const path = route + domain + '/:id'

            return <Route key={index} path={path} exact
                          render={({match}) => <DCFormBuilder params={match.params} producer={producer}
                                                              schema={JSON.parse(JSON.stringify(schema))}
                                                              endpoint={endpoint} user='Test user' />} />
          })}
          {ready && schemas.map((schema, index) => {
            const domain = extractName(schema.$ref)
            const path = route + domain

            return <Route key={index} path={path} exact
                          render={({match}) => <DCTableBuilder params={match.params} producer={producer}
                                                               schema={JSON.parse(JSON.stringify(schema))}
                                                               endpoint={endpoint} routing={path} />} />
          })}
        </Container>
      </div>
    )
  }
}
 ```
**Note:**
* Notice have how the routing handles the distinction between presenting an existing object versus a new object by checking the id in params

* The producer takes care of special functionality given by the structure of the JSONSchema. With the producer the library 
  it flattens properties and resolves them so they are more tailored for UI generation and handling

* This library uses [Semantic UI](https://semantic-ui.com/introduction/getting-started.html) for styling and therefore 
  requires your project to to have `semantic-ui-css` and `semantic-ui-react` as dependencies (since those are not packaged with this library)
    * Do not forget to wrap your DCFormField components inside the [Semantic UI React](https://react.semantic-ui.com/) 
    component `Form` (like in the example above)
    * Also do not forget to add `import 'semantic-ui-css/semantic.min.css'` in your `index.js`

* This library uses [dc-react-form-fields-library](https://github.com/statisticsnorway/dc-react-form-fields-library) for its form fields and
  the DCDate component requires [Moment.js](https://momentjs.com/docs/) and [ReactJS Datepicker](https://reactdatepicker.com/) 
  so if you wish to use it you need `react-datepicker` and `moment` as dependencies in your project
    * Again do not forget to add the css - `import 'react-datepicker/dist/react-datepicker.css'` in your `index.js`

* Lastly the DCTableBuilder component of this library uses [React Table](https://react-table.js.org/#/story/readme) so therefore when using it
  your project needs `react-table` as a dependency
  * Once more do not forget to add the css - `import 'react-table/react-table.css'` in your `index.js`
  
### How Producers work
Because JSONSchemas can have different structures the Producers are functions that merges, resolves, builds and populates the schema to 
be used by the UI, all based upon a default UISchema and alternatively special UISchemas for spesific objects

### Usage
The `GSIM Producer` comes with the library but if you want to use this library on another structure than GSIM you need to write
your own producers and provide DefaultUISchema and spesific UISchemas

### How to import this library directly from GitHub (useful in early development)
1. In your React application run `yarn add https://github.com/statisticsnorway/dc-react-components-library.git` 
    * Optionally add `#name-of-branch` at the end to use a specific branch instead of master
2. Import functions in your React application e.g. `import { dataFetcher } from 'dc-react-components-library'`

### Useful information
* Your imported library does not automatically stay up to date with the latest commits to GitHub so you have to run 
`yarn upgrade dc-react-components-library` in your React application to get the latest "build"

### Test it yourself
The first time you clone the repository, remember to run `yarn install`

An App.js is added to the library for test purpose. Run `yarn start` and navigate to `http://localhost:3000/`

##### Alternatively try a more optimized production build:
1. Run `yarn build:example`
2. Optionally run `yarn global add serve` (if you do not have [serve](https://github.com/zeit/serve/))
3. Run `serve -s build`
4. Navigate to `http://localhost:5000/`

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


