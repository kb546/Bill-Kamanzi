'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import Logo from '@/components/ui/Logo'

const navItems = [
  { name: 'Home', href: '/', isPage: true },
  { name: 'About', href: '/about', isPage: true },
  { name: 'Services', href: '/services', isPage: true },
  { name: 'Projects', href: '/projects', isPage: true },
  { name: 'Contact', href: '/contact', isPage: true },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPage: boolean) => {
    if (isPage) {
      // Let the browser handle page navigation
      setIsMobileMenuOpen(false)
      return
    }
    
    // Handle section anchor navigation
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a 
          href="/" 
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"
          aria-label="Go to homepage"
        >
          <Logo variant="color" size="md" className="md:scale-125" />
        </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.isPage)}
                  className="text-sm lg:text-base font-medium text-gray-700 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg px-2 py-1"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-white border-t border-gray-200"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href, item.isPage)
                      setIsMobileMenuOpen(false)
                    }}
                    className="block py-3 text-base font-medium text-gray-700 hover:text-primary-600 transition-colors touch-manipulation"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}


