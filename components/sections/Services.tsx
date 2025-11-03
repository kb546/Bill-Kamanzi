'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { servicesDetailed } from '@/lib/data/servicesDetailed'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Get first 3 services
  const featuredServices = servicesDetailed.slice(0, 3)

  return (
    <section id="services" className="py-20 md:py-28 lg:py-32 relative bg-gradient-to-br from-gray-50 via-white to-primary-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2x2 Grid Layout */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: UI/UX Design (top-left) */}
          <ServiceCard
            service={featuredServices[0]}
            index={0}
            isInView={isInView}
          />

          {/* Heading + CTA (top-right) */}
          <motion.div
            className="bg-transparent flex flex-col justify-center space-y-8 p-8 lg:p-10 min-h-[400px] lg:min-h-[450px]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-h2-section md:text-h2-section-md lg:text-h2-section-lg font-bold text-gray-900 leading-tight">
              Elevating Brands Through Design And Technology
            </h2>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              I bring your ideas to life with visually stunning, responsive, and user-friendly
              websites that drive results.
            </p>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 text-base w-fit"
            >
              See All Services
            </Link>
          </motion.div>

          {/* Card 2: Webflow Development (bottom-left) */}
          <ServiceCard
            service={featuredServices[1]}
            index={1}
            isInView={isInView}
          />

          {/* Card 3: Logo And Branding (bottom-right) */}
          <ServiceCard
            service={featuredServices[2]}
            index={2}
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  )
}

// Service Card Component
function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: any
  index: number
  isInView: boolean
}) {
  const Icon = service.icon

  return (
    <motion.div
      className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[400px] lg:min-h-[450px] border-2 border-gray-100 shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: '0 20px 40px -10px rgba(5, 150, 105, 0.15)',
        borderColor: 'rgb(16, 185, 129)',
      }}
    >
      <div>
        {/* Icon - Green gradient circle */}
        <motion.div 
          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-6 shadow-lg"
          whileHover={{ 
            scale: 1.1,
            rotate: [0, 5, -5, 0],
            transition: { duration: 0.4 }
          }}
        >
          <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
          {service.shortDescription}
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full text-white text-base font-bold hover:from-primary-700 hover:to-primary-600 transition-all duration-200 hover:scale-105"
        >
          Get Started
        </Link>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 rounded-full text-gray-700 text-base font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
        >
          Learn More
        </Link>
      </div>
      <p className="text-sm text-gray-500 mt-2">From $300</p>
    </motion.div>
  )
}

