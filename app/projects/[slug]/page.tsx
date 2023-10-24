import Container from "@/app/components/Container";
import LinkBtn from "@/app/components/inputs/LinkBtn";
import TechnologieBadge from "@/app/components/technologies/TechnologieBadge";
import { ProjectPageData } from "@/app/types/page-info";
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
                    <Image alt="Project Image" width={1000} height={750} src="https://encurtador.com.br/boALR" className="w-full rounded-2xl" />
                </div>
                <div>
                    <div>
                        <div className='text-4xl font-bold'>
                            {project.title}
                        </div>
                        <p className="text-lg mt-8">
                            Simple landing page with the theme of the movie Avatar: The Way of Water to practice my HTML5 and CSS3 skills.
                        </p>
                    </div>
                    <div className="flex space-x-2 mt-2">
                        <TechnologieBadge name="HTML5" />
                        <TechnologieBadge name="CSS3" />
                    </div>
                    <div className="mt-8 space-x-10 flex">
                        <LinkBtn name="Repository" href="https://github.com/MarioPonte/AvatarTheWayOfWater" target="_blank" icon={BsGithub} />
                        <LinkBtn name="View Project" href="https://marioponte.github.io/AvatarTheWayOfWater/" target="_blank" icon={BsGlobe} />
                    </div>
                    <div className="mt-8 space-x-10 flex">
                        <LinkBtn name="Back to Home" href="/" icon={TbArrowNarrowLeft} />
                    </div>
                </div>
            </div>
        </Container>
    )
}