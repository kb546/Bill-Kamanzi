import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Consistent type scale system
        'h1-hero': ['3rem', { lineHeight: '1.1', fontWeight: '700' }], // 48px
        'h1-hero-md': ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }], // 60px
        'h1-hero-lg': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }], // 72px
        'h2-section': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }], // 36px
        'h2-section-md': ['3rem', { lineHeight: '1.2', fontWeight: '700' }], // 48px
        'h2-section-lg': ['3.75rem', { lineHeight: '1.2', fontWeight: '700' }], // 60px
        'h3-subsection': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }], // 24px
        'h3-subsection-md': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }], // 30px
      },
      lineHeight: {
        relaxed: '1.7',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out 0.5s infinite',
        'float-slow': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-subtle': 'bounce-subtle 0.6s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}

export default config

