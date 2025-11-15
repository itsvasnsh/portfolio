'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just open email client
    const mailtoLink = `mailto:2004vanshsingh@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary via-secondary to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white"
            >
              <h3 className="text-3xl font-bold mb-6">Let's Connect!</h3>
              <p className="text-xl mb-8 text-white/90">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-6">
                <motion.a
                  whileHover={{ scale: 1.05, x: 10 }}
                  href="mailto:2004vanshsingh@gmail.com"
                  className="flex items-center gap-4 text-lg hover:text-yellow-300 transition-colors"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-white/80">2004vanshsingh@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, x: 10 }}
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault()
                    alert('Please add your LinkedIn profile URL!')
                  }}
                  className="flex items-center gap-4 text-lg hover:text-yellow-300 transition-colors"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FaLinkedin className="text-2xl" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-white/80">Connect with me</p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, x: 10 }}
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault()
                    alert('Please add your GitHub profile URL!')
                  }}
                  className="flex items-center gap-4 text-lg hover:text-yellow-300 transition-colors"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FaGithub className="text-2xl" />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-white/80">Check out my code</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
