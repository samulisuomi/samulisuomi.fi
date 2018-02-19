
import React from 'react'

import SocialLink from './SocialLink'

import { socialLinks } from '../utilities/socialLinks'

interface Props {
  className: string
}

export default ({ className }: Props) => (
  <div className={className}>
    { socialLinks.map(social => (
        <SocialLink
          key={social.title}
          socialMediaItem={social}
        />
      )
    ) }
  </div>
)
