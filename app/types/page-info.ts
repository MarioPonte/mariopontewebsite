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

export type HomePageData = {
    page: HomePageInfo
}