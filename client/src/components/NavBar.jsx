import React, { Component } from 'react'

import { Logo, Links } from './index'

export default class NavBar extends Component {
  render () {
    return (
      <div>
        <Logo />
        <Links />
      </div>
    )
  }
}
