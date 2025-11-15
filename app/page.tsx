'use client'

import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'

// Lazy load with no loading component for faster initial render
const About = dynamic(() => import('@/components/About'), { ssr: false })
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false })
const Certificates = dynamic(() => import('@/components/Certificates'), { ssr: false })
const Education = dynamic(() => import('@/components/Education'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Education />
      <Contact />
    </>
  )
}
