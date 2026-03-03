'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  if (!mounted) {
    return <div className="w-[52px] h-7" aria-hidden="true" />
  }

  return (
    <button
      onClick={toggle}
      className="relative flex items-center w-[52px] h-7 rounded-full border border-border bg-bg-surface transition-colors duration-300"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Sun className="absolute left-1.5 w-3 h-3 text-text-muted" />
      <Moon className="absolute right-1.5 w-3 h-3 text-text-muted" />
      <motion.div
        className="absolute w-[22px] h-[22px] rounded-full bg-accent shadow-md flex items-center justify-center"
        animate={{ x: isDark ? 26 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-white" />
        ) : (
          <Sun className="w-3 h-3 text-white" />
        )}
      </motion.div>
    </button>
  )
}
