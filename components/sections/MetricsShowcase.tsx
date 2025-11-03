'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { TrendingUp, Users, Target, Zap } from 'lucide-react'
import { useCountUp } from '@/lib/hooks/useCountUp'
import { trackSectionView, trackMetricView } from '@/lib/utils/analytics'

const metrics = [
  {
    icon: TrendingUp,
    value: '1M+',
    label: 'Social Media Views',
    description: 'Across TikTok & YouTube',
    color: 'from-primary-500 to-primary-600'
  },
  {
    icon: Users,
    value: '10+',
    label: 'Projects Delivered',
    description: 'Across multiple industries',
    color: 'from-primary-500 to-primary-600'
  },
  {
    icon: Target,
    value: '100%',
    label: 'Client Satisfaction',
    description: 'Delivering measurable results',
    color: 'from-primary-500 to-primary-600'
  },
  {
    icon: Zap,
    value: '24hr',
    label: 'Response Time',
    description: 'Quick turnaround guaranteed',
    color: 'from-primary-500 to-primary-600'
  },
]

export default function MetricsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      trackSectionView('Metrics Showcase')
    }
  }, [isInView])

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-h2-section md:text-h2-section-md lg:text-h2-section-lg font-bold text-gray-900 mb-4">
            Proven Results, Real Impact
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Numbers that speak to quality, consistency, and commitment to your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-3xl p-6 md:p-8 border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 20px 40px -10px rgba(5, 150, 105, 0.15)',
                  borderColor: 'rgb(16, 185, 129)',
                }}
              >
                <motion.div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 md:mb-6 mx-auto shadow-lg`}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.4 }
                  }}
                >
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>
                <MetricValue
                  value={metric.value}
                  isInView={isInView}
                  delay={0.2 + index * 0.1}
                />
                <h3 
                  className="text-lg md:text-xl font-semibold text-gray-900 mb-1"
                  onMouseEnter={() => trackMetricView(metric.label)}
                >
                  {metric.label}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {metric.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Component for animated metric values
function MetricValue({ 
  value, 
  isInView, 
  delay 
}: { 
  value: string
  isInView: boolean
  delay: number
}) {
  // Check if value is numeric (with optional suffix like "1M+", "100%")
  const match = value.match(/^([\d.]+)(.*)$/)
  
  // If not numeric (like "24hr"), just display it without animation
  if (!match) {
    return (
      <motion.div
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay, type: 'spring', stiffness: 200 }}
      >
        {value}
      </motion.div>
    )
  }
  
  const numericValue = parseFloat(match[1])
  const suffix = match[2]
  
  const displayValue = useCountUp({
    end: numericValue,
    enabled: isInView,
    duration: 2000,
    decimals: 0,
    suffix
  })

  return (
    <motion.div
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2"
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 200 }}
    >
      {displayValue}
    </motion.div>
  )
}

