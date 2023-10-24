import ProjectsCard from "../components/projects/ProjectsCard";
import { TbArrowNarrowLeft } from "react-icons/tb";
import SectionInfo from "../components/SectionInfo";
import LinkBtn from "../components/inputs/LinkBtn";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";
import { ProjectsPageData } from "../types/page-info";

const getPageData = async (): Promise<ProjectsPageData> => {
    const query = `
      query ProjectsQuery {
        projects {
          description
          slug
          title
          thumbnail {
            url
          }
          technologies {
            name
          }
        }
      }
      `
  
    return fetchHygraphQuery(
      query,
      1000 * 60 * 60 * 24, // 1 day
    )
}

export default async function Projects() {
    const { projects } = await getPageData();

    return (
        <section>
            <div className="mt-20 sm:mx-10 md:mx-20 mx-10">
                <SectionInfo 
                    title="Projects" 
                    description="Here&apos;s some of the work I&apos;ve done recently. Each project presented is a sample of the kind of solutions I&apos;m capable of creating.
                        As well as presenting the projects, I also describe the solutions proposed and the challenges I faced. I hope you find
                        inspiration in my work and see how my skills and knowledge can be useful for your own projects." 
                />
                <div>
                    <div className="mb-8 flex items-center justify-center text-center">
                        <LinkBtn name="Back to Home" href="/" icon={TbArrowNarrowLeft} />
                    </div>
                    <div className="grid gap-8 lg:grid-cols-3">
                        {projects.map(project => (
                            <ProjectsCard key={project.title} title={project.title} image={project.thumbnail.url} href={`/projects/${project.slug}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}