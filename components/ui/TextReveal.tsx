'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface TextRevealProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  mode?: 'chars' | 'words' | 'scramble'
  delay?: number
  highlightWords?: string[]
  highlightClass?: string
}

function CharStagger({
  text,
  className,
  delay,
  isInView,
  prefersReducedMotion,
  highlightWords,
  highlightClass,
  Tag,
}: {
  text: string
  className?: string
  delay: number
  isInView: boolean
  prefersReducedMotion: boolean
  highlightWords?: string[]
  highlightClass?: string
  Tag: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}) {
  const words = text.split(' ')

  const isHighlighted = (word: string) => {
    if (!highlightWords) return false
    const clean = word.replace(/[.,!?'"]/g, '')
    return highlightWords.some(hw => clean.toLowerCase() === hw.toLowerCase())
  }

  if (prefersReducedMotion) {
    return (
      <Tag className={className}>
        {words.map((word, wi) => (
          <span key={wi} className={isHighlighted(word) ? highlightClass : undefined}>
            {word}{wi < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </Tag>
    )
  }

  let charIndex = 0

  return (
    <Tag className={className}>
      {words.map((word, wi) => {
        const chars = word.split('')
        const wordElement = (
          <span
            key={wi}
            className={`inline-block ${isHighlighted(word) ? highlightClass || '' : ''}`}
          >
            {chars.map((char, ci) => {
              const idx = charIndex++
              return (
                <motion.span
                  key={ci}
                  className="inline-block"
                  initial={{ opacity: 0, y: '0.4em' }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    type: 'spring',
                    damping: 14,
                    stiffness: 200,
                    delay: delay + idx * 0.025,
                  }}
                >
                  {char}
                </motion.span>
              )
            })}
            {wi < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        )
        // Account for the space
        if (wi < words.length - 1) charIndex++
        return wordElement
      })}
    </Tag>
  )
}

function WordStagger({
  text,
  className,
  delay,
  isInView,
  prefersReducedMotion,
  highlightWords,
  highlightClass,
  Tag,
}: {
  text: string
  className?: string
  delay: number
  isInView: boolean
  prefersReducedMotion: boolean
  highlightWords?: string[]
  highlightClass?: string
  Tag: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}) {
  const words = text.split(' ')

  const isHighlighted = (word: string) => {
    if (!highlightWords) return false
    const clean = word.replace(/[.,!?'"]/g, '')
    return highlightWords.some(hw => clean.toLowerCase() === hw.toLowerCase())
  }

  if (prefersReducedMotion) {
    return (
      <Tag className={className}>
        {words.map((word, i) => (
          <span key={i} className={isHighlighted(word) ? highlightClass : undefined}>
            {word}{i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </Tag>
    )
  }

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block ${isHighlighted(word) ? highlightClass || '' : ''}`}
          initial={{ opacity: 0, y: '0.3em' }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.05,
            ease: 'easeOut',
          }}
        >
          {word}{i < words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </Tag>
  )
}

function ScrambleText({
  text,
  className,
  delay,
  isInView,
  prefersReducedMotion,
  Tag,
}: {
  text: string
  className?: string
  delay: number
  isInView: boolean
  prefersReducedMotion: boolean
  Tag: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}) {
  const [displayText, setDisplayText] = useState(text)
  const [hasAnimated, setHasAnimated] = useState(false)
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`'

  const animate = useCallback(() => {
    if (hasAnimated || prefersReducedMotion) return

    const finalText = text
    const duration = 600
    const startTime = Date.now()

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      const result = finalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' '
          const charProgress = i / finalText.length
          if (progress > charProgress + 0.3) return char
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join('')

      setDisplayText(result)

      if (progress >= 1) {
        clearInterval(interval)
        setDisplayText(finalText)
        setHasAnimated(true)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [text, hasAnimated, prefersReducedMotion])

  useEffect(() => {
    if (!isInView) return
    const timer = setTimeout(animate, delay * 1000)
    return () => clearTimeout(timer)
  }, [isInView, delay, animate])

  if (prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag className={className}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay }}
      >
        {displayText}
      </motion.span>
    </Tag>
  )
}

export default function TextReveal({
  text,
  as: Tag = 'span',
  className = '',
  mode = 'words',
  delay = 0,
  highlightWords,
  highlightClass = 'text-accent',
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <div ref={ref}>
      {mode === 'chars' && (
        <CharStagger
          text={text}
          className={className}
          delay={delay}
          isInView={isInView}
          prefersReducedMotion={prefersReducedMotion}
          highlightWords={highlightWords}
          highlightClass={highlightClass}
          Tag={Tag}
        />
      )}
      {mode === 'words' && (
        <WordStagger
          text={text}
          className={className}
          delay={delay}
          isInView={isInView}
          prefersReducedMotion={prefersReducedMotion}
          highlightWords={highlightWords}
          highlightClass={highlightClass}
          Tag={Tag}
        />
      )}
      {mode === 'scramble' && (
        <ScrambleText
          text={text}
          className={className}
          delay={delay}
          isInView={isInView}
          prefersReducedMotion={prefersReducedMotion}
          Tag={Tag}
        />
      )}
    </div>
  )
}
