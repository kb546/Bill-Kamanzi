'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { aboutHero } from '@/lib/data/about'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 lg:gap-16 items-center"
        >
          {/* Portrait with colored background - Left Side */}
          <motion.div
            className="relative order-1 lg:order-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Green background container - Taller portrait */}
            <div className="relative bg-primary-500 rounded-3xl shadow-2xl max-w-[280px] min-[375px]:max-w-[300px] sm:max-w-[340px] md:max-w-sm w-full overflow-visible">
              {/* Portrait image */}
              <motion.div
                className="relative aspect-[2/3] min-h-[380px] max-h-[420px] min-[375px]:max-h-[450px] sm:max-h-[480px] md:max-h-[520px] lg:max-h-none w-full overflow-hidden rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Bill Kamanzi"
                  fill
                  className="object-cover grayscale-[20%]"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </motion.div>

              {/* Experience badge - Positioned below portrait */}
              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-6 py-2.5 min-[375px]:px-8 min-[375px]:py-3 sm:px-10 sm:py-4 rounded-full shadow-xl z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1
                } : { 
                  opacity: 0, 
                  scale: 0.8 
                }}
                transition={{ 
                  opacity: { duration: 0.5, delay: 0.5 },
                  scale: { duration: 0.5, delay: 0.5 }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-bold text-sm min-[375px]:text-base sm:text-lg md:text-xl whitespace-nowrap">
                  1+ Years Experience
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            className="space-y-6 order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Heading */}
            <motion.h2
              className="text-h2-section md:text-h2-section-md lg:text-h2-section-lg text-gray-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {aboutHero.heading}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {aboutHero.intro}
            </motion.p>

            {/* More About Me CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
                   <a
                      href="/about"
                      className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] rounded-2xl font-bold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-lg hover:shadow-xl transition-all duration-200 touch-manipulation"
                    >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  More About Me
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
