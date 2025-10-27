import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServiceHero from '@/components/sections/ServiceHero'
import ServiceDetails from '@/components/sections/ServiceDetails'
import ServiceFAQ from '@/components/sections/ServiceFAQ'
import ServiceCTA from '@/components/sections/ServiceCTA'
import { getServiceBySlug } from '@/lib/data/servicesDetailed'
import { digitalMarketingFAQs } from '@/lib/data/serviceFAQs'

export const metadata: Metadata = {
  title: 'Organic Digital Marketing | Bill Kamanzi',
  description:
    'Manage and optimize social media accounts, create engaging content, and implement SEO strategies to grow organic traffic.',
  openGraph: {
    title: 'Organic Digital Marketing | Bill Kamanzi',
    description:
      'Manage and optimize social media accounts, create engaging content, and implement SEO strategies to grow organic traffic.',
    images: ['/images/profile.png'],
  },
}

export default function DigitalMarketingPage() {
  const service = getServiceBySlug('digital-marketing')

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title={service.name}
          description={service.shortDescription}
          gradientFrom={service.gradientFrom}
          gradientTo={service.gradientTo}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: service.name, href: `/services/${service.slug}` },
          ]}
        />
        <ServiceDetails
          heading="What I Do"
          fullDescription={service.fullDescription}
          keyPoints={service.keyPoints}
          tools={service.tools}
          outcomes={service.outcomes}
          process={service.process}
        />
        <ServiceFAQ
          faqs={digitalMarketingFAQs}
          gradientFrom={service.gradientFrom}
          gradientTo={service.gradientTo}
        />
        <ServiceCTA
          gradientFrom={service.gradientFrom}
          gradientTo={service.gradientTo}
        />
      </main>
      <Footer />
    </>
  )
}

