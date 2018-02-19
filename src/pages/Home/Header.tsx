import React from 'react'

import './Header.scss'

import {
  ANIMATED_LINK_CLASS,
  TEXT_ALIGN_CENTER_SMALL
} from '../../App'

import SocialLinks from '../../partials/SocialLinks'

const ROOT_CLASS = 'pages-home-header'
const SOCIAL_LINKS_CLASS = `${ROOT_CLASS}-social-links`

export default () => (
  <div className={ROOT_CLASS}>
    <div className={`row ${ TEXT_ALIGN_CENTER_SMALL }`}>
      <h2>Samuli Suomi</h2>
    </div>
    <div className={`row ${ TEXT_ALIGN_CENTER_SMALL }`}>
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
    <SocialLinks className={SOCIAL_LINKS_CLASS} />
  </div>
)
