import type { Project } from '@/lib/data/projectsReal'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function ProjectOverview({ project }: { project: Project }) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        {/* Overview */}
        <AnimateOnScroll>
          <h2 className="font-display text-xl font-bold text-text-primary mb-4">Overview</h2>
          <p className="text-body-lg text-text-secondary leading-relaxed">{project.overview}</p>
        </AnimateOnScroll>

        {/* What I Did */}
        <AnimateOnScroll>
          <h2 className="font-display text-xl font-bold text-text-primary mb-6">What I Did</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.myRole.map((role, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-bg-surface border border-border rounded-lg">
                <span className="text-accent mt-0.5">&#x2022;</span>
                <span className="text-text-secondary text-sm">{role}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Challenges & Solutions */}
        {project.challenges && project.solutions && (
          <div className="grid md:grid-cols-2 gap-6">
            <AnimateOnScroll>
              <div className="p-6 bg-bg-surface border border-border clip-corner h-full">
                <h3 className="text-lg font-bold text-text-primary mb-4">Challenges</h3>
                <ul className="space-y-3">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-text-muted mt-0.5">&#x2013;</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <div className="p-6 bg-accent clip-corner h-full">
                <h3 className="text-lg font-bold text-white mb-4">Solutions</h3>
                <ul className="space-y-3">
                  {project.solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/85">
                      <span className="text-white mt-0.5">&#x2713;</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        )}

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <AnimateOnScroll>
            <h2 className="font-display text-xl font-bold text-text-primary mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 text-sm bg-bg-surface border border-border rounded-full text-text-secondary">
                  {tech}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  )
}
