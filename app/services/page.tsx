import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServicesPageHero from '@/components/sections/ServicesPageHero'
import AllServicesSection from '@/components/sections/AllServicesSection'
import FAQ from '@/components/sections/FAQ'

export const metadata: Metadata = {
  title: 'Services | Bill Kamanzi',
  description:
    'Explore my comprehensive range of services including Web Development, UI/UX Design, Digital Marketing, Paid Ads, Webflow Development, Branding, and Project Management.',
  openGraph: {
    title: 'Services | Bill Kamanzi',
    description:
      'Explore my comprehensive range of services including Web Development, UI/UX Design, Digital Marketing, Paid Ads, Webflow Development, Branding, and Project Management.',
    images: ['/images/profile.png'],
  },
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesPageHero />
        <AllServicesSection />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}


