'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs"

const ThemeButton = () => {
    const {resolvedTheme, setTheme} = useTheme();

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if(!mounted){
        return null;
    }

    return (
        <button aria-label="Choose page theme" onClick={() => setTheme(resolvedTheme === 'dark' ? "light" : "dark")}>
            {resolvedTheme === 'dark' ? (<BsSunFill size={18}/>) : (<BsMoonFill size={18}/>)}
        </button>
    )
}

export default ThemeButton;