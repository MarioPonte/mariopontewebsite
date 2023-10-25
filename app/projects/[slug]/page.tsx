import Container from "@/app/components/Container";
import LinkBtn from "@/app/components/inputs/LinkBtn";
import TechnologieBadge from "@/app/components/technologies/TechnologieBadge";
import { ProjectPageData, ProjectsPageStaticData } from "@/app/types/page-info";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { TbArrowNarrowLeft } from "react-icons/tb";

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
        <Container>
            <div className="grid gap-10 sm:gap-10 md:gap-20 lg:grid-cols-2 items-center">
                <div>
                    <Image alt="Project Image" width={1000} height={750} src={project.thumbnail.url} className="w-full rounded-2xl" />
                </div>
                <div>
                    <div>
                        <div className='text-4xl font-bold'>
                            {project.title}
                        </div>
                        <p className="text-lg mt-8">
                            {project.description}
                        </p>
                    </div>
                    <div className="flex space-x-2 mt-2">
                        {project.technologies.map(tech => (
                            <TechnologieBadge key={tech.name} name={tech.name} />
                        ))}
                    </div>
                    <div className="mt-8 space-x-10 flex">
                        {project?.githubUrl && (
                            <LinkBtn name="Repository" href={project?.githubUrl} target="_blank" icon={BsGithub} />
                        )}
                        {project?.liveProjectUrl && (
                            <LinkBtn name="View Project" href={project?.liveProjectUrl} target="_blank" icon={BsGlobe} />
                        )}
                    </div>
                    <div className="mt-8 space-x-10 flex">
                        <LinkBtn name="Back to Home" href="/" icon={TbArrowNarrowLeft} />
                    </div>
                </div>
            </div>
        </Container>
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