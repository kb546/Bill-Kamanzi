'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()

  // Hide on contact page
  const shouldShow = pathname !== '/contact'

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px down
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!shouldShow) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0 
          }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <Link href="/contact">
            <motion.button
              className="group relative flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 
                         text-white rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all duration-200
                         font-bold text-base touch-manipulation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={prefersReducedMotion ? {} : {
                boxShadow: [
                  '0 20px 60px rgba(16, 185, 129, 0.3)',
                  '0 20px 80px rgba(16, 185, 129, 0.5)',
                  '0 20px 60px rgba(16, 185, 129, 0.3)',
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              aria-label="Get started with a project"
            >
              <span>Get Started</span>
              <ArrowRight 
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" 
              />
            </motion.button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

