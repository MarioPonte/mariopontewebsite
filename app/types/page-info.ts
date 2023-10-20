import type { RichTextContent } from "@graphcms/rich-text-types";

export type HomePageInfo = {
    about: {
        raw: RichTextContent;
    }
}

export type HomePageData = {
    page: HomePageInfo
}