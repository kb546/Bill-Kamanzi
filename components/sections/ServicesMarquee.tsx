'use client'

import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

const services = [
  'Quick Support',
  'Digital Solution',
  'Sketch Wireframing',
  'UI/UX Expert',
  'Creative Design',
  '100% Satisfaction',
  'Performance Marketing',
  'Data Analytics',
  'Web Development',
  'SEO Strategy',
]

export default function ServicesMarquee() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="relative w-full bg-gradient-to-r from-primary-600 to-primary-500 py-4 overflow-hidden">
      <div
        className={`flex whitespace-nowrap ${
          prefersReducedMotion ? '' : 'animate-marquee'
        }`}
      >
        {/* First set of items */}
        <div className="flex items-center">
          {services.map((service, index) => (
            <div key={`first-${index}`} className="flex items-center">
              <span className="text-white font-bold text-base md:text-lg px-4">
                {service}
              </span>
              <span className="text-white text-xl">✦</span>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex items-center">
          {services.map((service, index) => (
            <div key={`second-${index}`} className="flex items-center">
              <span className="text-white font-bold text-base md:text-lg px-4">
                {service}
              </span>
              <span className="text-white text-xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


