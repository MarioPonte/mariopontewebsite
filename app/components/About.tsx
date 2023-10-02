import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { FiFileText } from "react-icons/fi";

export default function About() {
    return (
        <section id="about" className="pt-20 h-auto flex justify-center items-center">
            <Container>
                <div className="my-20 flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32">
                    <div>
                        <Image src="/images/about.jpg" alt="Picture of Mário Ponte" width={336} height={482} className="rounded-[20px] sm:w-auto md:w-80 w-auto" />
                    </div>
                    <div>
                        <div className='text-4xl font-bold'>
                            About me
                        </div>
                        <div className='sm:w-auto md:w-96 w-auto text-lg mt-8 mb-6'>
                            <p>
                                My name is Mário Ponte, I have more than 3 years of programming experience and along the way I have
                                programmed in <strong>C</strong>, <strong>JAVA</strong>, <strong>PHP</strong>, <strong>JavaScript</strong> and <strong>Python</strong>, but
                                at the moment I am only focused on <strong>Web Development</strong>.
                            </p>
                            <p>
                                I&apos;m passionate about everything that involves computer engineering and I&apos;m always interested in
                                learning new technologies.
                            </p>
                        </div>

                        <Link href="CV-MP.pdf" target="_blank" className="inline-flex items-center text-sm bg-indigo-800 font-semibold py-2 px-4 rounded-xl">
                            <FiFileText className="mr-2" /> Download CV
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}
