'use client'

import { projects } from '@/lib/data/projectsReal'
import ProjectCard from '@/components/ui/ProjectCard'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import TextReveal from '@/components/ui/TextReveal'

export default function Projects() {
  const featured = projects

  return (
    <section id="projects" className="py-24 md:py-32 bg-accent-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div>
          <TextReveal
            text="Work"
            as="p"
            className="text-accent font-medium mb-4"
            mode="scramble"
          />
          <TextReveal
            text="Things I've shipped."
            as="h2"
            className="font-display text-section-sm md:text-section text-text-primary"
            mode="words"
            delay={0.2}
            highlightWords={['shipped.']}
            highlightClass="text-accent"
          />
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-4 sm:gap-6">
          {featured.map((project, i) => (
            <AnimateOnScroll key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
