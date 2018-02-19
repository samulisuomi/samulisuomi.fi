
import React from 'react'

import { ANIMATED_LINK_CLASS } from '../App'

import { SocialMediaItem } from '../types'

interface Props {
  socialMediaItem: SocialMediaItem
}

export default ({ socialMediaItem }: Props) => (
  <a
    className={ ANIMATED_LINK_CLASS }
    href={socialMediaItem.url}
    title={socialMediaItem.title}
    target="_blank"
  >
    <i className={`fa ${ socialMediaItem.faKey } icon-link`} />
  </a>
)
