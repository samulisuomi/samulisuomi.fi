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
      Currently I work as a full-stack web developer at Synack,
      a Silicon Valley startup providing a crowdsourced security platform.
    </p>
    <p>
      Before this adventure, I worked at the Finnish consulting company Digia, first in enterprise application integrations and then in full-stack web development.
      I've also researched agile methods,
      done smaller software projects on the side and completed my M.Sc. in Software Engineering back in 2015.
    </p>
    <p>
      For a full CV, visit my <a href={linkedInUrl}>LinkedIn</a>.
    </p>
  </div>
)
