'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { servicesDetailed } from '@/lib/data/servicesDetailed'

export default function AllServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="all-services" className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-h2-section md:text-h2-section-md lg:text-h2-section-lg font-bold text-gray-900 mb-6">
            Awesome Services For Your Next Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            I bring your ideas to life with visually stunning, responsive, and user-friendly websites. 
            I deliver tailored solutions that help your business succeed online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesDetailed.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 text-left group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Icon - Green gradient circle */}
                <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>

                {/* Service Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* CTA Button - Green gradient style */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full text-white font-medium hover:from-primary-700 hover:to-primary-600 transition-all duration-300 hover:scale-105"
                >
                  View Details
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

