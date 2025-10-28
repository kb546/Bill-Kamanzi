'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { bio } from '@/lib/data/about'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { trackCTAClick, trackDownload } from '@/lib/utils/analytics'

const skillTags = [
  { 
    id: 1, 
    name: 'Digital Marketing', 
    className: 'tag-marketing', 
    position: 'top-8 -left-16', 
    rotation: -8,
    shadowColor: 'rgba(16, 185, 129, 0.4)'
  },
  { 
    id: 2, 
    name: 'Data Science', 
    className: 'tag-data-science', 
    position: 'bottom-24 -left-20', 
    rotation: -5,
    shadowColor: 'rgba(59, 130, 246, 0.4)'
  },
  { 
    id: 3, 
    name: 'Web Development', 
    className: 'tag-web-dev', 
    position: 'bottom-8 -right-12', 
    rotation: 8,
    shadowColor: 'rgba(16, 185, 129, 0.4)'
  },
]

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const portraitRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  const tagRefs = useRef<(HTMLDivElement | null)[]>([])
  const [isCircleHovered, setIsCircleHovered] = useState(false)
  const [isPortraitHovered, setIsPortraitHovered] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) return

    // Portrait parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!portraitRef.current) return
      
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const xPos = (clientX / innerWidth - 0.5) * 15
      const yPos = (clientY / innerHeight - 0.5) * 15
      
      gsap.to(portraitRef.current, {
        x: xPos,
        y: yPos,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [prefersReducedMotion])

  const handleTagHover = (index: number, isHovering: boolean) => {
    if (prefersReducedMotion || !tagRefs.current[index]) return
    
    if (isHovering) {
      gsap.to(tagRefs.current[index], {
        scale: 1.15,
        rotation: index % 2 === 0 ? skillTags[index].rotation + 8 : skillTags[index].rotation - 8,
        y: -8,
        duration: 0.3,
        ease: 'power2.out',
      })
    } else {
      gsap.to(tagRefs.current[index], {
        scale: 1,
        rotation: skillTags[index].rotation,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  const handleCircleClick = () => {
    window.location.href = '/contact'
  }

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] lg:min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16 pb-12 md:pt-20 md:pb-16 lg:pb-20"
    >
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-[375px]:gap-8 md:gap-12 lg:gap-16 items-center w-full">
          
          {/* Left side - Text content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1 py-8 md:py-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Headline */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-gray-900">Hey there,</span>
              <br />
              <span className="text-gray-900">I Am </span>
              <span className="gradient-text font-extrabold">Bill Kamanzi</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {bio.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              A dynamic professional combining data-driven insights with creative solutions.
              Transforming ideas into seamless digital experiences through strategic campaigns
              and innovative development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="/projects"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] rounded-2xl font-bold text-white bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden touch-manipulation"
                onClick={() => trackCTAClick('View Projects', 'hero')}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.span>
              </a>

              <a
                href="/images/Bill-Kamanzi-Resume.pdf"
                download
                onClick={() => trackDownload('Bill-Kamanzi-Resume.pdf', 'Download CV')}
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] rounded-2xl font-bold text-gray-700 bg-white border-2 border-gray-300 hover:border-gray-400 shadow-md hover:shadow-lg transition-all duration-200 touch-manipulation"
              >
                <motion.span
                  className="relative z-10 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </motion.span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Portrait with floating tags */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative w-full max-w-[280px] min-[375px]:max-w-[300px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-md">
              {/* Main portrait container */}
              <div
                ref={portraitRef}
                className="relative z-10"
              >
                <motion.div
                  className="relative aspect-[3/4] min-h-[350px] max-h-[400px] min-[375px]:max-h-[420px] sm:max-h-[480px] md:max-h-[520px] lg:max-h-none rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setIsPortraitHovered(true)}
                  onMouseLeave={() => setIsPortraitHovered(false)}
                >
                  <Image
                    src="/images/profile.png"
                    alt="Bill Kamanzi"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </motion.div>
              </div>

              {/* Floating skill tags */}
              <div className="hidden lg:block">
                {skillTags.map((tag, index) => (
                  <motion.div
                    key={tag.id}
                    ref={(el) => { tagRefs.current[index] = el }}
                    className={`absolute ${tag.position} tag-float ${tag.className} z-20`}
                    style={{ transform: `rotate(${tag.rotation}deg)` }}
                    animate={prefersReducedMotion ? {} : {
                      scale: isPortraitHovered ? [1, 2, 1] : [1, 1.05, 1],
                      rotate: isPortraitHovered 
                        ? [tag.rotation, tag.rotation + 12, tag.rotation]
                        : tag.rotation
                    }}
                    transition={{
                      duration: isPortraitHovered ? 0.6 : 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                    whileHover={prefersReducedMotion ? {} : {
                      scale: 1.15,
                      boxShadow: `0 10px 30px ${tag.shadowColor}`
                    }}
                    onMouseEnter={() => handleTagHover(index, true)}
                    onMouseLeave={() => handleTagHover(index, false)}
                  >
                    {tag.name}
                  </motion.div>
                ))}
              </div>

              {/* Rotating "Get in Touch" circle */}
              <div
                className="absolute -left-10 md:-left-12 top-1/2 -translate-y-1/2 z-30 cursor-pointer"
                onClick={handleCircleClick}
                onMouseEnter={() => setIsCircleHovered(true)}
                onMouseLeave={() => setIsCircleHovered(false)}
              >
                <motion.div
                  className="relative w-28 h-28 md:w-36 md:h-36"
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Rotating border with text */}
                  <div
                    ref={circleRef}
                    className={`absolute inset-0 rounded-full border-4 border-primary-500 flex items-center justify-center ${
                      isCircleHovered ? 'rotate-circle-fast' : 'rotate-circle'
                    }`}
                    style={{
                      background: 'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)',
                    }}
                  >
                    {/* Circular text */}
                    <svg
                      viewBox="0 0 100 100"
                      className="absolute inset-0 w-full h-full"
                    >
                      <defs>
                        <path
                          id="circlePath"
                          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        />
                      </defs>
                      <text className="text-[9px] md:text-[10px] fill-white font-bold uppercase tracking-wider">
                        <textPath href="#circlePath" startOffset="0%">
                          • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH
                        </textPath>
                      </text>
                    </svg>

                    {/* Center arrow icon */}
                    <motion.div
                      className="relative z-10 bg-white rounded-full p-2.5 md:p-3.5 shadow-lg"
                      animate={
                        isCircleHovered && !prefersReducedMotion
                          ? { scale: [1, 1.1, 1], rotate: [0, 10, 0] }
                          : {}
                      }
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                    </motion.div>
                  </div>

                  {/* Glow effect on hover */}
                  {isCircleHovered && !prefersReducedMotion && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-purple-400 opacity-40 blur-xl"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.2, opacity: 0.4 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Mobile tags - displayed below portrait */}
              <div className="md:hidden flex flex-wrap justify-center gap-3 mt-6">
                {skillTags.map((tag) => (
                  <div
                    key={tag.id}
                    className={`tag-float ${tag.className}`}
                  >
                    {tag.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
