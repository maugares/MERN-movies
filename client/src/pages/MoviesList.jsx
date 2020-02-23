import React, { Component } from 'react'
import { Table } from '../components/Table'
import apis from '../api/index'

class MoviesList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: [],
      columns: [],
      isLoading: false
    }
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })

    await apis.getAllMovies().then(movies => {
      this.setState({
        movies: movies.data.data,
        isLoading: false
      })
    })
  }

  render () {
    const { movies, isLoading } = this.state

    console.log('TCL: MoviesList -> render -> movies', movies)

    const columns = [
      {
        Header: 'ID',
        accessor: '_id',
        filterable: true
      },
      {
        Header: 'Name',
        accessor: 'name',
        filterable: true
      },
      {
        Header: 'Rating',
        accessor: 'rating',
        filterable: true
      },
      {
        Header: 'Time',
        accessor: 'time',
        Cell: props => <span>{!!props.value ? props.value.join(' / ') : 'Missing timestamp'}</span>
      }
    ]

    let showTable = true
    if (!movies.length) {
      showTable = false
    }

    return <div>{showTable && <Table data={movies} columns={columns} />}</div>
  }
}

export default MoviesList
