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
    <section className="py-20 md:py-32 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.h2
          ref={ref}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          What I Do
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We bring your ideas to life with visually stunning, responsive, and
          user-friendly websites. We proved best services for your business website.
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
                className="flex-shrink-0 w-80 md:w-96 bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="rounded-full w-16 h-16 mb-6 flex items-center justify-center bg-gray-700">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{service.name}</h3>
                <p className="text-gray-300 text-base mb-6 line-clamp-4">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold transition-colors group"
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
                  className="flex-shrink-0 w-80 md:w-96 bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <div className="rounded-full w-16 h-16 mb-6 flex items-center justify-center bg-gray-700">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{service.name}</h3>
                  <p className="text-gray-300 text-base mb-6 line-clamp-4">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold transition-colors group"
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

