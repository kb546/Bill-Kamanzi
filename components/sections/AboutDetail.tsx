'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { aboutPageContent } from '@/lib/data/aboutPage'

export default function AboutDetail() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Portrait - Left Side */}
          <motion.div
            className="relative order-1 lg:order-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-red-500 rounded-3xl shadow-2xl max-w-md w-full overflow-visible">
              <motion.div
                className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Bill Kamanzi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </motion.div>

              {/* Experience badge */}
              <motion.div
                className="absolute top-[50%] left-[15%] -translate-y-1/2 bg-blue-500 text-white px-10 py-4 md:px-12 md:py-5 rounded-full shadow-2xl transform -rotate-12 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05, rotate: -15 }}
              >
                <span className="font-bold text-lg md:text-xl whitespace-nowrap">
                  1+ Experience
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            className="space-y-8 order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Name Heading */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {aboutPageContent.introduction.heading}
            </motion.h2>

            {/* Introduction */}
            <motion.p
              className="text-lg md:text-xl text-gray-700 leading-relaxed pb-8 border-b border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {aboutPageContent.introduction.subheading}
            </motion.p>

            {/* My Journey Section */}
            <motion.div
              className="pb-8 border-b border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {aboutPageContent.journey.heading}
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {aboutPageContent.journey.content}
              </p>
            </motion.div>

            {/* My Philosophy Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {aboutPageContent.philosophy.heading}
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {aboutPageContent.philosophy.content}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

