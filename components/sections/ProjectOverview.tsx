'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Wrench, Target } from 'lucide-react'
import type { Project } from '@/lib/data/projectsReal'
import ProjectMeta from './ProjectMeta'

interface ProjectOverviewProps {
  project: Project
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Layout: Meta Sidebar + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Left: Project Meta */}
          <div className="lg:col-span-1">
            <ProjectMeta project={project} />
          </div>

          {/* Right: Overview Content */}
          <motion.div
            className="lg:col-span-2 space-y-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            {/* About Section */}
            <div>
              <h2 className="text-h2-section md:text-h2-section-md lg:text-h2-section-lg font-bold text-gray-900 mb-6">About</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Our Client Section */}
            <div>
              <h2 className="text-h2-section md:text-h2-section-md lg:text-h2-section-lg font-bold text-gray-900 mb-6">Our Client</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          </motion.div>
        </div>

        {/* My Role */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-h2-section md:text-h2-section-md lg:text-h2-section-lg font-bold text-gray-900">What I Did</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.myRole.map((role, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{role}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenges & Solutions */}
        {project.challenges && project.solutions && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Challenges */}
            <motion.div
              className="p-8 rounded-3xl bg-gray-50"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-h3-subsection md:text-h3-subsection-md font-bold text-gray-900">Challenges</h3>
              </div>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-500 flex-shrink-0 mt-1">•</span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div
              className="p-8 rounded-3xl bg-gradient-to-br from-primary-50 to-primary-100"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-h3-subsection md:text-h3-subsection-md font-bold text-gray-900">Solutions</h3>
              </div>
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-h3-subsection md:text-h3-subsection-md font-bold text-gray-900 mb-6">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 rounded-full bg-gray-100 text-gray-700 font-medium text-sm hover:bg-gray-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

