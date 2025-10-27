import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutHero from '@/components/sections/AboutHero'
import AboutDetail from '@/components/sections/AboutDetail'
import EducationCertifications from '@/components/sections/EducationCertifications'
import ExperienceSection from '@/components/sections/ExperienceSection'
import WhatIDo from '@/components/sections/WhatIDo'
import FAQ from '@/components/sections/FAQ'

export const metadata: Metadata = {
  title: 'About Me | Bill Kamanzi',
  description:
    'Learn about my journey, philosophy, and expertise in Performance Marketing, Data Science, and Web Development.',
  openGraph: {
    title: 'About Me | Bill Kamanzi',
    description:
      'Learn about my journey, philosophy, and expertise in Performance Marketing, Data Science, and Web Development.',
    images: ['/images/profile.png'],
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutDetail />
        <section id="education">
          <EducationCertifications />
        </section>
        <ExperienceSection />
        <WhatIDo />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

