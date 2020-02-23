import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Links extends Component {
  render () {
    return (
      <React.Fragment>
        <Link to='/' className='navbar-brang'>
          My first MERN Application
        </Link>
        <Link to='/' className='nav-link'>
          Movies
        </Link>
        <Link to='/create' className='nav-link'>
          Create Movie
        </Link>
      </React.Fragment>
    )
  }
}
