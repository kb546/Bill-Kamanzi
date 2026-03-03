import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProjectHero from '@/components/sections/ProjectHero'
import ProjectOverview from '@/components/sections/ProjectOverview'
import ProjectResults from '@/components/sections/ProjectResults'
import ProjectGallery from '@/components/sections/ProjectGallery'
import { getProjectBySlug, getAllProjects } from '@/lib/data/projectsReal'
import { ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: `${project.title} | Bill Kamanzi`,
    description: project.metaDescription,
    keywords: project.keywords,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.heroImage],
    },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        <ProjectHero project={project} />
        <ProjectOverview project={project} />
        <ProjectResults project={project} />
        <ProjectGallery project={project} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-border">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all projects
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
