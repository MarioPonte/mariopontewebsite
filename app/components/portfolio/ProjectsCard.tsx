'use client';

import Image from "next/image";
import Link from "next/link";

interface ProjectsCardProps {
    title: string;
    image: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
    title,
    image,
}) => {

    return (
            <div className="relative overflow-hidden rounded-xl bg-cover bg-no-repeat bg-[50%]">
                <Image alt="Project Image" width={1000} height={750} src={image} className="w-full align-middle transition duration-300 ease-linear" />
                <Link aria-label={title} href="/portfolio">
                    <div
                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
                        <div className="flex h-full items-end justify-start">
                            <h5 className="m-6 text-lg font-bold text-white">
                                {title}
                            </h5>
                        </div>
                    </div>
                    <div>
                        <div
                            className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
                        </div>
                    </div>
                </Link>
            </div>
    )
}

export default ProjectsCard;
