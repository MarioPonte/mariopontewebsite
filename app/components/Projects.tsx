'use client';

import Container from "./Container";

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
                <div className="my-20 flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32">
                </div>
            </Container>
        </section>
    )
}
