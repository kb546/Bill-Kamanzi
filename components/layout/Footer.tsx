import { contact } from '@/lib/data/about'

const socialLinks = [
  { label: 'LinkedIn', href: contact.linkedin },
  { label: 'GitHub', href: contact.github },
  { label: 'Twitter', href: contact.twitter },
  { label: 'Instagram', href: contact.instagram },
]

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Bill Kamanzi
        </p>
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
