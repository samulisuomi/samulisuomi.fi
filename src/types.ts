export interface PortfolioItem {
  title: string
  year: string
  description: string
}

interface FontAwesomeKey {
  faKey: string
}

export interface SocialMediaItem extends FontAwesomeKey {
  title: string,
  url: string
}