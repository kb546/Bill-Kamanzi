import { projects } from '@/lib/data/projectsReal'
import ProjectCard from '@/components/ui/ProjectCard'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function Projects() {
  const featured = projects.slice(0, 4)

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <p className="text-accent font-medium mb-4">Projects</p>
          <h2 className="text-section-sm md:text-section text-text-primary">
            Things I&apos;ve built.
          </h2>
        </AnimateOnScroll>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
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
