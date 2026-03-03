'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import type { TimelineEntry } from '@/lib/data/about'

function TimelineNode({
  entry,
  index,
  isLast,
}: {
  entry: TimelineEntry
  index: number
  isLast: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className="relative flex items-stretch">
      {/* Mobile: line + node on left */}
      <div className="flex flex-col items-center flex-shrink-0 w-8 md:hidden">
        <motion.div
          className={`w-3 h-3 rounded-full flex-shrink-0 mt-6 ${
            entry.current
              ? 'bg-accent border-2 border-accent'
              : 'bg-bg border-2 border-border-strong'
          }`}
          initial={prefersReducedMotion ? {} : { scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3 }}
        />
        {!isLast && <div className="w-px bg-border flex-1 min-h-[2rem]" />}
      </div>

      {/* Mobile: content */}
      <div className="flex-1 pb-8 pl-4 md:hidden">
        <TimelineCard entry={entry} isInView={isInView} prefersReducedMotion={prefersReducedMotion} fromLeft />
      </div>

      {/* Desktop: alternating layout */}
      {/* Left content area */}
      <div className="hidden md:flex flex-1 justify-end pr-10">
        {isLeft && (
          <TimelineCard
            entry={entry}
            isInView={isInView}
            prefersReducedMotion={prefersReducedMotion}
            fromLeft
          />
        )}
      </div>

      {/* Desktop: center line + node */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 w-10">
        <motion.div
          className={`w-4 h-4 rounded-full flex-shrink-0 mt-6 ${
            entry.current
              ? 'bg-accent border-2 border-accent shadow-[0_0_12px_rgba(60,113,236,0.4)]'
              : 'bg-bg border-2 border-border-strong'
          }`}
          initial={prefersReducedMotion ? {} : { scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.05 }}
        />
        {!isLast && <div className="w-px bg-border flex-1 min-h-[2rem]" />}
      </div>

      {/* Right content area */}
      <div className="hidden md:flex flex-1 pl-10">
        {!isLeft && (
          <TimelineCard
            entry={entry}
            isInView={isInView}
            prefersReducedMotion={prefersReducedMotion}
            fromLeft={false}
          />
        )}
      </div>
    </div>
  )
}

function TimelineCard({
  entry,
  isInView,
  prefersReducedMotion,
  fromLeft,
}: {
  entry: TimelineEntry
  isInView: boolean
  prefersReducedMotion: boolean
  fromLeft: boolean
}) {
  return (
    <motion.div
      className="w-full max-w-md pb-2"
      initial={prefersReducedMotion ? {} : { opacity: 0, x: fromLeft ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
    >
      <div className="bg-bg-surface border border-border p-5 clip-corner hover:border-border-strong transition-colors">
        {entry.current && (
          <span className="inline-block px-2.5 py-0.5 text-xs font-medium bg-accent-muted text-accent rounded-full mb-3">
            Current
          </span>
        )}
        <h4 className="text-base font-bold text-text-primary leading-snug">{entry.title}</h4>
        <p className="text-sm font-medium text-accent mt-1">{entry.company}</p>
        <p className="text-xs text-text-muted mt-1">
          {entry.startDate} — {entry.endDate} · {entry.location}
        </p>
        {entry.description && (
          <p className="text-sm text-text-secondary mt-3 leading-relaxed">
            {entry.description}
          </p>
        )}

        {entry.subItems && entry.subItems.length > 0 && (
          <div className="mt-4 space-y-2.5 border-t border-border pt-4">
            <p className="text-xs font-medium text-text-muted uppercase tracking-wider">
              Projects Led
            </p>
            {entry.subItems.map((sub) => (
              <div key={sub.id} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-text-primary">{sub.company}</p>
                  <p className="text-xs text-text-muted">
                    {sub.title} · {sub.relationship === 'partnership' ? 'Partnership' : 'Client'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function ExperienceTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative">
      {entries.map((entry, i) => (
        <TimelineNode
          key={entry.id}
          entry={entry}
          index={i}
          isLast={i === entries.length - 1}
        />
      ))}
    </div>
  )
}
