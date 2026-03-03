import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#111111',
          surface: '#1A1A1A',
          hover: '#222222',
        },
        border: {
          DEFAULT: '#2A2A2A',
          strong: '#333333',
        },
        accent: {
          DEFAULT: '#3c71ec',
          hover: '#2b5ad4',
          muted: 'rgba(60, 113, 236, 0.1)',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#A0A0A0',
          muted: '#666666',
        },
      },
      fontFamily: {
        sans: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.05', fontWeight: '800', letterSpacing: '-0.02em' }],
        'hero-sm': ['2.25rem', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.02em' }],
        'section': ['2.5rem', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.02em' }],
        'section-sm': ['1.75rem', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
      },
    },
  },
  plugins: [],
}

export default config
