import { contact } from '@/lib/data/about'
import { ArrowUpRight } from 'lucide-react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const links = [
  { label: 'LinkedIn', href: contact.linkedin },
  { label: 'GitHub', href: contact.github },
  { label: 'Twitter', href: contact.twitter },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll>
          <p className="text-accent font-medium mb-4">Contact</p>
          <h2 className="text-section-sm md:text-section text-text-primary max-w-lg">
            Let&apos;s build something.
          </h2>
          <a
            href={`mailto:${contact.email}`}
            className="inline-block mt-6 text-xl md:text-2xl font-medium text-text-primary hover:text-accent transition-colors border-b border-border-strong hover:border-accent pb-1"
          >
            {contact.email}
          </a>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1} className="mt-10 flex flex-wrap gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors"
            >
              {link.label}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  )
}
