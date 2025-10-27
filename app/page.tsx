import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ServicesMarquee from '@/components/sections/ServicesMarquee'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import FAQ from '@/components/sections/FAQ'
import Insights from '@/components/sections/Insights'

export default function Home() {
  return (
    <>
      <Header />
      
      <main id="main-content">
        <Hero />
        <ServicesMarquee />
        <About />
        <Services />
        <Portfolio />
        <FAQ />
        <Insights />
      </main>

      <Footer />
    </>
  )
}


