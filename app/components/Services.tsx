'use client';

import Container from "./Container";
import SectionInfo from "./SectionInfo";
import ServicesCard from "./ServicesCard";
import { PiDatabaseThin, PiShoppingCartThin, PiPaintBrushThin, PiLaptopThin } from 'react-icons/pi';

export default function Services() {
    return (
        <section id="services" className="pt-20 h-auto">
            <Container>
                <SectionInfo
                    title="Services"
                    description="Get to know some of my services and find out what I can do for you!"
                />
                <div className="grid gap-8 lg:grid-cols-4">
                    <ServicesCard title="Creation of Management Systems" description="I can create a web application to manage your business data." icon={PiDatabaseThin} />
                    <ServicesCard title="Creation of Websites" description="I can create a website for your brand/company with all the features you want." icon={PiLaptopThin} />
                    <ServicesCard title="E-Commerce" description="I can create an online store for your business with all the tools you need." icon={PiShoppingCartThin} />
                    <ServicesCard title="Design" description="It's not my main focus, but I do have experience in creating graphic arts. I can create logos, banners, flyers, etc." icon={PiPaintBrushThin} />
                </div>
            </Container>
        </section>
    )
}
