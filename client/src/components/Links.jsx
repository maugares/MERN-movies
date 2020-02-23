import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Links extends Component {
  render () {
    return (
      <React.Fragment>
        <Link to='/' className='navbar-brand'>
          My first MERN Application
        </Link>
        <Link to='/movies/list' className='nav-link'>
          Movies List
        </Link>
        <Link to='/movies/create' className='nav-link'>
          Create Movie
        </Link>
      </React.Fragment>
    )
  }
}
