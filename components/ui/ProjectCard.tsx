import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/data/projectsReal'

export default function ProjectCard({ project }: { project: Project }) {
  const href = `/projects/${project.slug}`
  const topResult = project.results?.[0]

  return (
    <Link href={href} className="group block">
      <div className="bg-bg-surface border border-border clip-corner p-6 md:p-8 transition-all duration-200 hover:border-border-strong hover:-translate-y-1">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-text-muted mt-1">{project.year}</p>
          </div>
          <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
        </div>

        {topResult && (
          <p className="text-2xl font-bold text-accent mb-3">
            {topResult.value}
            <span className="text-sm font-medium text-text-muted ml-2">{topResult.metric}</span>
          </p>
        )}

        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.category.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 text-xs font-medium bg-accent-muted text-accent rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
