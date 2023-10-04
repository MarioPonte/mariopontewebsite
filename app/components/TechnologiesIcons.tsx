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

    function techInfo(iconName: any){
        const iconToTech = {
            AiFillHtml5: "HTML5",
            DiCss3Full: "CSS3",
            BiLogoJavascript: "JavaScript",
            FaBootstrap: "Bootstrap",
            FaPhp: "PHP",
            DiNodejs: "NodeJS",
            BiLogoReact: "ReactJS",
            SiNextdotjs: "Next.js"
        };

        return iconToTech[iconName as keyof typeof iconToTech] || "Tecnologia não encontrada";
    }

    return (
        <div onClick={() => { onClick(); }} className="bg-slate-950 sm:text-2xl md:text-6xl text-2xl sm:m-1 md:m-2 m-1 p-4 rounded-xl border-[1px] border-slate-950 hover:border-white transition duration-500 cursor-pointer">
            <Icon/>
        </div>
    )
}

export default TechnologiesIcons;
