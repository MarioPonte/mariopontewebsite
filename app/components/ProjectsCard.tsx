'use client';

import Link from "next/link";

export default function ProjectsCard() {

    return (
            <div className="relative overflow-hidden rounded-xl bg-cover bg-no-repeat bg-[50%]">
                <img src="https://cdn.discordapp.com/attachments/421394139008073729/1159506078795567125/avatar.png?ex=6531452f&is=651ed02f&hm=1598d115723d2d3bf1b0527d63767ee1c151816d69a063e29e233db1ace2a218&"
                    className="w-full align-middle transition duration-300 ease-linear" />
                <Link aria-label="Project" href="#!">
                    <div
                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
                        <div className="flex h-full items-end justify-start">
                            <h5 className="m-6 text-lg font-bold text-white">
                                Avatar Landing Page
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
