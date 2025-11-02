'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'
import { useMousePosition } from '@/lib/hooks/useMousePosition'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

export default function BasketballCursor() {
  const { x, y } = useMousePosition()
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  // Smooth cursor movement with lag
  const cursorX = useSpring(0, { damping: 25, stiffness: 400 })
  const cursorY = useSpring(0, { damping: 25, stiffness: 400 })

  useEffect(() => {
    // Detect mobile/touch devices
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
    checkMobile()
  }, [])

  useEffect(() => {
    cursorX.set(x - 16)
    cursorY.set(y - 16)
  }, [x, y, cursorX, cursorY])

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, input, textarea, [role="button"]')
      setIsHovering(!!isInteractive)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  // Hide on mobile or if reduced motion is preferred
  if (isMobile || prefersReducedMotion) return null

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 mix-blend-difference"
      style={{ x: cursorX, y: cursorY }}
    >
      <motion.div
        className="relative"
        animate={{
          scale: isHovering ? 1.5 : 1,
          rotate: isClicking ? 0 : 360,
        }}
        transition={{
          scale: { duration: 0.2 },
          rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
        }}
      >
        {/* Basketball SVG */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={isHovering ? 'drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]' : ''}
        >
          {/* Basketball circle */}
          <circle
            cx="16"
            cy="16"
            r="14"
            fill="#f97316"
            stroke="#ea580c"
            strokeWidth="1"
          />
          {/* Basketball lines */}
          <path
            d="M16 2 L16 30"
            stroke="#ea580c"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M2 16 L30 16"
            stroke="#ea580c"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 6 Q16 16 6 26"
            stroke="#ea580c"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M26 6 Q16 16 26 26"
            stroke="#ea580c"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Bounce animation on click */}
        {isClicking && (
          <motion.div
            className="absolute inset-0"
            initial={{ y: 0 }}
            animate={{ y: [-5, 0] }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16"
                cy="16"
                r="14"
                fill="#f97316"
                stroke="#ea580c"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}





