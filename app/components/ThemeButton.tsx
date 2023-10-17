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
        <button onClick={() => setTheme(resolvedTheme === 'dark' ? "light" : "dark")}>
            {resolvedTheme === 'dark' ? (<BsSunFill/>) : (<BsMoonFill/>)}
        </button>
    )
}

export default ThemeButton;
