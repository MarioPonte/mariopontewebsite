'use client';

import Link from "next/link";
import { IconType } from "react-icons";

interface LinkBtnProps {
    name: string;
    href: string;
    target?: string;
    icon: IconType;
}

const LinkBtn: React.FC<LinkBtnProps> = ({
    name,
    href,
    target,
    icon: Icon
}) => {

    return (
        <Link aria-label={name} href={href} target={target}>
            <div className="flex items-center text-indigo-950 dark:text-neutral-200 hover:text-indigo-800 dark:hover:text-white">
                <Icon className="text-2xl mr-2" />
                <span>{name}</span>
            </div>
        </Link>
    )
}

export default LinkBtn;