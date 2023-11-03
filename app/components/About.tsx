import Container from "./Container";
import Image from "next/image";
import { FiFileText } from "react-icons/fi";
import { HomePageInfo } from "../types/page-info";
import { RichText } from "./rich-text";

type HomeSectionProps = {
    homeInfo: HomePageInfo
}

export default function About({ homeInfo }: HomeSectionProps){
    return (
        <section id="about" className="pt-20 h-auto flex justify-center items-center">
            <Container>
                <div className="my-20 flex flex-wrap-reverse justify-center items-center gap-10 md:gap-20">
                    <Image src="/images/about.jpg" alt="Picture of Mário Ponte" width={336} height={482} className="rounded-[20px]" />
                    <div>
                        <div className='sm:text-2xl md:text-4xl text-2xl font-bold'>
                            About me
                        </div>
                        <div className='sm:w-auto md:w-96 w-auto sm:text-base md:text-lg text-base mt-8 mb-6'>
                            <RichText content={homeInfo.about.raw} />
                        </div>
                        <a href="CV-MP.pdf" target="_blank" aria-label="Download CV" className="inline-flex items-center text-sm text-white bg-gradient-to-r from-indigo-600 to-indigo-800 font-semibold py-2 px-4 sm:rounded-lg md:rounded-xl rounded-lg">
                            <FiFileText className="mr-2" /> Download CV
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    )
}