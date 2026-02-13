'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaRobot, FaCode, FaCertificate, FaAws, FaReact, FaDocker } from 'react-icons/fa'
import { SiMongodb, SiKubernetes } from 'react-icons/si'

const Certificates = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showMore, setShowMore] = useState(false)

  // Initial certificates (shown by default)
  const initialCertificates = [
    {
      title: 'AI for Beginners',
      organization: 'HP LIFE Online Learning',
      date: 'January 2025',
      icon: <FaRobot />,
      description: 'Comprehensive course covering AI fundamentals, key concepts and applications, data importance in AI, business use cases, and ethical implications of artificial intelligence.',
      color: 'from-purple-500 to-pink-500',
      skills: ['AI Fundamentals', 'Machine Learning', 'Ethics', 'Business Applications'],
      link: 'https://drive.google.com/file/d/1f4SHMGiufWldWGFMrH6215fZf7TgvVvJ/view?usp=drive_link'
    },
    {
      title: '0-100 Full Stack Web Development',
      organization: '100xDevs by Harkirat Singh',
      date: 'January 2025',
      icon: <FaCode />,
      description: 'Intensive full-stack development bootcamp covering modern web technologies, frontend and backend development, databases, deployment strategies, and industry best practices.',
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'Node.js', 'MongoDB', 'DevOps', 'System Design'],
      link: 'https://drive.google.com/file/d/1lzVNn1m9D363zykpBVr_yjE4IekS8Uv7/view?usp=drive_link'
    },
  ]

  // Additional certificates (hidden initially)
  /*const additionalCertificates = [
    {
      title: 'AWS Certified Developer Associate',
      organization: 'Amazon Web Services',
      date: 'December 2024',
      icon: <FaAws />,
      description: 'Professional certification demonstrating expertise in developing and maintaining AWS-based applications, including deployment, security, and optimization.',
      color: 'from-orange-500 to-red-500',
      skills: ['AWS Lambda', 'S3', 'EC2', 'DynamoDB', 'CloudFormation'],
      link: 'https://drive.google.com/file/d/YOUR_CERTIFICATE_3_LINK/view'
    },
    {
      title: 'React Advanced Patterns',
      organization: 'Udemy',
      date: 'November 2024',
      icon: <FaReact />,
      description: 'Advanced React development course covering hooks, context API, performance optimization, custom hooks, and modern React patterns.',
      color: 'from-cyan-500 to-blue-500',
      skills: ['React Hooks', 'Performance', 'Context API', 'Custom Hooks'],
      link: 'https://drive.google.com/file/d/YOUR_CERTIFICATE_4_LINK/view'
    },
    {
      title: 'MongoDB Developer Certification',
      organization: 'MongoDB University',
      date: 'October 2024',
      icon: <SiMongodb />,
      description: 'Comprehensive MongoDB certification covering database design, aggregation framework, indexing strategies, and performance optimization.',
      color: 'from-green-500 to-emerald-500',
      skills: ['Database Design', 'Aggregation', 'Indexing', 'Sharding'],
      link: 'https://drive.google.com/file/d/YOUR_CERTIFICATE_5_LINK/view'
    },
    {
      title: 'Docker & Kubernetes Mastery',
      organization: 'Linux Academy',
      date: 'September 2024',
      icon: <FaDocker />,
      description: 'Container orchestration and deployment certification covering Docker containerization, Kubernetes cluster management, and CI/CD pipelines.',
      color: 'from-blue-600 to-indigo-600',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'Container Orchestration'],
      link: 'https://drive.google.com/file/d/YOUR_CERTIFICATE_6_LINK/view'
    },
  ]*/

  const allCertificates = showMore 
    ? [...initialCertificates, /*...additionalCertificates*/] 
    : initialCertificates

  return (
    <section id="certificates" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allCertificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5, type: "spring" }}
                  className={`w-20 h-20 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-white text-3xl mb-6 mx-auto`}
                >
                  {cert.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">{cert.title}</h3>
                <p className="text-primary font-semibold text-center mb-2">{cert.organization}</p>
                <p className="text-gray-600 text-sm text-center mb-4">{cert.date}</p>
                
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center px-6 py-3 bg-gradient-to-r ${cert.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                >
                  View Certificate
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMore(!showMore)}
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {showMore ? '← View Less Certificates' : 'View More Certificates →'}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
