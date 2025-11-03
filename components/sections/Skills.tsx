'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skillCategories } from '@/lib/data/skills'
import { fadeInScale, staggerContainer } from '@/lib/utils/animation'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20 md:py-28 lg:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2-section md:text-h2-section-md lg:text-h2-section-lg font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A blend of marketing strategy, data science, and modern web technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="group relative"
              variants={fadeInScale}
              custom={index}
            >
              {/* Floating animation */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.div
                  className="glass-card rounded-2xl p-6 shadow-lg transition-all duration-300"
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: '0 20px 50px -10px rgba(20, 184, 166, 0.25)',
                  }}
                >
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header with bounce on hover */}
                    <motion.div
                      className="flex items-center gap-3 mb-3"
                      whileHover={{
                        y: [0, -2, 0, -1, 0],
                        transition: {
                          duration: 0.4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        },
                      }}
                    >
                      <span className="text-3xl" aria-hidden="true">
                        {category.icon}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">
                        {category.name}
                      </h3>
                    </motion.div>

                    <p className="text-sm text-gray-600 mb-6">
                      {category.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium glass-button text-primary-700 cursor-default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={
                            isInView
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.8 }
                          }
                          transition={{
                            delay: 0.1 * index + 0.03 * skillIndex,
                            duration: 0.3,
                          }}
                          whileHover={{
                            scale: 1.05,
                            y: -2,
                            backgroundColor: 'rgba(20, 184, 166, 0.2)',
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
