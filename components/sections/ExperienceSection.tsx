'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Briefcase, TrendingUp, CheckCircle, MapPin } from 'lucide-react'
import { experienceWithTenure, companyBrandColors } from '@/lib/data/experience'

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const typeColors = {
    'full-time': 'bg-blue-100 text-blue-800',
    'contract': 'bg-purple-100 text-purple-800',
    'freelance': 'bg-green-100 text-green-800',
  }

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Building impactful digital solutions across marketing, data science, and web development
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experienceWithTenure.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="glass-card group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {/* Company Logo/Icon */}
              <div className="flex items-center justify-between mb-6">
                {experience.logo ? (
                  <div 
                    className="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-xl p-3 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: companyBrandColors[experience.id] || '#FFFFFF' }}
                  >
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-10 h-10 md:w-12 md:h-12" />
                  </div>
                )}
                
                {/* Type Badge */}
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[experience.type]}`}>
                  {experience.type.replace('-', ' ').toUpperCase()}
                </span>
              </div>

              {/* Company Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                {experience.company}
              </h3>

              {/* Role */}
              <p className="text-lg text-gray-700 font-semibold mb-2">
                {experience.role}
              </p>

              {/* Duration & Location */}
              <div className="flex flex-col gap-1 mb-6">
                <p className="text-sm text-gray-500">
                  {experience.duration}
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {experience.location}
                </p>
              </div>

              {/* Achievements */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <TrendingUp className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="font-semibold text-sm">Key Achievements:</span>
                </div>
                {experience.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              {experience.skills && experience.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

