'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { Project } from '@/lib/data/projectsReal'

interface ProjectHeroProps {
  project: Project
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative py-16 md:py-20 lg:py-28 xl:py-32 flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Circular Gradient Background (like service pages) */}
      <div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] min-[375px]:w-[350px] min-[375px]:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] xl:w-[600px] xl:h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl animate-pulse"
        style={{
          background: `radial-gradient(circle, ${project.gradientFrom} 0%, ${project.gradientTo} 50%, transparent 70%)`,
        }}
      />

      {/* Content - Centered */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Title */}
        <motion.h1
          className="text-3xl min-[375px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {project.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-base min-[375px]:text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {project.description}
        </motion.p>

        {/* Breadcrumb Navigation */}
        <motion.nav
          className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 text-sm min-[375px]:text-base md:text-lg text-gray-600 mt-6 md:mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="hover:text-primary-600 transition-colors"
          >
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link
            href="/projects"
            className="hover:text-primary-600 transition-colors"
          >
            Portfolio
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{project.title}</span>
        </motion.nav>
      </div>
    </section>
  )
}

