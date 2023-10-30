'use client';

import Container from "../Container";
import ProjectsCard from "./ProjectsCard";
import { BsGithub } from 'react-icons/bs';
import SectionInfo from "../SectionInfo";
import { Project } from "@/app/types/projects";
import LinkBtn from "../inputs/LinkBtn";
import { fadeUpAnimation } from "@/app/lib/animations";
import { motion } from "framer-motion";

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
                <div className="grid gap-8 lg:grid-cols-3">
                    {projects?.map((project, i) => (
                        <motion.div
                            key={project.title}
                            {...fadeUpAnimation}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <ProjectsCard title={project.title} image={project.thumbnail.url} href={`/projects/${project.slug}`} />
                        </motion.div>
                    ))}
                </div>
                <div className="mt-8 flex items-center justify-center text-center">
                    <LinkBtn name="See all the projects" href="https://github.com/MarioPonte?tab=repositories" target="_blank" icon={BsGithub} />
                </div>
            </Container>
        </section>
    )
}