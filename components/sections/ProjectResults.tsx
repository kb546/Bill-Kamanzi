import type { Project } from '@/lib/data/projectsReal'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function ProjectResults({ project }: { project: Project }) {
  if (!project.results || project.results.length === 0) return null

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-xl font-bold text-text-primary mb-8">Results</h2>
        </AnimateOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.results.map((result, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="p-6 bg-bg-surface border border-border clip-corner">
                <p className="text-3xl font-bold text-accent mb-2">{result.value}</p>
                <p className="text-sm font-medium text-text-primary mb-1">{result.metric}</p>
                <p className="text-sm text-text-muted">{result.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
