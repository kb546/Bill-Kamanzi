'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-bg-surface/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between relative">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 z-10 hover:opacity-80 transition-opacity">
          <Image
            src="/images/profile-pic-bill.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <span className="text-lg font-bold text-text-primary">Bill K.</span>
        </Link>

        {/* Center: Nav links (desktop) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right: Toggle + CTA (desktop) */}
        <div className="hidden md:flex items-center gap-4 z-10">
          <ThemeToggle />
          <a
            href="mailto:bikamanzi@gmail.com"
            className="px-5 py-2 text-sm font-medium bg-accent text-white hover:bg-accent-hover transition-colors clip-corner-sm"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile: Toggle + Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-text-secondary hover:text-text-primary"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg-surface border-t border-border">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm text-text-secondary hover:text-text-primary transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:bikamanzi@gmail.com"
              className="block text-center px-5 py-2.5 text-sm font-medium bg-accent text-white hover:bg-accent-hover transition-colors clip-corner-sm mt-2"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
