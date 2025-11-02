'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, CheckCircle, Mail, Linkedin, MapPin, AlertCircle } from 'lucide-react'
import { trackFormStart, trackFormSubmission, trackFormError } from '@/lib/utils/analytics'

export default function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [formStarted, setFormStarted] = useState(false)

  // Email validation regex
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const validateEmail = (email: string): { valid: boolean; error?: string } => {
    if (!email || !EMAIL_REGEX.test(email)) {
      return { valid: false, error: 'Please enter a valid email address' }
    }

    return { valid: true }
  }

  const handleFormStart = () => {
    if (!formStarted) {
      setFormStarted(true)
      trackFormStart()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')
    
    // Validate email
    const emailValidation = validateEmail(formData.email)
    if (!emailValidation.valid) {
      setStatus('error')
      setErrorMessage(emailValidation.error || 'Invalid email')
      trackFormError('email_validation', 'email')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      // Track successful submission
      trackFormSubmission({
        service: formData.service,
        budget: formData.budget,
        timeline: formData.timeline,
      })

      setStatus('success')
      setFormData({ name: '', email: '', service: '', budget: '', timeline: '', message: '' })
      setFormStarted(false)

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      )
      trackFormError('submission_failed')
    }
  }

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h2 className="text-2xl min-[375px]:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Get in Touch
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Whether you're looking to launch a new project, scale your marketing, or discuss
                potential collaboration, I'm here to help.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:bikamanzi@gmail.com"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    bikamanzi@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/bill-kamanzi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-700">Remote / Global</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-100">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-6 h-6 text-accent-600" />
                <h3 className="font-semibold text-gray-900">Quick Response</h3>
              </div>
              <p className="text-gray-700">
                I typically respond within 24 hours via email or LinkedIn.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={handleFormStart}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={handleFormStart}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Service & Budget Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="paid-ads">Paid Ads Management</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="webflow">Webflow Development</option>
                    <option value="branding">Logo & Branding</option>
                    <option value="project-management">Project Management</option>
                    <option value="other">Other/Multiple Services</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-900 mb-2">
                    Project Budget *
                  </label>
                  <select
                    id="budget"
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                  >
                    <option value="">Select budget range</option>
                    <option value="300-500">$300 - $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="custom">Custom Quote</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-900 mb-2">
                  Project Timeline *
                </label>
                <select
                  id="timeline"
                  required
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                >
                  <option value="">Select timeline</option>
                  <option value="urgent">Urgent (ASAP)</option>
                  <option value="2-4-weeks">2-4 weeks</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Project Details (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  maxLength={200}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all resize-none"
                  placeholder="Brief description of your project (max 200 characters)..."
                />
                <p className="text-sm text-gray-500 mt-1">{formData.message.length}/200 characters</p>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="w-full md:w-auto px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: status === 'sending' ? 1 : 1.05 }}
                whileTap={{ scale: status === 'sending' ? 1 : 0.95 }}
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  className="text-accent-600 font-medium flex items-center gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="w-5 h-5" />
                  Thanks for reaching out! I'll get back to you within 24 hours.
                </motion.p>
              )}

              {status === 'error' && errorMessage && (
                <motion.p
                  className="text-red-600 font-medium flex items-center gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="w-5 h-5" />
                  {errorMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

