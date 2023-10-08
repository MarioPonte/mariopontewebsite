'use client';

import Container from "./Container";
import ServicesCard from "./ServicesCard";

export default function Services() {

    return (
        <section id="services" className="pt-20 h-auto">
            <Container>
                <div className="my-20 gap-10 md:gap-32">
                    <div className='text-4xl font-bold'>
                        Services
                    </div>
                    <p className="text-lg mt-8">
                        Get to know some of my services and find out what I can do for you!
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-4">
                    <ServicesCard title="Creation of Management Systems" description="I can create a web application to manage your business data."/>
                    <ServicesCard title="Creation of Websites" description="I can create a website for your brand/company with all the features you want."/>
                    <ServicesCard title="E-Commerce" description="I can create an online store for your business with all the tools you need."/>
                    <ServicesCard title="Design" description="It's not my main focus, but I do have experience in creating graphic arts. I can create logos, banners, flyers, etc."/>
                </div>

            </Container>
        </section>
    )
}
