'use client';

import Container from "../Container";
import SectionInfo from "../SectionInfo";
import ContactForm from "./ContactForm";
import ContactsCard from "./ContactsCard";

export default function Contacts() {
    return (
        <section id="contacts" className="pt-20 h-auto">
            <Container>
                <SectionInfo
                    title="Contacts"
                    description="Contact me to discuss your projects, ideas or questions. I&apos;m always happy to help and answer any questions you may have."
                />
                <div className="grid gap-10 sm:gap-10 md:gap-40 lg:grid-cols-2 items-center">
                    <ContactForm/>
                    <ContactsCard/>
                </div>
            </Container>
        </section>
    )
}