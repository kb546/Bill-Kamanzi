import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProjectHero from '@/components/sections/ProjectHero'
import ProjectOverview from '@/components/sections/ProjectOverview'
import ProjectResults from '@/components/sections/ProjectResults'
import ProjectGallery from '@/components/sections/ProjectGallery'
import MoreProjects from '@/components/sections/MoreProjects'
import ProjectCTA from '@/components/sections/ProjectCTA'
import { getProjectBySlug, getAllProjects } from '@/lib/data/projectsReal'

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
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.metaTitle,
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
        {project.images.length > 1 && <ProjectGallery project={project} />}
        <MoreProjects currentProjectId={project.id} />
        <ProjectCTA gradientFrom={project.gradientFrom} gradientTo={project.gradientTo} />
      </main>
      <Footer />
    </>
  )
}

