'use client'

import { Project } from '@/app/types/projects'
import Container from '../Container'
import Image from 'next/image'
import TechnologieBadge from '../technologies/TechnologieBadge'
import LinkBtn from '../inputs/LinkBtn'
import { BsGithub, BsGlobe } from "react-icons/bs";
import { TbArrowNarrowLeft } from "react-icons/tb";

type ProjectDetailsProps = {
    project: Project
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
    return (
        <Container>
            <div className="grid gap-10 sm:gap-10 md:gap-20 lg:grid-cols-2 items-center">
                <Image alt="Project Image" width={1000} height={750} src={project.thumbnail.url} className="w-full rounded-2xl" />
                <div>
                    <div className='text-4xl font-bold'>
                        {project.title}
                    </div>
                    <p className="text-lg mt-8">
                        {project.description}
                    </p>
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
                    <div className="mt-8">
                        <LinkBtn name="Back to Home" href="/" icon={TbArrowNarrowLeft} />
                    </div>
                </div>
            </div>
        </Container>
    )
}