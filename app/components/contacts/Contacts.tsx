'use client';

import Container from "../Container";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { LogoMario } from "../../SVGFiles";
import ContactForm from "./ContactForm";

export default function Contacts() {

    return (
        <section id="contacts" className="pt-20 h-auto">
            <Container>
                <div className="my-20 gap-10 md:gap-32">
                    <div className='text-4xl font-bold'>
                        Contacts
                    </div>
                    <p className="text-lg mt-8">
                        Contact me to discuss your projects, ideas or questions. I&apos;m always happy to help and answer any questions you may have.
                    </p>
                </div>
                <div className="grid gap-10 sm:gap-10 md:gap-40 lg:grid-cols-2 items-center">

                    <div>
                        <ContactForm/>
                    </div>

                    <div className="bg-indigo-200 dark:bg-slate-950 p-10 rounded-xl text-xs sm:text-xs md:text-lg text-indigo-950 dark:text-neutral-400 h-fit flex flex-wrap gap-8">
                        <div className="space-y-6 w-fit">
                            <a href="tel:964158481" aria-label="Phone Number: (+351) 964 158 481" className="flex items-center hover:text-indigo-800 dark:hover:text-white cursor-pointer duration-300">
                                <FaPhoneAlt className="mr-2" />(+351) 964 158 481
                            </a>
                            <a href="mailto:ponteolavo30@gmail.com" aria-label="Email: ponteolavo30@gmail.com" className="flex items-center hover:text-indigo-800 dark:hover:text-white cursor-pointer duration-300">
                                <MdEmail className="mr-2" />ponteolavo30@gmail.com
                            </a>
                            <a href="https://maps.app.goo.gl/voYK9h47sJzF6ckaA" aria-label="Location: Vale Judeu, Loulé" target="_Blank" className="flex items-center hover:text-indigo-800 dark:hover:text-white cursor-pointer duration-300">
                                <IoLocationSharp className="mr-2" />Vale Judeu, Loulé
                            </a>
                        </div>
                        <div>
                            <LogoMario className="h-20 sm:h-20 md:h-32 fill-indigo-950 dark:fill-white"/>
                        </div>
                    </div>

                </div>

            </Container>
        </section>
    )
}
