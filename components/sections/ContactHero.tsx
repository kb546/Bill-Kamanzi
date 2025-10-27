'use client'

import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-hero">
      {/* Animated gradient circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Let's Build Something
            <span className="text-gradient-primary"> Amazing </span>
            Together
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Ready to elevate your brand? Share your vision and let's create digital experiences
            that drive real results.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

