"use client";

import { LogoMario } from "@/app/SVGFiles";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import ThemeButton from "../ThemeButton";

export const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <div className="fixed w-full bg-indigo-950 z-10 shadow-sm">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link aria-label="Page Logo" href="/"><LogoMario className="h-14 fill-white" /></Link>
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700"
                            aria-label="menu"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <AiOutlineClose className="text-white" />
                            ) : (
                                <AiOutlineMenu className="text-white" />
                            )}
                        </button>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'}`}
                    >
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
                    </div>
                </div>
            </div>
        </div>
    )
}