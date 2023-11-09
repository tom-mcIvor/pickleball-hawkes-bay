import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PickleBall HawkesBay',
  description: 'PickleBall HawkesBay is your gateway to the exciting world of pickleball in Hawke's Bay, New Zealand. Whether you're a beginner looking for fun and exercise or an experienced player seeking a vibrant community, we offer indoor and outdoor play, free initial visits, and a welcoming atmosphere for all.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <link rel="icon" href="../../../pickleball.png" sizes="any" />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
