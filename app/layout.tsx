import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'
import Providers from './providers/Providers'
import ClientOnly from './components/ClientOnly'

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
    <html lang="en" className='light' style={{colorScheme: 'light'}}>
      <body className="bg-indigo-50 text-indigo-950 dark:bg-indigo-950 dark:text-white">
        <Providers>
          <ClientOnly>
            <Navbar/>
            <div className='pb-20 pt-28'>
              {children}
            </div>
            <Footer/>
          </ClientOnly>
        </Providers>
      </body>
    </html>
  )
}
