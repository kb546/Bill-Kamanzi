'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import type { Project } from '@/lib/data/projectsReal'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

function CountUpValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!isInView) return

    // Extract numeric part and surrounding text
    const match = value.match(/^([~<>]?)(\d+(?:\.\d+)?)([\w%+]*$)/)
    if (!match) {
      setDisplay(value)
      return
    }

    const prefix = match[1]
    const target = parseFloat(match[2])
    const suffix = match[3]
    const duration = 1200
    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)

      setDisplay(`${prefix}${current}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplay(value)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value])

  return <span ref={ref}>{display}</span>
}

export default function ProjectResults({ project }: { project: Project }) {
  if (!project.results || project.results.length === 0) return null

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="font-display text-xl font-bold text-text-primary mb-8">Results</h2>
        </AnimateOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.results.map((result, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="relative p-6 bg-bg-surface border border-border clip-corner hover:border-accent/40 transition-colors">
                <p className="text-3xl font-bold text-accent mb-2">
                  <CountUpValue value={result.value} />
                </p>
                <p className="text-sm font-medium text-text-primary mb-1">{result.metric}</p>
                <p className="text-sm text-text-muted">{result.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
