import { LogoMario } from "@/app/SVGFiles";
import Link from "next/link";
import Container from "../Container";

export const Navbar = () => {
    return (
        <div className="fixed w-full bg-indigo-950 z-10 shadow-sm">
            <div className="py-4">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <div>
                            <Link href="/"><LogoMario className="h-14 fill-white" /></Link>
                        </div>
                        <nav className="space-x-6 font-semibold">
                            <Link href="/">Home</Link>
                            <Link href="/">About</Link>
                        </nav>
                    </div>
                </Container>
            </div>
        </div>
    )
}