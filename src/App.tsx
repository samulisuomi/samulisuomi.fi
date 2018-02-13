import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'

import './App.scss'

import BaseHead from './BaseHead'

export default () => (
  <Router>
    <div>
      <BaseHead />
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)
