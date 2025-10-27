import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProjectsHero from '@/components/sections/ProjectsHero'
import ProjectGrid from '@/components/sections/ProjectGrid'

export const metadata: Metadata = {
  title: 'My Projects | Bill Kamanzi',
  description: 'Explore my portfolio showcasing social media growth, web development, and digital marketing projects. From viral TikTok campaigns to custom WordPress solutions.',
  openGraph: {
    title: 'My Projects | Bill Kamanzi',
    description: 'Explore my portfolio showcasing social media growth, web development, and digital marketing projects.',
    images: ['/images/profile.png'],
  },
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectsHero />
        <ProjectGrid />
      </main>
      <Footer />
    </>
  )
}

