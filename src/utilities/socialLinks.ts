import { SocialMediaItem } from '../types'

export const linkedIn: SocialMediaItem = {
  title: "LinkedIn",
  url: "https://www.linkedin.com/in/samulisuomi",
  faKey: "fa-linkedin"
}

export const socialLinks: SocialMediaItem[] = [
  linkedIn,
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
  }
]