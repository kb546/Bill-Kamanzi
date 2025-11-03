'use client'

import { motion } from 'framer-motion'

const quotes = [
  'Growth is data with soul.',
  'Creativity is analytics wearing better shoes.',
  'Performance marketing meets data science.',
  'Where metrics inspire meaning.',
  'Data-driven decisions, human-centered results.',
]

export default function Insights() {
  return (
    <section className="py-20 md:py-28 lg:py-32 glass-card overflow-hidden">
      <div className="relative">
        {/* Scrolling Marquee */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {/* Duplicate quotes for seamless loop */}
          {[...quotes, ...quotes, ...quotes].map((quote, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-8"
            >
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700/70 select-none">
                {quote}
              </span>
              <span className="mx-8 text-primary-500/50 text-2xl">•</span>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white/80 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/80 to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
