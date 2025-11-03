'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, Wrench, TrendingUp } from 'lucide-react'

interface ServiceDetailsProps {
  heading: string
  fullDescription: string
  keyPoints: string[]
  tools?: string[]
  outcomes?: string[]
  process?: {
    step: string
    description: string
  }[]
}

export default function ServiceDetails({
  heading,
  fullDescription,
  keyPoints,
  tools,
  outcomes,
  process,
}: ServiceDetailsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What I Do Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-h2-section md:text-h2-section-md lg:text-h2-section-lg font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl">
            {fullDescription}
          </p>
        </motion.div>

        {/* Key Points */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-h3-subsection md:text-h3-subsection-md font-bold text-gray-900 mb-6">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-base md:text-lg text-gray-700">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        {tools && tools.length > 0 && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <Wrench className="w-6 h-6 text-primary-600" />
              <h3 className="text-h3-subsection md:text-h3-subsection-md font-bold text-gray-900">
                Tools & Technologies
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Expected Outcomes */}
        {outcomes && outcomes.length > 0 && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <TrendingUp className="w-6 h-6 text-primary-600" />
              <h3 className="text-h3-subsection md:text-h3-subsection-md font-bold text-gray-900">
                Expected Outcomes
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-xl border border-gray-200"
                >
                  <p className="text-base text-gray-700">{outcome}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Process */}
        {process && process.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-h3-subsection md:text-h3-subsection-md font-bold text-gray-900 mb-6">
              My Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1.5">
                      {step.step}
                    </h4>
                    <p className="text-base text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

