'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
}

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])

  const baseClasses = 'relative inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 overflow-hidden'
  
  const variantClasses = {
    primary: 'glass-button text-primary-700 hover:text-primary-800 shadow-lg hover:shadow-xl border-primary-200',
    secondary: 'glass text-gray-700 hover:text-gray-900 shadow-md hover:shadow-lg',
  }

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Create ripple effect
    if (!prefersReducedMotion) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = Date.now()
      
      setRipples((prev) => [...prev, { x, y, id }])
      
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== id))
      }, 600)
    }

    if (href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start',
        })
      }
    }
    
    onClick?.()
  }

  return (
    <motion.div
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              scale: 1.05,
              y: [0, -2, 0, -1, 0],
              transition: {
                scale: { duration: 0.2 },
                y: {
                  duration: 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              },
            }
      }
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href} className={combinedClasses} onClick={handleClick}>
        {/* Ripple effects */}
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              className="absolute rounded-full bg-primary-400"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: 20,
                height: 20,
                marginLeft: -10,
                marginTop: -10,
              }}
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          ))}
        </AnimatePresence>

        {/* Orange glow on hover */}
        <motion.span
          className="absolute inset-0 rounded-xl bg-primary-400 opacity-0"
          whileHover={
            prefersReducedMotion
              ? {}
              : {
                  opacity: [0, 0.1, 0],
                  scale: [1, 1.01, 1],
                  transition: {
                    duration: 0.4,
                    repeat: Infinity,
                  },
                }
          }
        />

        {/* Button content */}
        <span className="relative z-10">{children}</span>
      </Link>
    </motion.div>
  )
}
