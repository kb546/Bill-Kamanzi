'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { GraduationCap, Award, MapPin } from 'lucide-react'
import { educationData, institutionBrandColors } from '@/lib/data/education'

export default function EducationCertifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-h2-section md:text-h2-section-md lg:text-h2-section-lg font-bold text-gray-900 mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development in computer science, data science, and analytics
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {educationData.map((item, index) => {
            const Icon = item.type === 'degree' ? GraduationCap : Award
            
            return (
              <motion.div
                key={item.id}
                className="glass-card group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                {/* Icon or Logo */}
                {item.logo ? (
                  <div 
                    className="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 mb-6 rounded-xl p-3 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      backgroundColor: institutionBrandColors[item.id] || '#FFFFFF',
                      border: item.id === 'cert-1' ? 'none' : undefined,
                    }}
                  >
                    <Image
                      src={item.logo}
                      alt={`${item.institution} logo`}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 mb-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 md:w-12 md:h-12" />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Institution */}
                <p className="text-base text-gray-700 font-medium mb-2">
                  {item.institution}
                </p>

                {/* Year */}
                <p className="text-sm text-gray-500 mb-2">
                  {item.year}
                </p>

                {/* Location (for degree) */}
                {item.location && (
                  <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </p>
                )}

                {/* GPA and Minor (for degree) */}
                {item.gpa && (
                  <div className="flex gap-4 mb-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">GPA:</span> {item.gpa}
                    </p>
                    {item.minor && (
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Minor:</span> {item.minor}
                      </p>
                    )}
                  </div>
                )}

                {/* Description */}
                {item.description && (
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {item.description}
                  </p>
                )}

                {/* Modules/Details (for certifications) */}
                {item.modules && item.modules.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-700 mb-2">
                      {item.id === 'cert-1' ? 'Key Modules:' : 'Key Details:'}
                    </p>
                    <ul className="space-y-1">
                      {item.modules.map((module, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-primary-500 mt-0.5">•</span>
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

