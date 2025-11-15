'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaPaintBrush, FaServer, FaDatabase, FaRobot, FaCloud, FaTools } from 'react-icons/fa'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaPaintBrush />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      bgGradient: 'card-gradient-pink'
    },
    {
      title: 'Backend Development',
      icon: <FaServer />,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Auth'],
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      bgGradient: 'card-gradient-cyan'
    },
    {
      title: 'Databases',
      icon: <FaDatabase />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
      gradient: 'from-blue-500 via-cyan-500 to-sky-500',
      bgGradient: 'card-gradient-blue'
    },
    {
      title: 'AI/ML',
      icon: <FaRobot />,
      skills: ['Stable Diffusion', 'OpenAI APIs', 'ML Fundamentals', 'AI Integration'],
      gradient: 'from-purple-500 via-violet-500 to-indigo-500',
      bgGradient: 'card-gradient-purple'
    },
    {
      title: 'Cloud & Tools',
      icon: <FaCloud />,
      skills: ['AWS', 'Google Cloud', 'Git/GitHub', 'Docker', 'Vercel'],
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      bgGradient: 'card-gradient-pink'
    },
    {
      title: 'Other Technologies',
      icon: <FaTools />,
      skills: ['Payment Gateways', 'Google Drive API', 'Video Processing', 'Agile'],
      gradient: 'from-indigo-500 via-blue-500 to-cyan-500',
      bgGradient: 'card-gradient-blue'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className="py-20 section-gradient relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 rounded-full"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className={`${category.bgGradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 card-hover relative group overflow-hidden`}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}></div>
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white text-3xl mb-6 mx-auto shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {category.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 group-hover:text-primary-600 transition-colors">
                    {category.title}
                  </h3>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 0.1 * index + 0.05 * skillIndex }}
                        whileHover={{ scale: 1.15, y: -2 }}
                        className="skill-tag text-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
