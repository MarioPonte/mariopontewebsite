"use client";

import { BsChevronCompactDown } from "react-icons/bs";
import Link from "next/link";

export default function ShowMoreBtn() {
    return (
        <Link aria-label="Show More" href="#about" className="flex items-center justify-center w-40 p-2 rounded-xl border-[1px] border-indigo-950 hover:bg-indigo-950 hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-indigo-950 transition duration-300">
            <BsChevronCompactDown />
        </Link>
    )
}
