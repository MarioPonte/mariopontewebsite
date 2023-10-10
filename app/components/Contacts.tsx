'use client';

import Container from "./Container";
import Input from "./inputs/Input";
import Textarea from "./inputs/Textarea";

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

                    <div>
                        <Input id="name" placeholder="Name"/>
                        <Input id="email" placeholder="Email"/>
                        <Textarea id="message" placeholder="Message"/>
                        <button className="w-full my-2 p-4 bg-indigo-800 border-2 border-indigo-900 rounded-xl text-xl font-semibold">
                            Send
                        </button>
                    </div>

                </div>

            </Container>
        </section>
    )
}
