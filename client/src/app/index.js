import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { NavBar } from '../components'

import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  )
}

export default App
