'use client';

import Container from "./Container";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full, DiNodejs } from "react-icons/di";
import { BiLogoJavascript, BiLogoReact } from "react-icons/bi";
import { FaPhp, FaBootstrap } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import TechnologiesIcons from "./TechnologiesIcons";
import { useState } from "react";

export default function Technologies() {

    const [techInfo, setTechInfo] = useState<any | null>(null);

    const handleTechClick = (name: string, description: string) => {
        const techInfo = (
            <div>
                <div className="text-xl font-semibold">
                    {name}
                </div>
                <div>
                    {description}
                </div>
            </div>
        )
        setTechInfo(techInfo);
    };

    return (
        <section id="technologies" className="pt-20 h-auto">
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
                    <div id="TechContent" className="w-[500px]">
                        {techInfo || "Hover your mouse over each of the technologies to see more information about them."}
                    </div>
                    <div>
                        <div className="flex flex-wrap">
                            <TechnologiesIcons icon={AiFillHtml5} onClick={() => handleTechClick("HTML5","Markup language used to structure web content, including text, images, and links.")}/>
                            <TechnologiesIcons icon={DiCss3Full} onClick={() => handleTechClick("CSS3","Language used to style and format HTML elements, making website design more appealing.")}/>
                            <TechnologiesIcons icon={BiLogoJavascript} onClick={() => handleTechClick("JavaScript","Widely used programming language for making web pages interactive and dynamic, controlling browser behavior.")}/>
                            <TechnologiesIcons icon={FaBootstrap} onClick={() => handleTechClick("Bootstrap","A popular front-end design framework that makes it easy to create responsive and aesthetically pleasing websites with pre-built components.")}/>
                        </div>
                        <div className="flex flex-wrap">
                            <TechnologiesIcons icon={FaPhp} onClick={() => handleTechClick("PHP","A widely used server-side programming language for creating dynamic web applications, processing forms, and accessing databases.")}/>
                            <TechnologiesIcons icon={DiNodejs} onClick={() => handleTechClick("NodeJS","A server-side JavaScript runtime environment that allows you to develop high-performance and scalable applications.")}/>
                            <TechnologiesIcons icon={BiLogoReact} onClick={() => handleTechClick("ReactJS","A JavaScript library for building single-page user interfaces (SPAs) that is highly modular and reactive.")}/>
                            <TechnologiesIcons icon={SiNextdotjs} onClick={() => handleTechClick("Next.js","A JavaScript framework for building web and React applications that simplifies creating applications with server-side rendering and routing.")}/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
