import type { RichTextContent } from "@graphcms/rich-text-types";
import { KnownTech, Project } from "./projects";

export type HomePageInfo = {
    about: {
        raw: RichTextContent;
    }
    technologies: KnownTech[]
    knownTechs: KnownTech[]
    highlightProjects: Project[]
}

export type ProjectPageData = {
    project: Project
}

export type ProjectsPageData = {
    projects: Project[]
}

export type ProjectsPageStaticData = {
    projects: {
        slug: string
    }[]
}

export type HomePageData = {
    page: HomePageInfo
}