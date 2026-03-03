'use client'

import { useState, useEffect } from 'react'

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let rafId: number | null = null

    const updateScrollProgress = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight
        const scrollTop = window.scrollY
        const totalScroll = documentHeight - windowHeight
        const progress = scrollTop / totalScroll
        setScrollProgress(Math.min(Math.max(progress, 0), 1))
        rafId = null
      })
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    updateScrollProgress()

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  return scrollProgress
}
