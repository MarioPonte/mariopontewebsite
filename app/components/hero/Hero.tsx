"use client";

import { LogoMario } from "@/app/SVGFiles";
import Container from "../Container";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="welcome" className="h-fit flex justify-center items-center">
            <Container>
                {/*
                    <div className="flex flex-wrap justify-center items-center md:gap-10">
                        <div>
                            <div className='sm:text-xl md:text-4xl text-xl font-bold'>
                                Hello, I&apos;m
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
                            <LogoMario className="sm:h-60 md:h-[500px] h-60 fill-indigo-950 dark:fill-white" />
                        </div>
                    </div>
                */}
                <div className="flex text-center justify-center items-center flex-col space-y-6">
                    <Image src="https://github.com/MarioPonte.png" alt="Picture of Mário Ponte" width={100} height={100} className="rounded-full dark:border-white drop-shadow-[0_15px_15px_rgba(165,180,252,0.5)] dark:drop-shadow-[0_15px_15px_rgba(49,46,129,0.5)]" />
                    <h1 className="text-4xl sm:text-8xl font-bold">Mário Ponte</h1>
                    <h5 className="text-lg font-medium w-fit sm:w-[400px]">I create web solutions that make your ideas come to life. Let&apos;s build something amazing together.</h5>
                    <button className="w-40 my-2 p-4 hover:bg-gradient-to-r border-[2px] border-indigo-950 rounded-xl">
                        baixo
                    </button>
                </div>
            </Container>
        </section>
    )
}
