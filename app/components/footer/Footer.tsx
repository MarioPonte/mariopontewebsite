import { format } from 'date-fns';
import Container from "../Container";
import { LogoMario } from '@/app/SVGFiles';
import { BsFacebook, BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';

export const Footer = () => {
    const year = new Date();
    return (
        <div className="sticky top-[100vh] text-center bg-indigo-200 dark:bg-slate-950 py-4">
            <div>
                <Container>
                    <div className="pt-6">
                        <LogoMario className='h-[88px] fill-indigo-950 dark:fill-white m-auto' />
                        <div className='flex justify-center gap-x-4 text-xl mt-6'>
                            <Link aria-label="Facebook" href="https://www.facebook.com/mario.ponte.79/" target='_Blank' className='text-indigo-950 dark:text-neutral-200 hover:text-indigo-800 dark:hover:text-white'><BsFacebook/></Link>
                            <Link aria-label="Linkedin" href="https://www.linkedin.com/in/m%C3%A1rio-ponte/" target='_Blank' className='text-indigo-950 dark:text-neutral-200 hover:text-indigo-800 dark:hover:text-white'><BsLinkedin/></Link>
                            <Link aria-label="Github" href="https://github.com/MarioPonte" target='_Blank' className='text-indigo-950 dark:text-neutral-200 hover:text-indigo-800 dark:hover:text-white'><BsGithub/></Link>
                            <Link aria-label="Whatsapp" href="https://wa.me/351964158481" target='_Blank' className='text-indigo-950 dark:text-neutral-200 hover:text-indigo-800 dark:hover:text-white'><BsWhatsapp/></Link>
                        </div>
                        <div className="text-xs mt-4 mb-8">
                            &copy; Todos os direitos reservados a Mário Ponte: Soluções Digitais - {format(year, "yyyy")}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}