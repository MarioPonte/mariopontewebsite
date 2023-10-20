'use client';

import { IconType } from "react-icons";

interface TechnologiesIconsProps {
    icon: IconType;
    onClick: () => void;
}

const TechnologiesIcons: React.FC<TechnologiesIconsProps> = ({
    icon: Icon,
    onClick,
}) => {

    return (
        <div onClick={() => { onClick(); }} className="bg-indigo-100 dark:bg-slate-950 sm:text-2xl md:text-6xl text-2xl sm:m-1 md:m-2 m-1 p-4 rounded-xl border-[1px] border-indigo-100 dark:border-slate-950 hover:border-indigo-950 dark:hover:border-white transition duration-500 cursor-pointer">
            <Icon/>
        </div>
    )
}

export default TechnologiesIcons;
