import { useState, useEffect } from 'react'

interface UseCountUpOptions {
  duration?: number
  start?: number
  end: number
  enabled?: boolean
  decimals?: number
  suffix?: string
  prefix?: string
}

export function useCountUp({
  duration = 2000,
  start = 0,
  end,
  enabled = true,
  decimals = 0,
  suffix = '',
  prefix = ''
}: UseCountUpOptions) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!enabled) {
      setCount(end)
      return
    }

    const startTime = Date.now()
    const difference = end - start

    const updateCount = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = start + difference * easeOutQuart
      
      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    const frame = requestAnimationFrame(updateCount)
    return () => cancelAnimationFrame(frame)
  }, [enabled, start, end, duration])

  const formattedCount = count.toFixed(decimals)
  return `${prefix}${formattedCount}${suffix}`
}

