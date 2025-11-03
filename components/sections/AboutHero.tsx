'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { aboutPageContent } from '@/lib/data/aboutPage'

export default function AboutHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Circular Gradient Background */}
      <div className="hero-gradient-circle"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-h1-hero md:text-h1-hero-md lg:text-h1-hero-lg font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {aboutPageContent.hero.title}
        </motion.h1>

        {/* Breadcrumb Navigation */}
        <motion.nav
          className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-600"
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
          <span className="text-gray-900 font-medium">About Me</span>
        </motion.nav>
      </div>
    </section>
  )
}

