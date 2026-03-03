'use client'

import { contact } from '@/lib/data/about'
import { ArrowUpRight } from 'lucide-react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import TextReveal from '@/components/ui/TextReveal'

const links = [
  { label: 'LinkedIn', href: contact.linkedin },
  { label: 'GitHub', href: contact.github },
  { label: 'X', href: contact.x },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="bg-accent rounded-2xl md:rounded-3xl px-4 py-12 sm:px-8 sm:py-16 md:px-16 md:py-20 text-center">
            <p className="text-white/70 font-medium mb-4 text-sm uppercase tracking-wider">Say hi</p>
            <TextReveal
              text="Got an idea? Let's make it real."
              as="h2"
              className="font-display text-section-sm md:text-section text-white max-w-lg mx-auto"
              mode="chars"
              delay={0.2}
            />
            <p className="text-white/70 mt-4 max-w-md mx-auto">
              Always down to chat about products, startups,
              or why your favorite restaurant is overrated.
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="inline-block mt-8 px-8 py-3.5 text-sm font-medium bg-white text-accent hover:bg-white/90 transition-colors rounded-lg clip-corner-sm"
            >
              Drop me a line
            </a>

            <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
