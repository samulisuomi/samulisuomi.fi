import React from 'react'

import './Header.scss'

import SocialLinks from '../../partials/SocialLinks'

const ROOT_CLASS = 'pages-home-header'
const SOCIAL_LINKS_CLASS = `${ROOT_CLASS}-social-links`

export default () => (
  <div className={ROOT_CLASS}>
    <div className="row">
      <h2>Samuli Suomi</h2>
    </div>
    <div className="row">
      <p>
        Hi.
      </p>
      <p>
        I'm an engineer from the forests of southern Finland.
      </p>
      <p>
        I've done web and other computery things.
      </p>
      <p>
        The owls are not what they seem.
      </p>
    </div>
    <SocialLinks className={SOCIAL_LINKS_CLASS} />
  </div>
)
