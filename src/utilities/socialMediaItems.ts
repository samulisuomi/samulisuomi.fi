import { SocialMediaItem } from '../types'

export const linkedIn: SocialMediaItem = {
  title: "LinkedIn",
  url: "https://www.linkedin.com/in/samulisuomi",
  faKey: "fa-linkedin"
}

export const googlePlay: SocialMediaItem = {
  title: "Google Play",
  url: "https://play.google.com/store/apps/developer?id=Samuli+Suomi",
  faKey: "fa-android"
}

export const gitHub: SocialMediaItem = {
  title: "GitHub",
  url: "https://github.com/sasuomi",
  faKey: "fa-github"
}

export const twitter: SocialMediaItem = {
  title: "Twitter",
  url: "https://twitter.com/_samuli",
  faKey: "fa-twitter"
}

export const socialMediaItems: SocialMediaItem[] = [
  linkedIn,
  gitHub,
  twitter
]