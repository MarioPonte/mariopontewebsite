'use client';

import Container from "../Container";
import ContactForm from "./ContactForm";
import ContactsCard from "./ContactsCard";

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
                <div className="grid gap-10 sm:gap-10 md:gap-40 lg:grid-cols-2 items-center">
                    <div>
                        <ContactForm/>
                    </div>
                    <ContactsCard/>
                </div>
            </Container>
        </section>
    )
}
