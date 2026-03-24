import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import './globals.css'

const satoshi = localFont({
  src: [
    { path: './fonts/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Satoshi-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Satoshi-Bold.woff2', weight: '700', style: 'normal' },
    { path: './fonts/Satoshi-Black.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
})

const generalSans = localFont({
  src: [
    { path: './fonts/GeneralSans-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/GeneralSans-Semibold.woff2', weight: '600', style: 'normal' },
    { path: './fonts/GeneralSans-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://bilkamanzi.com'),
  title: 'Bill Kamanzi | Full-Stack Developer & Growth Marketer',
  description: 'Full-stack developer and growth marketer based in Dubai. I build, ship, and scale web applications. Creator of ArbHunter and Cravd.',
  keywords: ['Full-Stack Developer', 'Product Engineer', 'Growth Marketer', 'SEO Strategist', 'Performance Marketing', 'React Developer', 'Next.js Developer', 'Web Developer Dubai', 'Growth Engineer', 'SaaS', 'Data Science'],
  authors: [{ name: 'Bill Kamanzi' }],
  creator: 'Bill Kamanzi',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bilkamanzi.com',
    siteName: 'Bill Kamanzi',
    title: 'Bill Kamanzi | Full-Stack Developer & Growth Marketer',
    description: 'Full-stack developer and growth marketer based in Dubai. I build, ship, and scale web applications.',
    images: [
      {
        url: '/images/site-icon-blue-bg.png',
        width: 1200,
        height: 630,
        alt: 'Bill Kamanzi - Full-Stack Developer and Growth Marketer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bill Kamanzi | Full-Stack Developer & Growth Marketer',
    description: 'Full-stack developer and growth marketer based in Dubai. I build, ship, and scale web applications.',
    images: ['/images/site-icon-blue-bg.png'],
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
    <html lang="en" className={`${satoshi.variable} ${generalSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfilePage',
              url: 'https://bilkamanzi.com',
              name: 'Bill Kamanzi - Full-Stack Developer & Growth Marketer',
              mainEntity: {
                '@type': 'Person',
                name: 'Bill Kamanzi',
                jobTitle: 'Full-Stack Developer & Growth Marketer',
                description: 'Full-stack developer and growth marketer based in Dubai who builds, ships, and scales web applications.',
                url: 'https://bilkamanzi.com',
                sameAs: [
                  'https://www.linkedin.com/in/billkamanzi',
                  'https://github.com/kb546',
                  'https://x.com/billkamanzi',
                  'https://www.instagram.com/billkamanzi',
                ],
                knowsAbout: [
                  'Full-Stack Development',
                  'Next.js',
                  'React',
                  'TypeScript',
                  'SEO',
                  'Performance Marketing',
                  'Data Science',
                  'Python',
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          Skip to main content
        </a>
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
      </body>
    </html>
  )
}
