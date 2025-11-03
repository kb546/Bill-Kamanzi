'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { trackCTAClick } from '@/lib/utils/analytics'

interface SectionCTAProps {
  heading: string
  description: string
  ctaText?: string
  ctaHref?: string
  variant?: 'default' | 'light'
}

export default function SectionCTA({
  heading,
  description,
  ctaText = "Let's Work Together",
  ctaHref = '/contact',
  variant = 'default'
}: SectionCTAProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const bgClass = variant === 'light' ? 'bg-white' : 'bg-gray-50'

  return (
    <section ref={ref} className={`py-16 md:py-20 ${bgClass}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-h2-section md:text-h2-section-md lg:text-h2-section-lg font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {heading}
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href={ctaHref}
            onClick={() => trackCTAClick(ctaText, 'section_cta')}
            className="group inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <span>{ctaText}</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

