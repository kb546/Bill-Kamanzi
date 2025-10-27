'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp } from 'lucide-react'
import type { Project } from '@/lib/data/projectsReal'

interface ProjectResultsProps {
  project: Project
}

export default function ProjectResults({ project }: ProjectResultsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Results</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Measurable impact and key achievements from this project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {project.results.map((result, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 mb-6 mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
                  {result.value}
                </div>
                <div className="text-xl font-semibold text-gray-700 mb-3">
                  {result.metric}
                </div>
                <div className="text-base text-gray-600">
                  {result.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links for Quackr */}
        {project.social && (
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">View Live Profiles</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {project.social.linkedin && (
                <a
                  href={project.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  LinkedIn
                </a>
              )}
              {project.social.tiktok && (
                <a
                  href={project.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  TikTok
                </a>
              )}
              {project.social.youtube && (
                <a
                  href={project.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
                >
                  YouTube
                </a>
              )}
              {project.social.twitter && (
                <a
                  href={project.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  X (Twitter)
                </a>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

