'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaSchool } from 'react-icons/fa'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: 'Bachelor of Engineering (BE)',
      field: 'Electronics and Telecommunication',
      institution: 'Lokmanya Tilak College of Engineering, Mumbai',
      year: 'Expected 2026',
      icon: <FaGraduationCap />,
      color: 'from-blue-500 to-indigo-500',
      status: 'In Progress'
    },
    {
      degree: 'Secondary Education',
      field: 'High School',
      institution: 'Saket Vidya Mandir, Kalyan',
      year: 'Completed',
      icon: <FaSchool />,
      color: 'from-green-500 to-teal-500',
      status: 'Completed'
    },
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-primary"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: 0.4 + index * 0.2, duration: 0.5, type: "spring" }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center text-white text-2xl flex-shrink-0`}
                  >
                    {edu.icon}
                  </motion.div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                      <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0 ${
                        edu.status === 'In Progress' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-lg text-gray-700 font-semibold mb-1">{edu.field}</p>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-600 font-medium">{edu.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
