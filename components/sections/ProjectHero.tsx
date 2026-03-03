import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { Project } from '@/lib/data/projectsReal'

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/#projects" className="hover:text-text-primary transition-colors">Projects</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-text-primary">{project.title}</span>
        </nav>

        <h1 className="text-hero-sm md:text-hero text-text-primary">{project.title}</h1>
        <p className="text-body-lg text-text-secondary mt-4 max-w-2xl">{project.description}</p>

        <div className="flex flex-wrap gap-3 mt-6">
          {project.category.slice(0, 4).map((cat) => (
            <span key={cat} className="px-3 py-1 text-xs font-medium bg-accent-muted text-accent rounded-full">
              {cat}
            </span>
          ))}
          <span className="px-3 py-1 text-xs font-medium bg-bg-surface text-text-muted rounded-full border border-border">
            {project.year}
          </span>
        </div>
      </div>
    </section>
  )
}
