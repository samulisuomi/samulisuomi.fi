import React from 'react'
import { withSiteData } from 'react-static'

import './index.scss'

import Header from './Header'
import Work from './Work'
import Contact from './Contact'

const ROOT_CLASS = 'pages-home'

export default withSiteData(() => (
  <div className={`container ${ROOT_CLASS}`}>
    { [
      Header,
      Work,
      Contact
    ].map((Section, index) => (
      <div key={index}>
        { !index ? null : (<hr />) }
        <Section />
      </div>
    )) }
  </div>
))
