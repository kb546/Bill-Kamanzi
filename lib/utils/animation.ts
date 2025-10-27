import type { Variants } from 'framer-motion'

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
}

// Fade in with scale
export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
}

// Stagger children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
}

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
}

// Modal overlay
export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.2 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  },
}

// Modal panel
export const modalPanel: Variants = {
  hidden: { x: '100%' },
  visible: { 
    x: 0,
    transition: { 
      type: 'spring',
      damping: 30,
      stiffness: 300
    }
  },
  exit: { 
    x: '100%',
    transition: { 
      type: 'spring',
      damping: 30,
      stiffness: 300
    }
  },
}

// Custom spring config
export const springConfig = {
  type: 'spring' as const,
  damping: 25,
  stiffness: 400,
}

// Standardized hover effects
export const hoverButton = {
  scale: 1.05,
  transition: { duration: 0.2, ease: 'easeOut' }
}

export const hoverCard = {
  y: -8,
  transition: { duration: 0.3, ease: 'easeOut' }
}

export const hoverImage = {
  scale: 1.05,
  transition: { duration: 0.5, ease: 'easeOut' }
}


