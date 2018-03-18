import { SocialMediaItem } from '../types'

import externalUrls from './externalUrls'

export const linkedIn: SocialMediaItem = {
  title: "LinkedIn",
  url: externalUrls.linkedIn,
  faKey: "fa-linkedin"
}

export const googlePlay: SocialMediaItem = {
  title: "Google Play",
  url: externalUrls.googlePlay,
  faKey: "fa-android"
}

export const gitHub: SocialMediaItem = {
  title: "GitHub",
  url: externalUrls.gitHub,
  faKey: "fa-github"
}

export const twitter: SocialMediaItem = {
  title: "Twitter",
  url: externalUrls.twitter,
  faKey: "fa-twitter"
}

export const socialMediaItems: SocialMediaItem[] = [
  linkedIn,
  gitHub,
  twitter
]