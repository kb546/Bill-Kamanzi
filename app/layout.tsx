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
  metadataBase: new URL('https://billkamanzi.com'),
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
    url: 'https://billkamanzi.com',
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

