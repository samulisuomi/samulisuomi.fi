import React from 'react'

import './Work.scss'

import { linkedIn } from '../../utilities/socialMediaItems'

const ROOT_CLASS = 'pages-home-work'

export default () => (
  <div className={ROOT_CLASS}>
    <h4>
      What I've been doing?
    </h4>
    <p>
      Currently I work as a full-stack web developer at Synack,
      a Silicon Valley startup providing a crowdsourced security platform.
    </p>
    <p>
      Before this adventure, I worked in a consulting company,
      first in enterprise application integrations and then in full-stack web development.
      I've also researched agile methods,
      done smaller software projects on the side and completed my M.Sc in Software Engineering back in 2015.
    </p>
    <p>
      For a full CV, visit my <a href={linkedIn.url}>LinkedIn</a>.
    </p>
  </div>
)
