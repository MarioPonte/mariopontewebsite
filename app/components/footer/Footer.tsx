import { LogoMario } from "@/app/SVGFiles";
import Link from "next/link";
import Container from "../Container";

export const Footer = () => {
    return (
        <div className="text-center bg-indigo-800 py-4">
            <div className="">
                <Container>
                    <div className="">
                        <div className="text-xs">
                            &copy; Todos os direitos reservados a Mário Ponte: Soluções Digitais - 2023
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}