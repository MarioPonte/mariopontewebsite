'use client';

import Link from "next/link";
import Container from "./Container";
import ProjectsCard from "./portfolio/ProjectsCard";
import { BsGithub } from 'react-icons/bs';

export default function Services() {

    return (
        <section id="services" className="pt-20 h-auto">
            <Container>
                <div className="my-20 gap-10 md:gap-32">
                    <div className='text-4xl font-bold'>
                        Services
                    </div>
                    <p className="text-lg mt-8">
                        Get to know some of my services and find out what I can do for you!
                    </p>
                </div>
                <div>
                </div>

            </Container>
        </section>
    )
}
