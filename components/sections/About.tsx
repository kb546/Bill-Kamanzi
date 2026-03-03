'use client'

import Image from 'next/image'
import { Download } from 'lucide-react'
import { timelineData } from '@/lib/data/about'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import TextReveal from '@/components/ui/TextReveal'
import ExperienceTimeline from '@/components/sections/ExperienceTimeline'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div>
          <TextReveal
            text="About"
            as="p"
            className="text-accent font-medium mb-4"
            mode="scramble"
          />
          <TextReveal
            text="From debugging to deploying dreams."
            as="h2"
            className="font-display text-section-sm md:text-section text-text-primary"
            mode="words"
            delay={0.2}
            highlightWords={['deploying', 'dreams.']}
            highlightClass="text-accent"
          />
        </div>

        <div className="mt-12 grid md:grid-cols-[280px_1fr] gap-8 md:gap-12">
          <AnimateOnScroll delay={0.1}>
            <div className="relative w-full aspect-square max-w-[200px] sm:max-w-[280px] mx-auto md:mx-0 rounded-2xl overflow-hidden bg-bg-surface">
              <Image
                src="/images/profile.jpg"
                alt="Bill Kamanzi portrait"
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="space-y-5">
              <p className="text-body-lg text-text-secondary">
                I&apos;m Bill Kamanzi, a <span className="text-accent font-medium">full-stack developer</span> and <span className="text-accent font-medium">growth marketer</span> based in Dubai who builds
                products at the intersection of code, data, and marketing. The best products
                come from people who can&apos;t decide if they&apos;re developers or creatives.
                That&apos;s me.
              </p>
              <p className="text-body-lg text-text-secondary">
                I built ArbHunter, an AI platform that finds ad arbitrage opportunities
                before your morning coffee gets cold. Currently building Cravd, because
                Dubai&apos;s food scene deserves better than a 5-star rating system. As a <span className="text-accent font-medium">performance marketer</span> and <span className="text-accent font-medium">SEO strategist</span>, I don&apos;t just build products, I grow them.
              </p>
              <p className="text-body-lg text-text-secondary">
                RIT CS grad. Firm believer in shipping first, perfecting later,
                and letting the product do the talking.
              </p>
              <a
                href="/images/Bill-Kamanzi-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 text-sm font-medium border border-border-strong text-text-primary hover:border-accent hover:text-accent transition-colors clip-corner-sm"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Experience */}
        <AnimateOnScroll className="mt-16">
          <h3 className="font-display text-lg font-bold text-text-primary mb-8">Experience</h3>
        </AnimateOnScroll>
        <ExperienceTimeline entries={timelineData} />
      </div>
    </section>
  )
}
