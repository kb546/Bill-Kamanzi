'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function ServicesPageHero() {
  return (
    <section className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Circular Gradient Background */}
      <div className="hero-gradient-circle"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Services
        </motion.h1>

        {/* Breadcrumb Navigation */}
        <motion.nav
          className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-primary-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Services</span>
        </motion.nav>
      </div>
    </section>
  )
}

