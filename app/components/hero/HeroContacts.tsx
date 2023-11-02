"use client";

import Link from "next/link";
import { BsFacebook, BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';

export default function HeroContacts() {
    return (
        <div className='sticky flex bottom-0 justify-center gap-x-6 sm:gap-x-10 text-[22px] sm:text-[28px] p-12'>
            <Link aria-label="Facebook" href="https://www.facebook.com/mario.ponte.79/" target='_Blank' className='text-indigo-950 dark:text-neutral-200 hover:text-indigo-800 dark:hover:text-white'><BsFacebook /></Link>
            <Link aria-label="Linkedin" href="https://www.linkedin.com/in/m%C3%A1rio-ponte/" target='_Blank' className='text-indigo-950 dark:text-neutral-200 hover:text-indigo-800 dark:hover:text-white'><BsLinkedin /></Link>
            <Link aria-label="Github" href="https://github.com/MarioPonte" target='_Blank' className='text-indigo-950 dark:text-neutral-200 hover:text-indigo-800 dark:hover:text-white'><BsGithub /></Link>
            <Link aria-label="Whatsapp" href="https://wa.me/351964158481" target='_Blank' className='text-indigo-950 dark:text-neutral-200 hover:text-indigo-800 dark:hover:text-white'><BsWhatsapp /></Link>
        </div>
    )
}
