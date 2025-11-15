'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showMore, setShowMore] = useState(false)

  // Initial projects (shown by default)
  const initialProjects = [
    {
      title: '🎨 AI Text-to-Image Generator',
      subtitle: 'Full Stack Developer | Solo Project | 2024-2025',
      tag: 'SaaS Platform',
      description: 'A production-ready SaaS platform that transforms text prompts into high-quality images using advanced AI models, complete with cloud storage integration and monetization features.',
      features: [
        '🚀 Developed full-stack architecture handling 100+ concurrent users with React.js frontend and Node.js/Express backend',
        '🤖 Integrated Stable Diffusion and OpenAI DALL-E APIs with custom prompt engineering for diverse image generation',
        '🔐 Implemented secure JWT-based authentication with role-based access control and encrypted data storage',
        '💳 Built credit-based monetization system with Stripe/Razorpay payment gateway integration',
        '☁️ Integrated Google Drive API for automatic image saving and cloud organization',
        '🎥 Created video recording feature capturing real-time generation process with metadata storage',
        '⚡ Optimized image processing pipeline reducing generation time by 40% through efficient caching',
        '📱 Designed responsive UI/UX with real-time progress indicators and gallery features',
        '🛠️ Deployed on cloud infrastructure with automated CI/CD pipeline and monitoring systems',
      ],
      technologies: [
        'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stable Diffusion API',
        'OpenAI API', 'Google Drive API', 'Stripe API', 'JWT', 'Tailwind CSS',
        'AWS S3', 'Docker'
      ],
      videoLink: 'https://drive.google.com/file/d/1kwVKcKvi2flRWhUAi5pX9r_8PuKkH5Tn/view?usp=drive_link',
      githubLink: '#', // Add your GitHub repo link
      liveLink: '#', // Add your live demo link
      gradient: 'from-blue-50 via-indigo-50 to-purple-50'
    },
    {
      title: '🛒 E-Commerce Platform',
      subtitle: 'Full Stack Developer | Team Project | 2024',
      tag: 'Web Application',
      description: 'A comprehensive e-commerce platform with advanced features including real-time inventory management, payment processing, and AI-powered product recommendations.',
      features: [
        '🏪 Built scalable e-commerce platform serving 5000+ daily active users',
        '💰 Integrated multiple payment gateways (Stripe, PayPal, Razorpay) with secure checkout',
        '🤖 Implemented AI-based product recommendation system increasing sales by 35%',
        '📊 Created admin dashboard with real-time analytics and inventory management',
        '🔍 Developed advanced search with filters, sorting, and autocomplete functionality',
        '📱 Optimized for mobile-first experience with PWA capabilities',
        '🚚 Integrated shipping APIs for real-time tracking and delivery updates',
        '⭐ Built review and rating system with sentiment analysis',
      ],
      technologies: [
        'Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe API',
        'Redis', 'AWS', 'Docker', 'Tailwind CSS', 'NextAuth.js'
      ],
      videoLink: '#', // Add your demo video link
      githubLink: '#', // Add your GitHub repo link
      liveLink: '#', // Add your live demo link
      gradient: 'from-emerald-50 via-green-50 to-teal-50'
    },
  ]
    /*{
      title: '📱 Social Media Analytics Dashboard',
      subtitle: 'Frontend Developer | Freelance | 2024',
      tag: 'Analytics Platform',
      description: 'A comprehensive analytics dashboard for social media managers to track engagement, analyze trends, and generate insights across multiple platforms.',
      features: [
        '📊 Developed interactive dashboard with real-time data visualization using Chart.js and D3.js',
        '🔗 Integrated APIs from Twitter, Facebook, Instagram, and LinkedIn',
        '📈 Created custom analytics engine processing 1M+ data points daily',
        '🎯 Built AI-powered trend detection and sentiment analysis features',
        '📅 Implemented automated report generation with PDF export functionality',
        '⚡ Optimized performance with data caching reducing load time by 60%',
        '🎨 Designed intuitive UI/UX with customizable widgets and themes',
      ],
      technologies: [
        'React.js', 'TypeScript', 'Node.js', 'MongoDB', 'Chart.js',
        'D3.js', 'Redis', 'Material-UI', 'REST APIs', 'WebSocket'
      ],
      videoLink: '#', // Add your demo video link
      githubLink: '#', // Add your GitHub repo link
      liveLink: '#', // Add your live demo link
      gradient: 'from-pink-50 via-rose-50 to-red-50'
    },
  ]

  // Additional projects (hidden initially)
  const additionalProjects = [
    {
      title: '🎓 Learning Management System',
      subtitle: 'Full Stack Developer | Academic Project | 2023',
      tag: 'Educational Platform',
      description: 'A comprehensive LMS platform for online education with video streaming, assignments, quizzes, and real-time collaboration features.',
      features: [
        '📚 Built complete LMS with course management, video lectures, and interactive quizzes',
        '🎥 Integrated video streaming with HLS protocol for adaptive bitrate streaming',
        '✅ Created assignment submission and grading system with plagiarism detection',
        '💬 Implemented real-time chat and discussion forums using WebSocket',
        '📊 Developed progress tracking and analytics for students and instructors',
        '🔐 Built role-based access control for students, teachers, and admins',
        '📱 Designed mobile-responsive interface with offline mode capabilities',
      ],
      technologies: [
        'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io',
        'FFmpeg', 'AWS S3', 'JWT', 'Redux', 'Material-UI'
      ],
      videoLink: '#',
      githubLink: '#',
      liveLink: '#',
      gradient: 'from-violet-50 via-purple-50 to-fuchsia-50'
    },
    {
      title: '🏥 Healthcare Appointment System',
      subtitle: 'Full Stack Developer | Startup Project | 2023',
      tag: 'Healthcare Tech',
      description: 'A digital healthcare platform connecting patients with doctors, featuring appointment booking, telemedicine, and electronic health records management.',
      features: [
        '🩺 Developed appointment booking system with real-time doctor availability',
        '📞 Integrated video calling for telemedicine consultations using WebRTC',
        '📋 Built secure EHR system with HIPAA-compliant data encryption',
        '💊 Created prescription management with pharmacy integration',
        '📅 Implemented automated reminders via SMS and email notifications',
        '💳 Integrated payment gateway for consultation fees and insurance claims',
        '📊 Built analytics dashboard for doctors to track patient history',
      ],
      technologies: [
        'Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'WebRTC',
        'Twilio', 'Stripe', 'AWS', 'Docker', 'TailwindCSS'
      ],
      videoLink: '#',
      githubLink: '#',
      liveLink: '#',
      gradient: 'from-cyan-50 via-sky-50 to-blue-50'
    },
    {
      title: '🎮 Real-Time Multiplayer Game',
      subtitle: 'Game Developer | Personal Project | 2023',
      tag: 'Gaming Application',
      description: 'A browser-based multiplayer game with real-time synchronization, matchmaking, and leaderboard features.',
      features: [
        '🎯 Built real-time multiplayer game engine using WebSocket and Socket.io',
        '🏆 Implemented matchmaking algorithm and ELO-based ranking system',
        '🎨 Created engaging game graphics using Canvas API and WebGL',
        '💾 Designed efficient state synchronization for low-latency gameplay',
        '👥 Built lobby system with chat, friend lists, and invitations',
        '📊 Developed leaderboards and player statistics tracking',
        '🔐 Implemented anti-cheat measures and secure gameplay validation',
      ],
      technologies: [
        'JavaScript', 'Node.js', 'Socket.io', 'Canvas API', 'WebGL',
        'Redis', 'MongoDB', 'Express.js', 'Webpack'
      ],
      videoLink: '#',
      githubLink: '#',
      liveLink: '#',
      gradient: 'from-orange-50 via-amber-50 to-yellow-50'
    },
  ]*/

  const allProjects = showMore 
    ? [...initialProjects, /*...additionalProjects*/] 
    : initialProjects

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>

          <div className="space-y-12">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className={`bg-gradient-to-br ${project.gradient} rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                      className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                      className="text-gray-600 italic"
                    >
                      {project.subtitle}
                    </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="mt-4 md:mt-0"
                  >
                    <span className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold whitespace-nowrap">
                      {project.tag}
                    </span>
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className="text-lg text-gray-700 mb-6 leading-relaxed"
                >
                  {project.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features & Achievements:</h4>
                  <ul className="space-y-3 mb-8">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.8 + index * 0.1 + featureIndex * 0.05, duration: 0.5 }}
                        className="flex items-start text-gray-700"
                      >
                        <span className="mr-2 mt-1">•</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                  className="border-t-2 border-gray-200 pt-6"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 1.0 + index * 0.1 + techIndex * 0.03, duration: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 bg-white text-primary rounded-lg font-medium border-2 border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 shadow-md"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Project Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.videoLink}
                    target={project.videoLink !== '#' ? '_blank' : undefined}
                    rel={project.videoLink !== '#' ? 'noopener noreferrer' : undefined}
                    onClick={project.videoLink === '#' ? (e) => {
                      e.preventDefault()
                      alert('Please upload your project demo video to Google Drive and add the link!')
                    } : undefined}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
                  >
                    <FaPlay /> Watch Demo Video
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target={project.githubLink !== '#' ? '_blank' : undefined}
                    rel={project.githubLink !== '#' ? 'noopener noreferrer' : undefined}
                    onClick={project.githubLink === '#' ? (e) => {
                      e.preventDefault()
                      alert('Please add your GitHub repository link here!')
                    } : undefined}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <FaGithub /> View Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target={project.liveLink !== '#' ? '_blank' : undefined}
                    rel={project.liveLink !== '#' ? 'noopener noreferrer' : undefined}
                    onClick={project.liveLink === '#' ? (e) => {
                      e.preventDefault()
                      alert('Please add your live project link here!')
                    } : undefined}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-accent border-2 border-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </motion.div>
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
              {showMore ? '← View Less Projects' : 'View More Projects →'}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
