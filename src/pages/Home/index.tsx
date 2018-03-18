import React from 'react'
import { withSiteData } from 'react-static'

import './index.scss'

import Header from './Header'
import Work from './Work'
import Projects from './Projects'
import Contact from './Contact'

const ROOT_CLASS = 'pages-home'

export default withSiteData(() => (
  <div className={`container ${ROOT_CLASS}`}>
    { [
      <Header />,
      <Work />,
      <Projects />,
      <Contact />
    ].map((section, index) => [
      !index ? null : <hr />,
      section
    ]) }
  </div>
))
