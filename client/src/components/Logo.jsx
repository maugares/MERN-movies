import React, { Component } from 'react'

import logo from '../logo.svg'

export default class Logo extends Component {
  render () {
    return (
        <img src={logo} width='50' height='50' alt='react-logo' />
    )
  }
}
