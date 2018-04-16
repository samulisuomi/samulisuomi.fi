import React from 'react'

import './Work.scss'

import { linkedIn as linkedInUrl } from '../../utilities/externalUrls'

const PAGE_ID = 'work'
const ROOT_CLASS = `pages-home-${PAGE_ID}`

export default () => (
  <div className={ROOT_CLASS}>
    <h4 id={PAGE_ID}>
      Work
    </h4>
    <p>
      Currently I do full-stack web development at Synack,
      a Silicon Valley startup providing a crowdsourced security platform.
    </p>
    <p>
      For a full CV, visit my <a href={linkedInUrl} target="_blank">LinkedIn</a>.
    </p>
  </div>
)
