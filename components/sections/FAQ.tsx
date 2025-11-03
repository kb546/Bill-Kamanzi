'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '@/lib/data/faq'

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openId, setOpenId] = useState<string | null>(null)

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  // Split FAQs into two columns (now 11 total: 6 left, 5 right)
  const leftColumn = faqs.slice(0, 6)
  const rightColumn = faqs.slice(6)

  return (
    <section id="faq" className="py-20 md:py-28 lg:py-32 relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2-section md:text-h2-section-md lg:text-h2-section-lg font-bold text-gray-900 mb-6">
            Frequently
            <br />
            Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions? I've got answers. Find answers to common questions about my services, pricing, and process. Can't find what you're looking for? Feel free to get in touch.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumn.map((faq, index) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggleFAQ(faq.id)}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumn.map((faq, index) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggleFAQ(faq.id)}
                index={index + 6}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface FAQItemProps {
  faq: {
    id: string
    question: string
    answer: string
  }
  isOpen: boolean
  onToggle: () => void
  index: number
  isInView: boolean
}

function FAQItem({ faq, isOpen, onToggle, index, isInView }: FAQItemProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <motion.div
      className={`rounded-3xl transition-all duration-300 ${
        isOpen
          ? 'bg-gradient-to-br from-primary-600 to-primary-500 text-white'
          : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-gray-300'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <button
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="w-full text-left p-6 md:p-8 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-3xl"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
        id={`faq-question-${faq.id}`}
      >
        {/* Question with Icon */}
        <div className="flex items-start justify-between gap-4">
          <h3 className={`text-lg md:text-xl font-bold ${isOpen ? 'text-white' : 'text-gray-900'}`}>
            {faq.question}
          </h3>
          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
            isOpen ? 'bg-white/20' : 'bg-gray-100'
          }`}>
            {isOpen ? (
              <Minus className="w-5 h-5 text-white" strokeWidth={2.5} aria-hidden="true" />
            ) : (
              <Plus className="w-5 h-5 text-gray-700" strokeWidth={2.5} aria-hidden="true" />
            )}
          </div>
        </div>
      </button>

      {/* Answer - Shows when open */}
      <motion.div
        id={`faq-answer-${faq.id}`}
        role="region"
        aria-labelledby={`faq-question-${faq.id}`}
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? 16 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden px-6 md:px-8 pb-6 md:pb-8"
      >
        <p className="text-white leading-relaxed">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  )
}

