"use client";

import Container from "../Container";
import { BsChevronCompactDown } from "react-icons/bs";
import Link from "next/link";
import HeroContacts from "./HeroContacts";
import { motion } from "framer-motion";
import { heroAnimation } from "@/app/lib/animations";

export default function Hero() {
    return (
        <section id="hero" className="h-[80vh] min-h-[400px] relative">
            <Container>
                <motion.div
                    {...heroAnimation}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex text-center items-center flex-col"
                >
                    <div className="flex text-center items-center flex-col justify-center h-[60vh] min-h-[300px]">
                        <h1 className="text-lg sm:text-2xl font-bold uppercase tracking-widest">Web Developer</h1>
                        <h1 className="text-4xl sm:text-8xl font-bold mb-6">Mário Ponte</h1>
                        <p className="text-lg font-medium w-fit sm:w-[400px] mb-6">I create web solutions that make your ideas come to life. Let&apos;s build something amazing together.</p>
                        <Link aria-label="Show More" href="#about" className="flex items-center justify-center w-40 p-2 rounded-xl border-[1px] border-indigo-950 hover:bg-indigo-950 hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-indigo-950 transition duration-300">
                            <BsChevronCompactDown />
                        </Link>
                    </div>
                    <HeroContacts />
                </motion.div>
            </Container>
        </section>
    )
}
