import React from 'react'

import './Contact.scss'

import { linkedIn as linkedInUrl } from '../../utilities/externalUrls'

const PAGE_ID = 'contact'
const ROOT_CLASS = `pages-home-${PAGE_ID}`

export default () => (
  <div className={ROOT_CLASS}>
    <h4>
      Contact
    </h4>
    <p>
      <a href={linkedInUrl}>LinkedIn</a> messages preferred.
    </p>
  </div>
)
