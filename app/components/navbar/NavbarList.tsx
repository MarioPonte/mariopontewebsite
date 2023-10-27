"use client";

import Link from "next/link";
import ThemeButton from "../ThemeButton";

export const NavbarList = () => {
    return (
        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-semibold">
            <li className="text-white">
                <Link href="/">Home</Link>
            </li>
            <li className="text-white">
                <Link href="/#about">About</Link>
            </li>
            <li className="text-white">
                <Link href="/#technologies">Technologies</Link>
            </li>
            <li className="text-white">
                <Link href="/#projects">Projects</Link>
            </li>
            <li className="text-white">
                <Link href="/#services">Services</Link>
            </li>
            <li className="text-white">
                <Link href="/#contacts">Contacts</Link>
            </li>
            <li className="text-white">
                <ThemeButton />
            </li>
        </ul>
    )
}