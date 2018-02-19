import React from 'react'
import { withSiteData } from 'react-static'

import './index.scss'

import Header from './Header'
import Work from './Work'
import Projects from './Projects'
import Writings from './Writings'
import Contact from './Contact'

const ROOT_CLASS = 'pages-home'

export default withSiteData(() => (
  <div className={`container ${ROOT_CLASS}`}>
    <Header />
    <hr />
    <Work />
    <hr />
    <Projects />
    <hr />
    <Writings />
    <hr />
    <Contact />
  </div>
))
