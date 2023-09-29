import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mário Ponte',
  description: 'Web Developer personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-indigo-950 text-white">
        <Navbar/>
        <div className='pb-20 pt-28'>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
