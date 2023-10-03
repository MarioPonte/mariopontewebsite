'use client';

import Container from "./Container";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full, DiNodejs } from "react-icons/di";
import { BiLogoJavascript, BiLogoReact } from "react-icons/bi";
import { FaPhp, FaBootstrap } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import TechnologiesIcons from "./TechnologiesIcons";

export default function Technologies() {
    return (
        <section id="technologies">
            <Container>
                <div className="my-20 gap-10 md:gap-32">
                    <div className='text-4xl font-bold'>
                        Technologies
                    </div>
                    <p className="text-lg mt-8">
                        Here are the technologies I use to develop web solutions. This includes programming languages, frameworks, 
                        libraries, platforms and other tools that allow me to create efficient and innovative projects. 
                        Knowing the technologies I use can help you understand my skills as a web developer and how they 
                        can be applied to meet your needs.
                    </p>
                </div>
                <div className="my-20 flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32">
                    <div className="w-[500px]">
                        Hover your mouse over each of the technologies to see more information about them.
                    </div>
                    <div>
                        <div className="flex flex-wrap">
                            <TechnologiesIcons icon={AiFillHtml5}/>
                            <TechnologiesIcons icon={DiCss3Full}/>
                            <TechnologiesIcons icon={BiLogoJavascript}/>
                            <TechnologiesIcons icon={FaBootstrap}/>
                        </div>
                        <div className="flex flex-wrap">
                            <TechnologiesIcons icon={FaPhp}/>
                            <TechnologiesIcons icon={DiNodejs}/>
                            <TechnologiesIcons icon={BiLogoReact}/>
                            <TechnologiesIcons icon={SiNextdotjs}/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
