import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Vansh Singh - Full Stack Developer',
  description: 'Portfolio of Vansh Deepak Singh - Full Stack Developer specializing in AI/ML and modern web technologies',
  keywords: 'Full Stack Developer, AI, Machine Learning, React, Next.js, Node.js, Portfolio',
  authors: [{ name: 'Vansh Singh' }],
  openGraph: {
    title: 'Vansh Singh - Full Stack Developer',
    description: 'Full Stack Developer specializing in AI/ML and modern web technologies',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
