import type { RichTextContent } from "@graphcms/rich-text-types";
import { KnownTech, Project } from "./projects";
import { type } from "os";

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

export type HomePageData = {
    page: HomePageInfo
}