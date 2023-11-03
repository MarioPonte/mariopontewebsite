"use client";

import Link from "next/link";
import ThemeButton from "../ThemeButton";

interface NavbarListProps {
    onClick: () => void;
}

const NavbarList: React.FC<NavbarListProps> = ({
    onClick,
}) => {
    return (
        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-semibold">
            <li className="text-white">
                <Link href="/" onClick={onClick}>Home</Link>
            </li>
            <li className="text-white">
                <Link href="/#about" onClick={onClick}>About</Link>
            </li>
            <li className="text-white">
                <Link href="/#technologies" onClick={onClick}>Technologies</Link>
            </li>
            <li className="text-white">
                <Link href="/#projects" onClick={onClick}>Projects</Link>
            </li>
            <li className="text-white">
                <Link href="/#services" onClick={onClick}>Services</Link>
            </li>
            <li className="text-white">
                <Link href="/#contacts" onClick={onClick}>Contacts</Link>
            </li>
            <li className="text-white">
                <ThemeButton />
            </li>
        </ul>
    )
}

export default NavbarList;