"use client";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

interface NavbarMenuBtnProps {
    isOpen: any;
    onClick: () => void;
}

const NavbarMenuBtn: React.FC<NavbarMenuBtnProps> = ({
    isOpen,
    onClick,
}) => {
    return (
        <button
            className="p-2 text-gray-700"
            aria-label="menu"
            onClick={onClick}
        >
            {isOpen ? (
                <AiOutlineClose className="text-white" />
            ) : (
                <AiOutlineMenu className="text-white" />
            )}
        </button>
    )
}

export default NavbarMenuBtn;