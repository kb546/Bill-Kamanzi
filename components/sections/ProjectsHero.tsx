'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Award } from 'lucide-react'

export default function ProjectsHero() {
  const stats = [
    {
      icon: Award,
      value: '3',
      label: 'Major Projects',
    },
    {
      icon: TrendingUp,
      value: '~1M',
      label: 'Views Generated',
    },
    {
      icon: Users,
      value: '5+',
      label: 'Platforms Managed',
    },
  ]

  return (
    <section className="relative py-20 md:py-28 lg:py-32 flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Circular Gradient Background */}
      <div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl animate-pulse"
        style={{
          background: 'radial-gradient(circle, #10b981 0%, #34d399 50%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.h1
          className="text-h1-hero md:text-h1-hero-md lg:text-h1-hero-lg font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My Projects
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Driving growth through data-driven strategies, compelling content, and seamless digital experiences
        </motion.p>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

