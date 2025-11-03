'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isShooting, setIsShooting] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    toggleVisibility()

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    setIsShooting(true)
    
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      })
      
      setTimeout(() => {
        setIsShooting(false)
      }, 1000)
    }, 300)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <div className="relative w-14 h-14">
            {/* Hoop */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12">
              <svg
                width="48"
                height="24"
                viewBox="0 0 48 24"
                fill="none"
                className="text-primary-600"
              >
                {/* Backboard */}
                <rect
                  x="12"
                  y="0"
                  width="24"
                  height="2"
                  fill="currentColor"
                  opacity="0.3"
                />
                {/* Hoop ring */}
                <ellipse
                  cx="24"
                  cy="8"
                  rx="12"
                  ry="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                {/* Net lines */}
                <path
                  d="M12 8 L14 16 M18 8 L19 16 M24 8 L24 16 M30 8 L29 16 M36 8 L34 16"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.4"
                />
              </svg>
            </div>

            {/* Basketball */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              animate={
                isShooting
                  ? {
                      y: [-50, -60, -70],
                      x: [0, 0, 0],
                      opacity: [1, 1, 0],
                      scale: [1, 0.8, 0.6],
                    }
                  : {
                      y: [0, -4, 0],
                    }
              }
              transition={
                isShooting
                  ? { duration: 0.6, ease: 'easeIn' }
                  : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
              }
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="drop-shadow-lg"
              >
                <circle cx="12" cy="12" r="11" fill="#f97316" />
                <circle cx="12" cy="12" r="11" fill="none" stroke="#ea580c" strokeWidth="1" />
                <path d="M12 1v22M1 12h22" stroke="#ea580c" strokeWidth="1.5" />
                <path d="M4 4Q12 12 4 20" stroke="#ea580c" strokeWidth="1.5" fill="none" />
                <path d="M20 4Q12 12 20 20" stroke="#ea580c" strokeWidth="1.5" fill="none" />
              </svg>
            </motion.div>

            {/* Trail effect when shooting */}
            {isShooting && (
              <>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2"
                    initial={{ y: 0, opacity: 0.6, scale: 1 }}
                    animate={{
                      y: -50 - i * 10,
                      opacity: 0,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.05,
                      ease: 'easeOut',
                    }}
                  >
                    <div className="w-4 h-4 rounded-full bg-basketball opacity-50" />
                  </motion.div>
                ))}
              </>
            )}

            {/* Background circle */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-lg group-hover:shadow-xl transition-shadow" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}






