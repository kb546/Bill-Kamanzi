'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { servicesDetailed } from '@/lib/data/servicesDetailed'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

export default function WhatIDo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.h2
          ref={ref}
          className="text-h2-section md:text-h2-section-md lg:text-h2-section-lg font-bold text-center mb-6 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          What I Do
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I bring your ideas to life with visually stunning, responsive, and
          user-friendly websites that deliver real results for your business.
        </motion.p>
      </div>

      {/* Infinite Scrolling Cards Container */}
      <div className="relative">
        <div
          className={`flex gap-6 ${
            prefersReducedMotion ? '' : 'animate-infinite-scroll'
          }`}
          style={{
            width: prefersReducedMotion ? 'auto' : 'max-content',
          }}
        >
          {/* First set of cards */}
          {servicesDetailed.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={`first-${service.id}`}
                className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="rounded-full w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-600">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 text-base mb-6 line-clamp-4">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
                >
                  View Details
                  <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </motion.div>
            )
          })}

          {/* Duplicate set for seamless loop */}
          {!prefersReducedMotion &&
            servicesDetailed.map((service) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={`second-${service.id}`}
                  className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <div className="rounded-full w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-600">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">{service.name}</h3>
                  <p className="text-gray-600 text-base mb-6 line-clamp-4">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
                  >
                    View Details
                    <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </motion.div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

