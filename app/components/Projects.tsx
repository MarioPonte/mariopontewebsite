'use client';

import Link from "next/link";
import Container from "./Container";
import ProjectsCard from "./ProjectsCard";
import { BsGithub } from 'react-icons/bs';

export default function Projects() {

    return (
        <section id="projects">
            <Container>
                <div className="my-20 gap-10 md:gap-32">
                    <div className='text-4xl font-bold'>
                        Projects
                    </div>
                    <p className="text-lg mt-8">
                        Here&apos;s some of the work I&apos;ve done recently. Each project presented is a sample of the kind of solutions I&apos;m capable of creating.
                        As well as presenting the projects, I also describe the solutions proposed and the challenges I faced. I hope you find
                        inspiration in my work and see how my skills and knowledge can be useful for your own projects.
                    </p>
                </div>
                <div>
                    <div className="grid gap-8 lg:grid-cols-3">
                        <ProjectsCard />
                        <ProjectsCard />
                        <ProjectsCard />
                    </div>
                    <div className="mt-8 flex items-center justify-center text-center">
                        <Link href="https://github.com/MarioPonte?tab=repositories" target="_blank">
                            <div className="flex items-center text-neutral-200 hover:text-white">
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
