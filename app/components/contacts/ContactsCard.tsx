'use client';

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { LogoMario } from "../../SVGFiles";

export default function ContactsCard() {
    return (
        <div className="bg-indigo-200 dark:bg-slate-950 border border-indigo-200 dark:border-slate-950 hover:border-indigo-950 dark:hover:border-white p-10 rounded-xl text-xs sm:text-xs md:text-lg text-indigo-950 dark:text-neutral-400 h-fit flex flex-wrap gap-8 transition duration-500">
            <div className="space-y-6">
                <a href="tel:964158481" aria-label="Phone Number: (+351) 964 158 481" className="flex w-fit items-center hover:text-indigo-800 dark:hover:text-white cursor-pointer duration-300">
                    <FaPhoneAlt className="mr-2" />(+351) 964 158 481
                </a>
                <a href="mailto:ponteolavo30@gmail.com" aria-label="Email: ponteolavo30@gmail.com" className="flex w-fit items-center hover:text-indigo-800 dark:hover:text-white cursor-pointer duration-300">
                    <MdEmail className="mr-2" />ponteolavo30@gmail.com
                </a>
                <a href="https://maps.app.goo.gl/voYK9h47sJzF6ckaA" aria-label="Location: Vale Judeu, Loulé" target="_Blank" className="flex w-fit items-center hover:text-indigo-800 dark:hover:text-white cursor-pointer duration-300">
                    <IoLocationSharp className="mr-2" />Vale Judeu, Loulé
                </a>
            </div>
            <div>
                <LogoMario className="h-20 sm:h-20 md:h-32 fill-indigo-950 dark:fill-white" />
            </div>
        </div>
    )
}
