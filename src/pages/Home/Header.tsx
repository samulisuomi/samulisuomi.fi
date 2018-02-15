import React from 'react'

import './Header.scss'

const ROOT_CLASS = 'pages-home-header'

export default () => (
  <div className={`row ${ROOT_CLASS}`}>
    <div className="text-align-center-small">
      <h2>Samuli Suomi</h2>
      <p>
        Lorem foo bar.
      </p>
      <p>
        Barem foo lor.
      </p>
      <p>
        Foorem lor bar lar.
      </p>
    </div>
    <div className="row">
      <div className="social-links">
        <div className="link"><a className="animated-link" href="https://www.linkedin.com/in/samulisuomi" title="LinkedIn" target="_blank"><i className="fa fa-linkedin icon-link"></i></a></div>
        <div className="link"><a className="animated-link" href="https://github.com/sasuomi" title="GitHub" target="_blank"><i className="fa fa-github icon-link"></i></a></div>
        <div className="link"><a className="animated-link" href="https://play.google.com/store/apps/developer?id=Samuli+Suomi" title="Google Play" target="_blank"><i className="fa fa-android icon-link"></i></a></div>
        <div className="link"><a className="animated-link" href="https://twitter.com/_samuli" title="Twitter" target="_blank"><i className="fa fa-twitter icon-link"></i></a></div>
      </div>
    </div>
  </div>
)
