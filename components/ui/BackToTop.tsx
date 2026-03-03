'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 p-3 bg-bg-surface border border-border rounded-full text-text-secondary hover:text-accent hover:border-accent transition-colors duration-200"
      aria-label="Back to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  )
}
