'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ProjectCTAProps {
  gradientFrom: string
  gradientTo: string
}

export default function ProjectCTA({ gradientFrom, gradientTo }: ProjectCTAProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Interested in Similar Results?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's collaborate on your next project and create something remarkable together
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 group"
          >
            Let's Work Together
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            View More Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

