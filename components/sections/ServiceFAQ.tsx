'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { ServiceFAQ as ServiceFAQType } from '@/lib/data/serviceFAQs'

interface ServiceFAQProps {
  faqs: ServiceFAQType[]
  gradientFrom: string
  gradientTo: string
}

export default function ServiceFAQ({ faqs, gradientFrom, gradientTo }: ServiceFAQProps) {
  const [openId, setOpenId] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  // Split FAQs into two columns
  const leftColumn = faqs.slice(0, Math.ceil(faqs.length / 2))
  const rightColumn = faqs.slice(Math.ceil(faqs.length / 2))

  return (
    <section id="service-faq" className="py-20 md:py-32 relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Frequently
            <br />
            Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions? Find answers to common inquiries about this service below.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                gradientFrom={gradientFrom}
                gradientTo={gradientTo}
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
                index={index + leftColumn.length}
                isInView={isInView}
                gradientFrom={gradientFrom}
                gradientTo={gradientTo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface FAQItemProps {
  faq: ServiceFAQType
  isOpen: boolean
  onToggle: () => void
  index: number
  isInView: boolean
  gradientFrom: string
  gradientTo: string
}

function FAQItem({ faq, isOpen, onToggle, index, isInView, gradientFrom, gradientTo }: FAQItemProps) {
  return (
    <motion.div
      className={`rounded-3xl transition-all duration-300 cursor-pointer ${
        isOpen
          ? 'text-white'
          : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-gray-300'
      }`}
      style={
        isOpen
          ? {
              background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
            }
          : {}
      }
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      onClick={onToggle}
    >
      <div className="p-6 md:p-8">
        {/* Question with Icon */}
        <div className="flex items-start justify-between gap-4">
          <h3
            className={`text-lg md:text-xl font-bold ${isOpen ? 'text-white' : 'text-gray-900'}`}
          >
            {faq.question}
          </h3>
          <div
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              isOpen ? 'bg-white/20' : 'bg-gray-100'
            }`}
          >
            {isOpen ? (
              <Minus className="w-5 h-5 text-white" strokeWidth={2.5} />
            ) : (
              <Plus className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
            )}
          </div>
        </div>

        {/* Answer - Shows when open */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? 16 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <p className="text-white leading-relaxed">{faq.answer}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

