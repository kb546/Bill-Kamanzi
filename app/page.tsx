import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/ui/BackToTop'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
