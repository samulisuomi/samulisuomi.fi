import React from 'react'
import { withSiteData } from 'react-static'

export default withSiteData(() => (
  <div className="container">
    <div className="row">
      <div className="text-align-center-small">
        <h2>Samuli Suomi</h2>
        <p>
          I've done web and other computery things.
          <br />
          The owls are not what they seem.
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
  </div>
))
