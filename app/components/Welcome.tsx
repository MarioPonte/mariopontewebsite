import { LogoMario } from "@/app/SVGFiles";
import Container from "./Container";

export default function Welcome() {
    return (
        <section>
            <Container>
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-32">
                    <div>
                        <div className='text-8xl font-bold'>
                            Mário Ponte
                        </div>
                        <div className='text-4xl font-bold'>
                            Web Developer
                        </div>
                    </div>
                    <div>
                        <LogoMario className="h-96 fill-white" />
                    </div>
                </div>
            </Container>
        </section>
    )
}
