import { LogoMario } from "@/app/SVGFiles";
import Container from "./Container";

export default function Welcome() {
    return (
        <section id="welcome" className="h-screen">
            <Container>
                <div className="py-20 flex flex-wrap justify-center items-center md:gap-10">
                    <div>
                        <div className='sm:text-4xl md:text-8xl text-4xl font-bold'>
                            Mário Ponte
                        </div>
                        <div className='sm:text-xl md:text-4xl text-xl font-bold'>
                            Web Developer
                        </div>
                    </div>
                    <div>
                        <LogoMario className="sm:h-60 md:h-96 h-60 fill-white" />
                    </div>
                </div>
            </Container>
        </section>
    )
}
