'use client';

import Link from "next/link";
import Container from "../Container";
import ProjectsCard from "./ProjectsCard";
import { BsGithub } from 'react-icons/bs';
import SectionInfo from "../SectionInfo";
import { Project } from "@/app/types/projects";

type ProjectsProps = {
    projects: Project[]
}

export const Projects = ({ projects }: ProjectsProps) => {

    return (
        <section id="projects" className="pt-20 h-auto">
            <Container>
                <SectionInfo
                    title="Projects"
                    description="Here&apos;s some of the work I&apos;ve done recently. Each project presented is a sample of the kind of solutions I&apos;m capable of creating.
                    As well as presenting the projects, I also describe the solutions proposed and the challenges I faced. I hope you find
                    inspiration in my work and see how my skills and knowledge can be useful for your own projects."
                />
                <div>
                    <div className="grid gap-8 lg:grid-cols-3">
                        {projects?.map((project) => (
                            <div key={project.slug}>
                                <ProjectsCard title={project.title} image={project.thumbnail.url} />
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex items-center justify-center text-center">
                        <Link aria-label="See all the projects" href="https://github.com/MarioPonte?tab=repositories" target="_blank">
                            <div className="flex items-center text-indigo-950 dark:text-neutral-200 hover:text-indigo-800 dark:hover:text-white">
                                <BsGithub className="text-2xl mr-2" />
                                <span>See all the projects</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}
