'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 relative animated-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 rounded-full"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Main Card */}
            <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl neon-border">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-700 leading-relaxed mb-6"
              >
                Hello! I'm <span className="font-bold gradient-text text-xl">Vansh Singh</span>, a passionate Full Stack Developer currently pursuing my Bachelor of Engineering in Electronics and Telecommunication at{' '}
                <span className="font-semibold text-primary-600">Lokmanya Tilak College of Engineering</span> (Expected 2026). 
                I specialize in building scalable web applications and AI-powered SaaS platforms.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg text-gray-700 leading-relaxed mb-6"
              >
                With a strong foundation in modern web technologies and artificial intelligence, I love creating solutions that solve real-world problems. 
                My recent work includes developing an <span className="font-semibold gradient-text">AI-powered text-to-image generator platform</span> that 
                integrates cutting-edge machine learning models with intuitive user experiences.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-lg text-gray-700 leading-relaxed mb-8"
              >
                I'm constantly learning and exploring new technologies, from cloud computing to machine learning, and I'm excited about 
                the endless possibilities at the intersection of web development and AI. Let's build something amazing together!
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-blue rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-4xl font-bold gradient-text mb-2">1000+</div>
                    <div className="text-gray-600 font-medium">Hours Coding</div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-purple rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-4xl font-bold gradient-text mb-2">6+</div>
                    <div className="text-gray-600 font-medium">Projects Completed</div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-pink rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-4xl font-bold gradient-text mb-2">6+</div>
                    <div className="text-gray-600 font-medium">Certifications</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
