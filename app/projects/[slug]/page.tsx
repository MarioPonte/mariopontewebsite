import { ProjectDetails } from "@/app/components/projects/ProjectDetails";
import { ProjectPageData, ProjectsPageStaticData } from "@/app/types/page-info";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type ProjectProps = {
    params: {
        slug: string
    }
}

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
    const query = `
    query ProjectQuery() {
        project(where: {slug: "${slug}"}) {
          thumbnail {
            url
          }
          title
          description
          technologies {
            name
          }
          liveProjectUrl
          githubUrl
        }
      }
    `

    return fetchHygraphQuery<ProjectPageData>(
        query,
        1000 * 60 * 60 * 24, // 1 day
    )
}

export default async function Project({ params: { slug } }: ProjectProps) {
    const { project } = await getProjectDetails(slug)

    if (!project?.title) return notFound();

    return (
        <ProjectDetails project={project} />
    )
}

export async function generateStaticParams() {
    const query = `
    query ProjectsSlugsQuery() {
        projects(first: 100) {
            slug
        }
    }
    `

    const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query);

    return projects
}

export async function generateMetadata({
    params: { slug },
}: ProjectProps): Promise<Metadata> {
    const data = await getProjectDetails(slug)
    const project = data.project

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            images: [
                {
                    url: project.thumbnail.url,
                    width: 1200,
                    height: 630,
                },
            ],
        },
    }
}