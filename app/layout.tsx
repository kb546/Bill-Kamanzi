import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import StickyCTA from '@/components/ui/StickyCTA'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://bilkamanzi.com'),
  title: 'Bill Kamanzi | Performance Marketer, Data Scientist, Web Developer',
  description: 'Performance Marketer, Data Scientist, and Web Developer specializing in data-driven growth strategies, digital marketing, and web development.',
  keywords: ['Performance Marketing', 'Data Science', 'Web Development', 'Digital Marketing', 'SEO', 'Analytics'],
  authors: [{ name: 'Bill Kamanzi' }],
  creator: 'Bill Kamanzi',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', sizes: '32x32' },
      { url: '/favicon.svg', sizes: '16x16' },
    ],
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bilkamanzi.com',
    siteName: 'Bill Kamanzi Portfolio',
    title: 'Bill Kamanzi | Performance Marketer, Data Scientist, Web Developer',
    description: 'Performance Marketer, Data Scientist, and Web Developer specializing in data-driven growth strategies.',
    images: [
      {
        url: '/images/profile.png',
        width: 1200,
        height: 630,
        alt: 'Bill Kamanzi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bill Kamanzi | Performance Marketer, Data Scientist, Web Developer',
    description: 'Performance Marketer, Data Scientist, and Web Developer specializing in data-driven growth strategies.',
    images: ['/images/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans" suppressHydrationWarning>
        {/* Skip to main content link for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K93XMJT428"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K93XMJT428');
          `}
        </Script>

        {children}
        <StickyCTA />
      </body>
    </html>
  )
}

