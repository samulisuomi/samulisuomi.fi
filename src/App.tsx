import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'

import './App.scss'

export default () => (
  <Router>
    <div>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)
