"use client";

import Link from "next/link";
import ProjectsCard from "../components/projects/ProjectsCard";
import { TbArrowNarrowLeft } from "react-icons/tb";

export default function Project() {

    return (
        <section>
            <div className="mt-20 sm:mx-10 md:mx-20 mx-10">
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
                    <div className="mb-8 flex items-center justify-center text-center">
                        <Link aria-label="See all the projects" href="/">
                            <div className="flex items-center text-indigo-950 dark:text-neutral-200 hover:text-indigo-800 dark:hover:text-white">
                                <TbArrowNarrowLeft className="text-2xl mr-2" />
                                <span>Back to Home</span>
                            </div>
                        </Link>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-3">
                        <ProjectsCard title="Avatar Landing Page" image="https://encurtador.com.br/boALR" />
                        <ProjectsCard title="SpaceBox" image="https://encurtador.com.br/auwAZ" />
                        <ProjectsCard title="União Cósmica Website" image="https://encurtador.com.br/hCJO1" />
                    </div>
                </div>
            </div>
        </section>
    )
}