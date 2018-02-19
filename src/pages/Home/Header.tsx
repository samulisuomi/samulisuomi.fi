import React from 'react'

import './Header.scss'

import {
  ANIMATED_LINK_CLASS,
  TEXT_ALIGN_CENTER_SMALL
} from '../../App'

const ROOT_CLASS = 'pages-home-header'
const SOCIAL_LINKS_CLASS = `${ROOT_CLASS}-social-links`
const SOCIAL_LINKS_LINK_CLASS = `${SOCIAL_LINKS_CLASS}-link`

const SOCIAL_LINKS: { title: string, url: string, faKey: string}[] = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/samulisuomi",
    faKey: "fa-linkedin"
  },
  {
    title: "GitHub",
    url: "https://github.com/sasuomi",
    faKey: "fa-github"
  },
  {
    title: "Google Play",
    url: "https://play.google.com/store/apps/developer?id=Samuli+Suomi",
    faKey: "fa-android"
  },
  {
    title: "Twitter",
    url: "https://twitter.com/_samuli",
    faKey: "fa-twitter"
  },
]

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
    <div className={SOCIAL_LINKS_CLASS}>
      { SOCIAL_LINKS.map(social => (
          <a
            className={`${ SOCIAL_LINKS_LINK_CLASS } ${ ANIMATED_LINK_CLASS }`}
            href={social.url}
            title={social.title}
            key={social.title}
            target="_blank"
          >
            <i className={`fa ${ social.faKey } icon-link`} />
          </a>
        )
      ) }
    </div>
  </div>
)
