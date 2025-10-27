import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactHero from '@/components/sections/ContactHero'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Bill Kamanzi - Let\'s Work Together',
  description:
    'Ready to elevate your brand? Get in touch to discuss your project. Web development, digital marketing, UI/UX design, and more.',
  openGraph: {
    title: 'Contact Bill Kamanzi - Let\'s Build Something Amazing',
    description:
      'Professional web development, digital marketing, and design services. Contact me to start your next project.',
    images: ['/images/profile.png'],
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

