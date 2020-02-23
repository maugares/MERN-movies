import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
  className: 'collapse navbar-collapse'
})``

const List = styled.div.attrs({
  className: 'navbar-nav mr-auto'
})``

const Item = styled.div.attrs({
  className: 'collpase navbar-collapse'
})``

export default class Links extends Component {
  render () {
    return (
      <React.Fragment>
        <Link to='/' className='navbar-brang'>
          My first MERN Application
        </Link>
        <Collapse>
          <List>
            <Item>
              <Link to="/" className="nav-link">
                Movies
              </Link>
            </Item>
            <Item>
              <Link to="/create" className="nav-link">
                Create Movie
              </Link>
            </Item>
          </List>
        </Collapse>
      </React.Fragment>
    )
  }
}
