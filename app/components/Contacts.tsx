'use client';

import Container from "./Container";

export default function Contacts() {

    return (
        <section id="contacts" className="pt-20 h-auto">
            <Container>
                <div className="my-20 gap-10 md:gap-32">
                    <div className='text-4xl font-bold'>
                        Contacts
                    </div>
                    <p className="text-lg mt-8">
                        Contact me to discuss your projects, ideas or questions. I&apos;m always happy to help and answer any questions you may have.
                    </p>
                </div>
                <div className="grid gap-40 lg:grid-cols-2">

                    <input type="text" name="name" id="name" placeholder="Name" 
                        className="
                            peer
                            w-full
                            p-4
                            bg-indigo-950
                            border-2
                            rounded-xl
                            outline-none
                            transition
                            placeholder-neutral-200
                        " 
                    />

                </div>

            </Container>
        </section>
    )
}
