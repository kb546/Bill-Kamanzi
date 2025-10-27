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
    <section id="services" className="py-20 md:py-32 relative bg-gray-900">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Elevating Brands Through Design And Technology
            </h2>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              We bring your ideas to life with visually stunning, responsive, and user-friendly
              websites. We proved best services for your business website.
            </p>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 text-base w-fit"
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
      className="bg-gray-800 rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[400px] lg:min-h-[450px]"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
    >
      <div>
        {/* Icon - Gray circle */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-700 flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-6">
          {service.shortDescription}
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full text-white text-base font-bold hover:from-primary-700 hover:to-secondary-600 transition-all duration-200 hover:scale-105"
        >
          Get Started
        </Link>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-600 rounded-full text-white text-base font-medium hover:border-gray-500 hover:bg-gray-700 transition-all duration-300"
        >
          Learn More
        </Link>
      </div>
      <p className="text-sm text-gray-500 mt-2">From $300</p>
    </motion.div>
  )
}

