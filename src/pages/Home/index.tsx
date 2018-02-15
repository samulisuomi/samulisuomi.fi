import React from 'react'
import { withSiteData } from 'react-static'

import './index.scss'

import Header from './Header'

const ROOT_CLASS = 'pages-home'

export default withSiteData(() => (
  <div className={`container ${ROOT_CLASS}`}>
    <Header />
    <hr />
  </div>
))
