import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ExternalLink, Github, Download } from 'lucide-react'
import type { Project } from '@/lib/data/projectsReal'

const linkIcons: Record<string, { label: string; icon: typeof ExternalLink }> = {
  website: { label: 'Visit Website', icon: ExternalLink },
  blog: { label: 'Blog', icon: ExternalLink },
  github: { label: 'GitHub', icon: Github },
  linkedin: { label: 'LinkedIn', icon: ExternalLink },
  tiktok: { label: 'TikTok', icon: ExternalLink },
  youtube: { label: 'YouTube', icon: ExternalLink },
  twitter: { label: 'X', icon: ExternalLink },
  facebook: { label: 'Facebook', icon: ExternalLink },
  instagram: { label: 'Instagram', icon: ExternalLink },
}

export default function ProjectHero({ project }: { project: Project }) {
  const links = project.links
    ? Object.entries(project.links).filter(([, url]) => url)
    : []

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

        <div className="flex items-center gap-4 mb-2">
          {project.logo && (
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              width={48}
              height={48}
              className="rounded-lg object-contain"
            />
          )}
          <h1 className="font-display text-hero-sm md:text-hero text-text-primary">{project.title}</h1>
        </div>
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

        {/* Project Links */}
        {(links.length > 0 || project.downloadLink) && (
          <div className="flex flex-wrap gap-3 mt-6">
            {links.map(([key, url]) => {
              const info = linkIcons[key] || { label: key, icon: ExternalLink }
              const Icon = info.icon
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border-strong text-text-primary hover:border-accent hover:text-accent transition-colors rounded-lg"
                >
                  <Icon className="w-4 h-4" />
                  {info.label}
                </a>
              )
            })}
            {project.downloadLink && (
              <a
                href={project.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border-strong text-text-primary hover:border-accent hover:text-accent transition-colors rounded-lg"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            )}
          </div>
        )}

        {/* Hero Image */}
        {project.heroImage && (
          <div className="mt-10 relative aspect-video bg-bg-surface border border-border clip-corner overflow-hidden">
            <Image
              src={project.heroImage}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 960px"
              priority
            />
          </div>
        )}
      </div>
    </section>
  )
}
