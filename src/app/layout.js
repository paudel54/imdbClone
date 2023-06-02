// beacause of alias this import is started with @
import Header from '@/components/Header'
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from "@/app/Providers";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chitra',
  description: 'imdb Clone web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />
          {/*  Navbar*/}
          <Navbar />
          {/* SearchBox */}
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  )
}

// add anything that is common on layout section: some thing are not changed such element or componnet in layout. 