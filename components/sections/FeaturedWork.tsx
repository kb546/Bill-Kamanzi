'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ProjectCard from '@/components/ui/ProjectCard'
import ProjectModal from '@/components/ui/ProjectModal'
import { getFeaturedProjects } from '@/lib/data/projects'
import { staggerContainer, fadeInUp } from '@/lib/utils/animation'

export default function FeaturedWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const featuredProjects = getFeaturedProjects()

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              Selected projects across marketing, data science, and web development
            </p>
          </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              custom={index}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-gray-600">
            Want to see more?{' '}
            <a
              href="/contact"
              className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-4 hover:underline-offset-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
            >
              Get in touch
            </a>{' '}
            to learn about all my projects
          </p>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal />
    </section>
  )
}


