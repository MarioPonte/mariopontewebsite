import { LogoMario } from "@/app/SVGFiles";
import Link from "next/link";
import Container from "../Container";

export const Navbar = () => {
    return (
        <div className="fixed w-full dark:bg-zinc-900 z-10 shadow-sm">
            <div className="py-4 border-b-[1px] dark:border-zinc-600">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <div>
                            <Link href="/"><LogoMario className="h-14 fill-white" /></Link>
                        </div>
                        <div>
                            link
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}