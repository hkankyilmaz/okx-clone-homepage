import './globals.css'
import { Inter } from 'next/font/google'
import Header from './_components/Header/Index'
import Footer from './_components/Footer.js/Index'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'otx-clone',
  description: 'This web app prepared by @hkankyilmaz for hiring case',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
