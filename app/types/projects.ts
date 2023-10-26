export type KnownTech = {
  iconSvg: string
  name: string
  startDate: string
}

export type Technology = {
  name: string
}

export type Project = {
  slug: string
  thumbnail: {
    url: string
  }
  title: string
  technologies: Technology[]
  pageThumbnail: {
    url: string
  }
  description: string
  liveProjectUrl?: string
  githubUrl?: string
}