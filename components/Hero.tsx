'use client'

import { motion } from 'framer-motion'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { memo } from 'react'

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-600 via-purple-600 to-rose-600 overflow-hidden">
      {/* Simplified Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 float-animation"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 float-animation" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Title */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 text-glow">
              VANSH DEEPAK SINGH
            </h1>
            <div className="h-1 w-32 mx-auto bg-white/50 rounded-full"></div>
          </div>

          {/* Subtitle */}
          <div className="mb-8">
            <p className="text-2xl md:text-4xl font-semibold text-white/95 mb-2">
              Full Stack Developer
            </p>
            <p className="text-xl md:text-2xl text-white/80">
              AI/ML Enthusiast • Web Innovator
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/90 mb-12">
            <div className="flex items-center gap-2 glass-dark px-6 py-3 rounded-full hover:bg-white/20 transition-all">
              <HiMail className="text-2xl" />
              <a href="mailto:2004vanshsingh@gmail.com" className="hover:text-white font-medium">
                2004vanshsingh@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 glass-dark px-6 py-3 rounded-full hover:bg-white/20 transition-all">
              <HiLocationMarker className="text-2xl" />
              <span className="font-medium">Mumbai, Maharashtra</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('#contact')}
              className="group px-8 py-4 bg-white text-sky-600 rounded-full font-bold text-lg hover:bg-white/90 transform hover:scale-105 transition-all shadow-2xl btn-glow"
            >
              Get In Touch →
            </button>
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-4 glass-dark text-white rounded-full font-bold text-lg hover:bg-white/20 transform hover:scale-105 transition-all border-2 border-white/30"
            >
              View Projects ↓
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center glass-dark rounded-full text-white hover:bg-white hover:text-sky-600 transform hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center glass-dark rounded-full text-white hover:bg-white hover:text-sky-600 transform hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/80 text-sm font-medium">Scroll</span>
          <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(Hero)
