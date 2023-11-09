'use client';

import { BsGithub } from 'react-icons/bs';
import LinkBtn from "../inputs/LinkBtn";
import { FaFolderOpen } from "react-icons/fa";

export const ProjectsSecLinks = () => {
    return (
        <div className="mt-8 gap-8 flex flex-wrap items-center justify-center text-center">
            <LinkBtn name="See all the projects" href="/projects" icon={FaFolderOpen} />
            <LinkBtn name="My Repositories" href="https://github.com/MarioPonte?tab=repositories" target="_blank" icon={BsGithub} />
        </div>
    )
}