'use client'

import Link from 'next/link'
import { Linkedin, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { contact } from '@/lib/data/about'
import Logo from '@/components/ui/Logo'
import { trackNavigation, trackSocialClick, trackCTAClick } from '@/lib/utils/analytics'

// Dribbble icon component (lucide doesn't have it)
function DribbbleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm8.19 6.55c1.44 1.76 2.31 4 2.31 6.45 0 .31-.01.62-.04.92-.24-.05-2.61-.53-4.99-.23-.09-.21-.17-.43-.27-.65-.27-.62-.56-1.24-.87-1.84 2.62-1.07 3.82-2.61 3.86-2.65zM12 2.04c2.56 0 4.89.98 6.64 2.58-.03.04-1.02 1.38-3.54 2.31-1.62-2.98-3.41-5.41-3.68-5.79.5-.07 1.02-.1 1.54-.1zM7.21 3.17c.27.38 2.03 2.8 3.66 5.74-4.62 1.23-8.69 1.21-9.14 1.21.61-3.11 2.78-5.68 5.48-6.95zM2.02 12.02v-.39c.44.01 5.37.07 10.32-1.43.35.68.68 1.37.99 2.07-.13.04-.26.07-.39.11-5.13 1.65-7.86 6.19-8.08 6.56-1.76-1.82-2.84-4.31-2.84-7.02zm9.98 9.96c-2.27 0-4.36-.77-6.02-2.07.18-.37 2.26-4.42 7.92-6.34.03-.01.05-.01.08-.02 1.46 3.78 2.06 6.95 2.21 7.84-1.34.56-2.81.87-4.34.87h.15zm6.21-1.53c-.12-.69-.67-3.76-1.99-7.49 2.25-.36 4.23.23 4.47.29-.33 2.24-1.49 4.18-3.14 5.63.51.57 1.09 1.09 1.66 1.57z"/>
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer id="contact" className="bg-gray-50 text-gray-900 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          
          {/* Column 1: Brand & Social */}
          <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <Logo variant="color" size="md" className="sm:scale-110" />
                <span className="text-lg sm:text-xl font-bold text-gray-900">Bill Kamanzi</span>
              </div>
              <p className="text-gray-600 text-sm mb-4 sm:mb-6 leading-relaxed max-w-sm">
              Performance Marketer, Data Scientist & Web Developer creating 
              data-driven strategies and seamless digital experiences.
            </p>
            
              {/* Social Icons */}
              <div className="flex gap-2 sm:gap-3">
                <motion.a
                  href="https://www.linkedin.com/in/bill-kamanzi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick('LinkedIn', 'https://www.linkedin.com/in/bill-kamanzi/')}
                  className="w-12 h-12 rounded-full bg-gray-200 hover:bg-[#0A66C2] flex items-center justify-center transition-all duration-200 touch-manipulation"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5 text-gray-700 hover:text-white transition-colors" />
                </motion.a>
                
                <motion.a
                  href="https://dribbble.com/bill-kamanzi"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick('Dribbble', 'https://dribbble.com/bill-kamanzi')}
                  className="w-12 h-12 rounded-full bg-gray-200 hover:bg-pink-600 flex items-center justify-center transition-all duration-200 touch-manipulation"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Dribbble Profile"
                >
                  <DribbbleIcon className="w-5 h-5 text-gray-700 hover:text-white transition-colors" />
                </motion.a>
                
                <motion.a
                  href="https://github.com/kb546"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick('GitHub', 'https://github.com/kb546')}
                  className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-800 flex items-center justify-center transition-all duration-200 touch-manipulation"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5 text-gray-700 hover:text-white transition-colors" />
                </motion.a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase mb-4 text-gray-700 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    onClick={() => trackNavigation(link.name, link.href, 'footer')}
                    className="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact & CTA */}
          <div>
            <h4 className="text-sm font-bold uppercase mb-4 text-gray-700 tracking-wide">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-xs mb-1 uppercase tracking-wide">Email</p>
                <a 
                  href={`mailto:${contact.email}`}
                  className="text-gray-900 font-medium hover:text-primary-600 transition-colors duration-200"
                >
                  {contact.email}
                </a>
              </div>
              
              <div>
                <p className="text-gray-500 text-xs mb-1 uppercase tracking-wide">Based In</p>
                <p className="text-gray-900">Dubai, UAE</p>
              </div>
              
                {/* CTA Button */}
                <Link
                  href="/contact"
                  onClick={() => trackCTAClick("Let's Work Together", 'footer')}
                  className="inline-block w-full sm:w-auto text-center px-6 py-3 min-h-[44px] bg-gradient-to-r from-primary-600 to-primary-500 
                            rounded-lg font-bold hover:shadow-lg hover:shadow-primary-500/50 
                            transition-all duration-200 hover:scale-105 text-sm touch-manipulation"
                >
                  Let's Work Together
                </Link>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-200 mb-8"></div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© {currentYear} Bill Kamanzi. All rights reserved.</p>
          <p>
            Made by Bill Kamanzi with{' '}
            <span className="gradient-text font-semibold">AI + Curiosity</span>
          </p>
        </div>
      </div>
    </footer>
  )
}


