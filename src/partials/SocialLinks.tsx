
import React from 'react'

import SocialLink from './SocialLink'

import { socialMediaItems } from '../utilities/socialMediaItems'

interface Props {
  className: string
}

export default ({ className }: Props) => (
  <div className={className}>
    { socialMediaItems.map(social => (
        <SocialLink
          key={social.title}
          socialMediaItem={social}
        />
      )
    ) }
  </div>
)
