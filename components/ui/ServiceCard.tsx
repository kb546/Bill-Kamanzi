'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  name: string
  shortDescription: string
  icon: React.ElementType
  gradientFrom: string
  gradientTo: string
  slug: string
  delay?: number
}

export default function ServiceCard({
  name,
  shortDescription,
  icon: Icon,
  gradientFrom,
  gradientTo,
  slug,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      className="glass-card group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-6 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
        style={{
          background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
        }}
      >
        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </div>

      {/* Service Name */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
        {name}
      </h3>

      {/* Description */}
      <p className="text-base text-gray-600 mb-6 leading-relaxed">
        {shortDescription}
      </p>

      {/* CTA Button */}
      <Link
        href={`/services/${slug}`}
        className="inline-flex items-center text-base font-semibold group-hover:gap-2 transition-all duration-300"
        style={{ color: gradientFrom }}
      >
        Learn More
        <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  )
}

