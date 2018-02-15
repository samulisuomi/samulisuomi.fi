import React from 'react'

import './404.scss'

const ROOT_CLASS = 'pages-404'

export default () => (
  <div className={ROOT_CLASS}>
    <div>
      <h1>404</h1>
      <p>Not Found</p>
      <p><a href="/">🏃</a></p>
    </div>
  </div>
)
