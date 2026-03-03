'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-accent font-medium mb-4">Product Builder</p>
          <h1 className="text-hero-sm md:text-hero text-text-primary text-balance max-w-3xl">
            I build products.
          </h1>
          <p className="text-body-lg text-text-secondary mt-6 max-w-xl">
            Crafting tools at the intersection of code, data, and marketing.
            Currently building Cravd. Created ArbHunter.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        >
          <Button href="mailto:bikamanzi@gmail.com">Let&apos;s Talk</Button>
          <Button href="#projects" variant="secondary">See Projects</Button>
        </motion.div>
      </div>
    </section>
  )
}
