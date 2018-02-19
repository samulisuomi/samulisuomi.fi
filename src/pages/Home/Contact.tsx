import React from 'react'

import './Contact.scss'

import { linkedIn } from '../../utilities/socialLinks'

const ROOT_CLASS = 'pages-home-contact'

export default () => (
  <div className={ROOT_CLASS}>
    <h4>
      Contact
    </h4>
    <p>
      Feel free to contact me on <a href={linkedIn.url}>LinkedIn</a> using InMail, I check it regularly.
    </p>
  </div>
)
