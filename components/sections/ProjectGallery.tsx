'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Project } from '@/lib/data/projectsReal'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function ProjectGallery({ project }: { project: Project }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  if (!project.images || project.images.length <= 1) return null

  return (
    <>
      <section className="py-16 md:py-24 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <h2 className="font-display text-xl font-bold text-text-primary mb-8">Gallery</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {project.images.map((img, i) => (
              <AnimateOnScroll key={i} delay={i * 0.05}>
                <button
                  onClick={() => setSelectedIndex(i)}
                  className="relative aspect-[4/3] bg-bg-surface border border-border rounded-lg overflow-hidden cursor-pointer hover:border-accent/40 transition-colors w-full"
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                </button>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {selectedIndex !== null && (
        <Lightbox
          images={project.images}
          currentIndex={selectedIndex}
          title={project.title}
          onClose={() => setSelectedIndex(null)}
          onNavigate={setSelectedIndex}
        />
      )}
    </>
  )
}

function Lightbox({
  images,
  currentIndex,
  title,
  onClose,
  onNavigate,
}: {
  images: string[]
  currentIndex: number
  title: string
  onClose: () => void
  onNavigate: (index: number) => void
}) {
  const goPrev = useCallback(() => {
    onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1)
  }, [currentIndex, images.length, onNavigate])

  const goNext = useCallback(() => {
    onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0)
  }, [currentIndex, images.length, onNavigate])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, goPrev, goNext])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-3 text-white/70 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 text-white/50 text-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev() }}
          className="absolute left-2 sm:left-4 z-10 p-3 text-white/70 hover:text-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext() }}
          className="absolute right-2 sm:right-4 z-10 p-3 text-white/70 hover:text-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}
    </div>
  )
}
