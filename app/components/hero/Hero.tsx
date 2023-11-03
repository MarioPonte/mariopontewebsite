"use client";

import Container from "../Container";
import { BsChevronCompactDown } from "react-icons/bs";
import Link from "next/link";
import HeroContacts from "./HeroContacts";

export default function Hero() {
    return (
        <section id="hero" className="h-[80vh] min-h-[400px] relative">
            <Container>
                <div className="flex text-center items-center flex-col">
                    <h1 className="text-lg sm:text-2xl font-bold uppercase tracking-widest">Web Developer</h1>
                    <h1 className="text-4xl sm:text-8xl font-bold mb-6">Mário Ponte</h1>
                    <h5 className="text-lg font-medium w-fit sm:w-[400px] mb-6">I create web solutions that make your ideas come to life. Let&apos;s build something amazing together.</h5>
                    <Link href="#about" className="flex items-center justify-center w-40 p-2 rounded-xl border-[1px] border-indigo-950 hover:bg-indigo-950 hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-indigo-950 transition duration-300">
                        <BsChevronCompactDown />
                    </Link>
                    <HeroContacts/>
                </div>
                
            </Container>            
        </section>
    )
}
