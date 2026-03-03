import Image from 'next/image'
import type { Project } from '@/lib/data/projectsReal'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function ProjectGallery({ project }: { project: Project }) {
  if (!project.images || project.images.length <= 1) return null

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-xl font-bold text-text-primary mb-8">Gallery</h2>
        </AnimateOnScroll>
        <div className="grid gap-6">
          {project.images.map((img, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <div className="relative aspect-video bg-bg-surface border border-border rounded-lg overflow-hidden">
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 960px"
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
