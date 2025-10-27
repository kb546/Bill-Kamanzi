'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  variant?: 'color' | 'white'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Logo({ variant = 'color', size = 'md', className = '' }: LogoProps) {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  }

  return (
    <motion.div
      className={`${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={variant === 'white' ? '#ffffff' : '#10b981'} />
            <stop offset="100%" stopColor={variant === 'white' ? '#ffffff' : '#0ea5e9'} />
          </linearGradient>
        </defs>
        
        {/* Outer circle with gradient stroke */}
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="3"
        />
        
        {/* Inner circle (subtle) */}
        <circle
          cx="50"
          cy="50"
          r="37"
          fill={variant === 'white' ? 'rgba(255, 255, 255, 0.1)' : 'url(#logoGradient)'}
          fillOpacity={variant === 'white' ? '1' : '0.1'}
        />
        
        {/* "BK" Text */}
        <text
          x="50"
          y="62"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="32"
          fontWeight="700"
          textAnchor="middle"
          fill={variant === 'white' ? '#ffffff' : 'url(#logoGradient)'}
        >
          BK
        </text>
      </svg>
    </motion.div>
  )
}

