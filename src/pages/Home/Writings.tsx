import React from 'react'

import './Writings.scss'

const PAGE_ID = 'writings'
const ROOT_CLASS = `pages-home-${PAGE_ID}`

export default () => (
  <div className={ROOT_CLASS}>
    <h4>
      Thing<span style={{ color: '#848484' }}>s</span> I've Written
    </h4>
    <p>
      Lorem
    </p>
  </div>
)
