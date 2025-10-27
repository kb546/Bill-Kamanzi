'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { Project } from '@/lib/data/projects'
import { useModalStore } from '@/lib/store/modalStore'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const openModal = useModalStore((state) => state.openModal)
  const prefersReducedMotion = useReducedMotion()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    damping: 20,
    stiffness: 200,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    damping: 20,
    stiffness: 200,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const percentX = (e.clientX - centerX) / (rect.width / 2)
    const percentY = (e.clientY - centerY) / (rect.height / 2)

    mouseX.set(percentX)
    mouseY.set(percentY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const getCategoryColor = (category: Project['category']) => {
    switch (category) {
      case 'marketing':
        return 'from-purple-400 to-purple-600'
      case 'web-development':
        return 'from-blue-400 to-blue-600'
      case 'data-analysis':
        return 'from-green-400 to-green-600'
      case 'machine-learning':
        return 'from-orange-400 to-orange-600'
      default:
        return 'from-gray-400 to-gray-600'
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className="perspective-1000 cursor-pointer group"
      style={
        prefersReducedMotion
          ? {}
          : {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => openModal(project)}
      whileHover={
        prefersReducedMotion
          ? { scale: 1 }
          : {
              scale: 1.02,
              y: [0, -5, 0],
              transition: {
                y: {
                  duration: 0.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              },
            }
      }
    >
      <div className="relative glass-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Gradient border glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(project.category)} opacity-20`} />
        </div>

        {/* Content */}
        <div className="relative p-6 space-y-4" style={{ transform: 'translateZ(20px)' }}>
          {/* Category Badge */}
          <div className="flex items-center justify-between">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold glass-button text-white`}
              style={{
                background: `linear-gradient(135deg, ${getCategoryColor(project.category).replace('from-', 'rgba(').replace('to-', 'rgba(').replace('-400', ', 0.8)').replace('-600', ', 1)')})`,
              }}
            >
              {project.category.replace('-', ' ')}
            </span>
            {project.featured && (
              <span className="text-xs font-semibold text-primary-600 glass-button px-2 py-1 rounded-full">
                ★ Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium glass text-gray-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium text-gray-500">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* CTA */}
          <motion.div
            className="pt-2"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <span className="inline-flex items-center text-sm font-semibold text-primary-600 group-hover:text-primary-700">
              View details
              <svg
                className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
