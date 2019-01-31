import React, { Component } from 'react'
import ReactTable from 'react-table'
import { Link } from 'react-router-dom'
import { Button, Divider, Header, Icon, Input, Label, Message, Popup } from 'semantic-ui-react'

import { extractName, splitOnUppercase } from '../utilities/Common'
import { fetchData } from '../utilities/http-clients/fetch'
import { resolveTableHeaders, resolveTableObject } from '../utilities/table-handling'
import { MESSAGES, TABLE, UI } from '../utilities/Enum'

class UITableBuilder extends Component {
  constructor (props) {
    super(props)

    const {producer, schema, routing} = this.props
    const name = extractName(schema.$ref)
    const description = schema.definitions[name].description
    const tableHeaders = resolveTableHeaders(producer)
    const tableColumns = []

    tableHeaders.forEach(header => {
      console.log('schema')
      console.log(schema)

      console.log('schema.definitions[name]')
      console.log(schema.definitions[name])

      console.log('schema.definitions[name].properties[header]')
      console.log(schema.definitions[name].properties[header])

      console.log('schema.definitions[name].properties[header].displayname')
      console.log(schema.definitions[name].properties[header].displayname)


      const displayName = schema.definitions[name].properties[header].displayName
      const tableColumn = {}

      tableColumn['Header'] = displayName
      tableColumn['accessor'] = header

      switch (header) {
        case 'name':
          tableColumn['Cell'] = props => (
            <Link to={routing + '/' + props.original.id}>
              {props.value}
            </Link>
          )
          break

        default:
          tableColumn['Cell'] = props => (<div className='textCenter'>{props.value}</div>)
      }

      tableColumns.push(tableColumn)
    })

    this.state = {
      ready: false,
      message: '',
      search: '',
      name: name,
      description: description,
      tableColumns: tableColumns,
      tableData: []
    }
  }

  componentDidMount () {
    const {producer, endpoint, namespace, languageCode} = this.props
    const url = endpoint + namespace + this.state.name
    const tableData = []

    fetchData(url).then(result => {
      if (Array.isArray(result)) {
        result.forEach(data => {
          tableData.push(resolveTableObject(producer, data, languageCode))
        })
      } else {
        tableData.push(resolveTableObject(producer, result, languageCode))
      }

      this.setState({
        ready: true,
        tableData: tableData
      })
    }).catch(error => {
      this.setState({
        ready: true,
        message: error
      })
    })
  }

  searchInputOnChange = (event) => {
    this.setState({search: event.target.value})
  }

  render () {
    const {ready, message, search, name, description, tableColumns, tableData} = this.state
    const {routing, languageCode} = this.props

    let filteredTableData = tableData
    let noDataText = ''

    if (ready) {
      noDataText = MESSAGES.NOTHING_FOUND[languageCode]

      if (search) {
        noDataText = MESSAGES.NAME_NOT_FOUND[languageCode] + ' \'' + search + '\''

        filteredTableData = tableData.filter(row => {
          return row.name.toUpperCase().includes(search.toUpperCase())
        })
      }

      return (
        <div>
          <Header as='h1' content={splitOnUppercase(name)} subheader={description} dividing
                  icon={{name: 'list alternate outline', color: 'teal'}} />
          <Divider hidden />
          <Popup flowing hideOnScroll position='top center'
                 trigger={<Input icon='search' placeholder={UI.SEARCH[languageCode]} value={search}
                                 onChange={this.searchInputOnChange} />}>
            <Icon color='blue' name='info circle' />
            {MESSAGES.FILTER_BY_NAME[languageCode]}
          </Popup>
          <Label color='teal' size='large' circular>{Object.keys(filteredTableData).length}</Label>
          <Link to={routing + '/new'}>
            <Button primary floated='right' content={UI.CREATE_NEW[languageCode] + ' ' + splitOnUppercase(name)} />
          </Link>
          {message ? <Message negative content={message} /> : <Divider hidden />}

          <ReactTable sortable data={filteredTableData} resizable={false} columns={tableColumns} defaultPageSize={10}
                      noDataText={noDataText} previousText={TABLE.PREVIOUS[languageCode]}
                      nextText={TABLE.NEXT[languageCode]} ofText={TABLE.OF[languageCode]}
                      pageText={TABLE.PAGE[languageCode]} loadingText={TABLE.LOADING[languageCode]}
                      rowsText={TABLE.ROWS[languageCode]} className='-highlight' />
        </div>
      )
    }

    return (
      <Header as='h1' content={splitOnUppercase(name)} subheader={description} dividing
              icon={{name: 'spinner', color: 'teal', loading: true}} />
    )
  }
}

export default UITableBuilder
