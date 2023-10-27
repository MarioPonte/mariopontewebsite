"use client";

import { LogoMario } from "@/app/SVGFiles";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import { NavbarList } from "./NavbarList";

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
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'}`} >
                        <NavbarList/>
                    </div>
                </div>
            </div>
        </div>
    )
}