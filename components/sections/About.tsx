import Image from 'next/image'
import { timelineData } from '@/lib/data/about'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import ExperienceTimeline from '@/components/sections/ExperienceTimeline'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <p className="text-accent font-medium mb-4">About</p>
          <h2 className="text-section-sm md:text-section text-text-primary">
            From data science to building products.
          </h2>
        </AnimateOnScroll>

        <div className="mt-12 grid md:grid-cols-[280px_1fr] gap-12">
          <AnimateOnScroll delay={0.1}>
            <div className="relative w-full aspect-square max-w-[280px] rounded-2xl overflow-hidden bg-bg-surface">
              <Image
                src="/images/profile.jpg"
                alt="Bill Kamanzi"
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="space-y-5">
              <p className="text-body-lg text-text-secondary">
                I&apos;m Bill Kamanzi — a product builder based in Dubai. I ship software that
                solves real problems, combining full-stack development with performance marketing
                and data analysis.
              </p>
              <p className="text-body-lg text-text-secondary">
                I built ArbHunter, an AI-powered ad arbitrage platform. I&apos;m currently building
                Cravd, a social food rating app for Dubai. Before that, I scaled Quackr&apos;s social
                media to ~1M views at Long Tail Ventures.
              </p>
              <p className="text-body-lg text-text-secondary">
                CS graduate from Rochester Institute of Technology. I believe in shipping fast,
                learning from users, and building in public.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Experience */}
        <AnimateOnScroll className="mt-16">
          <h3 className="text-lg font-bold text-text-primary mb-8">Experience</h3>
        </AnimateOnScroll>
        <ExperienceTimeline entries={timelineData} />
      </div>
    </section>
  )
}
