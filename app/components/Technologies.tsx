import Container from "./Container";

export default function Technologies() {
    return (
        <section id="technologies">
            <Container>
                <div className="my-20 gap-10 md:gap-32">
                    <div className='text-4xl font-bold'>
                        Technologies
                    </div>
                    <p className="text-lg mt-8">
                        Here are the technologies I use to develop web solutions. This includes programming languages, frameworks, 
                        libraries, platforms and other tools that allow me to create efficient and innovative projects. 
                        Knowing the technologies I use can help you understand my skills as a web developer and how they 
                        can be applied to meet your needs.
                    </p>
                </div>
                <div className="my-20 flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32">
                    <div>
                        Coluna 1
                    </div>
                    <div>
                        Coluna 2
                    </div>
                </div>
            </Container>
        </section>
    )
}
