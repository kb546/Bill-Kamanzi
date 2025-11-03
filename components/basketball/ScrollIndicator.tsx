'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollProgress } from '@/lib/hooks/useScrollProgress'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

export default function ScrollIndicator() {
  const scrollProgress = useScrollProgress()
  const [isVisible, setIsVisible] = useState(true)
  const [hasSwished, setHasSwished] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Hide after scrolling past 20%
    if (scrollProgress > 0.2) {
      setIsVisible(false)
    }

    // Trigger swish animation at 25%, 50%, 75%
    const milestones = [0.25, 0.5, 0.75]
    const currentMilestone = milestones.find(
      m => scrollProgress >= m && scrollProgress < m + 0.01
    )
    
    if (currentMilestone && !hasSwished) {
      setHasSwished(true)
      setTimeout(() => setHasSwished(false), 600)
    }
  }, [scrollProgress, hasSwished])

  if (prefersReducedMotion) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-16 h-16">
            {/* 3-point arc background */}
            <svg
              className="w-full h-full -rotate-90"
              viewBox="0 0 64 64"
            >
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
                opacity="0.3"
              />
              {/* Progress arc */}
              <motion.circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="#14b8a6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={176} // 2 * PI * 28
                strokeDashoffset={176 * (1 - scrollProgress)}
                transition={{ duration: 0.1 }}
              />
            </svg>

            {/* Swish animation */}
            {hasSwished && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: [0, 1, 0] }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-primary-500"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            )}

            {/* Down arrow in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-gray-600"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  d="M8 2v12m0 0l4-4m-4 4L4 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>
          </div>

          {/* Text hint */}
          <motion.p
            className="text-xs text-gray-500 text-center mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Scroll to explore
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}






