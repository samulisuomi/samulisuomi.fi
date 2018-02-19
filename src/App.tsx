import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'

import './App.scss'

export const ROOT_CLASS = 'app'
export const ANIMATED_LINK_CLASS = 'animated-link'
export const TEXT_ALIGN_CENTER_SMALL = 'text-align-center-small'

export default () => (
  <Router>
    <div className={ROOT_CLASS}>
      <Routes />
    </div>
  </Router>
)
