"use client";

import Container from "../Container";
import { BsChevronCompactDown } from "react-icons/bs";
import Link from "next/link";
import HeroContacts from "./HeroContacts";
import { BsFacebook, BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';

export default function Hero() {
    return (
        <section id="hero" className="h-[80vh] min-h-[400px] relative">
            <Container>
                <div className="flex text-center items-center flex-col">
                    <h1 className="text-4xl sm:text-2xl font-bold uppercase tracking-widest">Web Developer</h1>
                    <h1 className="text-4xl sm:text-8xl font-bold mb-6">Mário Ponte</h1>
                    <h5 className="text-lg font-medium w-fit sm:w-[400px] mb-6">I create web solutions that make your ideas come to life. Let&apos;s build something amazing together.</h5>
                    <Link href="#about" className="flex items-center justify-center w-40 my-2 p-2 hover:bg-gradient-to-r rounded-xl border-[1px] border-indigo-950 hover:bg-indigo-950 hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-indigo-950 transition duration-300">
                        <BsChevronCompactDown />
                    </Link>
                    <div className='absolute bottom-0 flex gap-x-6 sm:gap-x-10 text-[22px] sm:text-[28px] p-12'>
                    <Link aria-label="Facebook" href="https://www.facebook.com/mario.ponte.79/" target='_blank' className='text-indigo-950 dark:text-neutral-200 hover:text-indigo-800 dark:hover:text-white'><BsFacebook /></Link>
                    <Link aria-label="Linkedin" href="https://www.linkedin.com/in/m%C3%A1rio-ponte/" target='_blank' className='text-indigo-950 dark:text-neutral-200 hover:text-indigo-800 dark:hover:text-white'><BsLinkedin /></Link>
                    <Link aria-label="Github" href="https://github.com/MarioPonte" target='_blank' className='text-indigo-950 dark:text-neutral-200 hover:text-indigo-800 dark:hover:text-white'><BsGithub /></Link>
                    <Link aria-label="Whatsapp" href="https://wa.me/351964158481" target='_blank' className='text-indigo-950 dark:text-neutral-200 hover:text-indigo-800 dark:hover:text-white'><BsWhatsapp /></Link>
                </div>
                </div>
                
            </Container>            
        </section>
    )
}
