import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ServicesMarquee from '@/components/sections/ServicesMarquee'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import FAQ from '@/components/sections/FAQ'
import MetricsShowcase from '@/components/sections/MetricsShowcase'
import SectionCTA from '@/components/ui/SectionCTA'

export default function Home() {
  return (
    <>
      <Header />
      
      <main id="main-content">
        <Hero />
        <ServicesMarquee />
        <About />
        <SectionCTA
          heading="Ready to Work Together?"
          description="Let's discuss how I can help bring your vision to life with data-driven strategies and modern web solutions."
          ctaText="Start a Project"
          variant="light"
        />
        <Services />
        <SectionCTA
          heading="Need Something Specific?"
          description="From SEO to web development, I offer flexible packages starting at $300. Let's find the perfect solution for your needs."
          ctaText="View Services"
          ctaHref="/services"
          variant="default"
        />
        <Portfolio />
        <SectionCTA
          heading="Want Similar Results?"
          description="Every project starts with a conversation. Let's discuss how we can achieve your goals together."
          ctaText="Get in Touch"
          variant="light"
        />
        <FAQ />
        <MetricsShowcase />
      </main>

      <Footer />
    </>
  )
}


