'use client';

import Container from "./Container";
import { PiDatabaseThin } from 'react-icons/pi';
import { CgWebsite } from 'react-icons/cg';

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
                <div className="grid gap-8 lg:grid-cols-3">

                    <div className="bg-slate-950 p-8 rounded-xl w-full border-[1px] border-slate-950 hover:border-white transition duration-500">
                        <div className="text-6xl">
                            <PiDatabaseThin/>
                        </div>
                        <div>
                            <div className="font-bold text-2xl mb-1">
                                Creation of Management Systems
                            </div>
                            <div className="text-lg">
                                I can create a web application to manage your business data.
                            </div>
                        </div>
                    </div>
                    
                </div>

            </Container>
        </section>
    )
}
