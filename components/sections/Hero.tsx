'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import TextReveal from '@/components/ui/TextReveal'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <TextReveal
              text="Full-Stack Developer & Growth Marketer"
              as="p"
              className="text-accent font-medium mb-4"
              mode="scramble"
            />
            <TextReveal
              text="I build things people actually use."
              as="h1"
              className="font-display text-hero-sm md:text-hero text-text-primary text-balance max-w-3xl"
              mode="chars"
              delay={0.4}
              highlightWords={['actually']}
              highlightClass="text-accent"
            />
            <TextReveal
              text="Performance marketer, SEO strategist, and full-time shipper. Currently cooking up Cravd. Previously launched ArbHunter into the wild."
              as="p"
              className="text-body-lg text-text-secondary mt-6 max-w-xl"
              mode="words"
              delay={0.9}
            />

            <motion.div
              className="flex flex-wrap gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4, ease: 'easeOut' }}
            >
              <Button href="mailto:bikamanzi@gmail.com">Let&apos;s Talk</Button>
              <Button href="#projects" variant="secondary">See the Goods</Button>
            </motion.div>
          </div>

          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative w-[260px] h-[260px] rounded-2xl overflow-hidden">
              <Image
                src="/images/profile-pic-bill.png"
                alt="Bill Kamanzi - Full-Stack Developer and Growth Marketer"
                fill
                className="object-cover"
                sizes="260px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
