'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github } from 'lucide-react'
import { useModalStore } from '@/lib/store/modalStore'

export default function ProjectModal() {
  const { isOpen, project, closeModal } = useModalStore()

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, closeModal])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            className="fixed inset-0 z-50"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeModal}
          />

          {/* Modal Panel */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="glass rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 glass-card border-b border-white/20 px-6 py-4 flex items-center justify-between rounded-t-3xl">
                <h2 className="text-2xl font-bold text-gray-900">Project Details</h2>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-xl glass-button hover:bg-white/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="px-6 py-8 space-y-8">
                {/* Title and Category */}
                <div>
                  <div className="mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold glass-button text-primary-700">
                      {project.category.replace('-', ' ')}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Impact & Metrics */}
                {(project.impact || project.metrics) && (
                  <div className="space-y-4">
                    {project.impact && (
                      <div className="glass-card rounded-xl p-4">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">
                          Impact
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{project.impact}</p>
                      </div>
                    )}
                    {project.metrics && (
                      <div className="glass-card rounded-xl p-4">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">
                          Key Metrics
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{project.metrics}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-2 rounded-xl text-sm font-medium glass-card text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-dark text-white hover:bg-black/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-button text-primary-700 hover:text-primary-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live Project
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
