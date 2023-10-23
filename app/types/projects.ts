import type { RichTextContent } from '@graphcms/rich-text-types'

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
  description: {
    raw: RichTextContent
    text: string
  }
  liveProjectUrl?: string
  githubUrl?: string
}