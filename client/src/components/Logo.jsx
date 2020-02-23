import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo.svg'

export default class Logo extends Component {
  render () {
    return (
        <img src={logo} width='50' height='50' alt='sambarros.com' />
    )
  }
}
