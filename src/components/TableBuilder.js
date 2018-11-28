import React, { Component } from 'react'
import ReactTable from 'react-table'
import { Link } from 'react-router-dom'
import { Button, Divider, Header, Icon, Input, Label, Message, Popup } from 'semantic-ui-react'

import { splitOnUppercase } from '../utilities/Common'
import { fetchData } from '../utilities/http-clients/fetch'
import { resolveTableHeaders } from '../utilities/table-handling'

class TableBuilder extends Component {
  constructor (props) {
    super(props)

    const name = this.props.schema.$ref.replace('#/definitions/', '')
    const description = this.props.schema.definitions[name].description
    const tableHeaders = resolveTableHeaders(this.props.producer)
    const tableColumns = []

    tableHeaders.forEach(header => {
      const displayName = this.props.schema.definitions[name].properties[header].displayName
      const tableColumn = {}

      tableColumn['Header'] = displayName
      tableColumn['accessor'] = header

      switch (header) {
        case 'id':
          tableColumn['Cell'] = props => (
            <Link to={this.props.routing + '/' + props.original.id}>
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
    const url = this.props.endpoint + 'data/' + this.state.name
    const tableData = []

    fetchData(url).then(result => {
      if (result.length !== 0) {
        result.forEach(value => {
          const tableObject = {}

          // TODO: Make a producer for this
          tableObject['id'] = value.id
          tableObject['name'] = value.name[0].languageText
          tableObject['description'] = value.description[0].languageText

          tableData.push(tableObject)
        })
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

    let filteredTableData = tableData
    let noDataText = ''

    if (ready) {
      noDataText = 'Fant ingen...'

      if (search) {
        noDataText = 'Fant ingen med navnet \'' + search + '\''

        filteredTableData = tableData.filter(row => {
          return row.name.toUpperCase().includes(search.toUpperCase())
        })
      }

      return (
        <div>
          <Header as='h1' content={splitOnUppercase(name)} subheader={description} dividing
                  icon={{name: 'list alternate outline', color: 'teal'}}/>
          <Divider hidden/>
          <Popup flowing hideOnScroll position='top center'
                 trigger={<Input icon='search' placeholder='Søk' value={search} onChange={this.searchInputOnChange}/>}>
            <Icon color='blue' name='info circle'/>
            Filtrerer tabellen etter navn
          </Popup>
          <Label color='teal' size='large' circular>{Object.keys(filteredTableData).length}</Label>
          <Link to={this.props.routing + '/new'}>
            <Button primary floated='right' content={'Opprett ny ' + splitOnUppercase(name)}/>
          </Link>
          {message ? <Message negative content={message}/> : <Divider hidden/>}

          <ReactTable sortable data={filteredTableData} resizable={false} columns={tableColumns} defaultPageSize={10}
                      noDataText={noDataText} previousText='Forrige' nextText='Neste' loadingText='Laster'
                      pageText='Side' ofText='av' rowsText='rader' className='-highlight'/>
        </div>
      )
    }

    return (
      <Header as='h1' content={splitOnUppercase(name)} subheader={description} dividing
              icon={{name: 'spinner', color: 'teal', loading: true}}/>
    )
  }
}

export default TableBuilder
