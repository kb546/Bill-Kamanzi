import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServiceHero from '@/components/sections/ServiceHero'
import ServiceDetails from '@/components/sections/ServiceDetails'
import ServiceFAQ from '@/components/sections/ServiceFAQ'
import ServiceCTA from '@/components/sections/ServiceCTA'
import { getServiceBySlug } from '@/lib/data/servicesDetailed'
import { paidAdsFAQs } from '@/lib/data/serviceFAQs'

export const metadata: Metadata = {
  title: 'Paid Ads Campaign Management | Bill Kamanzi',
  description:
    'Manage and optimize Meta Ads, Google Ads, and TikTok Ads with engaging video and image content for maximum ROI.',
  openGraph: {
    title: 'Paid Ads Campaign Management | Bill Kamanzi',
    description:
      'Manage and optimize Meta Ads, Google Ads, and TikTok Ads with engaging video and image content for maximum ROI.',
    images: ['/images/profile.png'],
  },
}

export default function PaidAdsPage() {
  const service = getServiceBySlug('paid-ads')

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
        <ServiceFAQ faqs={paidAdsFAQs} />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  )
}

