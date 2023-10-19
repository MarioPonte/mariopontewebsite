import TechnologieBadge from "@/app/components/technologies/TechnologieBadge";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { TbArrowNarrowLeft } from "react-icons/tb";

export default function Project() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div>
                <div className='text-4xl font-bold'>
                    Avatar Landing Page
                </div>
                <p className="text-lg mt-8">
                    Simple landing page with the theme of the movie Avatar: The Way of Water to practice my HTML5 and CSS3 skills.
                </p>
            </div>
            <div className="mt-8">
                <Image alt="Project Image" width={1000} height={750} src="https://encurtador.com.br/boALR" className="w-full rounded-2xl" />
            </div>
            <div className="flex">
                <TechnologieBadge name="HTML5" />
                <TechnologieBadge name="CSS3" />
            </div>
            <div className="mt-8 space-x-10 flex items-center justify-center text-center">
                <Link aria-label="See all the projects" href="https://github.com/MarioPonte/AvatarTheWayOfWater" target="_blank">
                    <div className="flex items-center text-indigo-950 dark:text-neutral-200 hover:text-indigo-800 dark:hover:text-white">
                        <BsGithub className="text-2xl mr-2" />
                        <span>Repository</span>
                    </div>
                </Link>
                <Link aria-label="See all the projects" href="https://marioponte.github.io/AvatarTheWayOfWater/" target="_blank">
                    <div className="flex items-center text-indigo-950 dark:text-neutral-200 hover:text-indigo-800 dark:hover:text-white">
                        <BsGlobe className="text-2xl mr-2" />
                        <span>View Project</span>
                    </div>
                </Link>
            </div>
            <div className="mt-8 space-x-10 flex items-center justify-center text-center">
                <Link aria-label="See all the projects" href="/">
                    <div className="flex items-center text-indigo-950 dark:text-neutral-200 hover:text-indigo-800 dark:hover:text-white">
                        <TbArrowNarrowLeft className="text-2xl mr-2" />
                        <span>Back to Home</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
