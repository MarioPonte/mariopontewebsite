"use client";

import { LogoMario } from "@/app/SVGFiles";
import Container from "./Container";

export default function Welcome() {
    return (
        <section id="welcome" className="h-fit">
            <Container>
                <div className="flex flex-wrap justify-center items-center md:gap-10">
                    <div>
                        <div className='sm:text-xl md:text-4xl text-xl font-bold'>
                            Hello, I'm
                        </div>
                        <div className='sm:text-4xl md:text-8xl text-4xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-700'>
                            Mário Ponte
                        </div>
                        <div className='sm:text-xl md:text-4xl text-xl font-bold'>
                            Web Developer
                        </div>
                        <button className="my-8 p-4 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white shadow-2xl shadow-indigo-300 dark:shadow-indigo-900 rounded-xl text-xl font-semibold">
                            Get in touch
                        </button>
                    </div>
                    <div>
                        <LogoMario className="sm:h-60 md:h-[600px] h-60 fill-indigo-950 dark:fill-white" />
                    </div>
                </div>
            </Container>
        </section>
    )
}
