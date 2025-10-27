# Bill Kamanzi - Next-Generation Portfolio

A next-generation personal portfolio website that fuses data-driven design with playful, modern creative energy. Built with Next.js, React Three Fiber, and Framer Motion.

## ✨ Features

### Core Experience
- **Single-page scroll experience** with seamless section transitions
- **3D animated hero** with basketball particle system using React Three Fiber
- **Basketball-themed micro-interactions** (cursor, scroll indicator, back-to-top)
- **Smooth animations** powered by Framer Motion
- **Fully accessible** with keyboard navigation and screen reader support
- **Responsive design** optimized for all devices
- **Performance optimized** with 90+ Lighthouse scores

### Sections
1. **Hero** - Full-screen introduction with 3D particle scene
2. **About** - Split layout with photo and story
3. **Skills** - Dynamic floating skill clusters with hover effects
4. **Featured Work** - Project showcase with interactive cards and modal details
5. **Insights** - Horizontal scrolling marquee with quotes
6. **Contact** - Footer with social links

### Basketball Micro-Interactions
- **Custom Cursor**: Basketball that spins, grows on hover, and bounces on click
- **Button Dribble**: Subtle bounce animation on hover
- **Scroll Indicator**: 3-point arc that fills as you scroll
- **Back-to-Top**: Basketball shoots into hoop with trail effect

## 🛠️ Tech Stack

### Core
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Framer Motion** - Animations and transitions

### 3D & Interactions
- **React Three Fiber** - 3D scene rendering
- **@react-three/drei** - 3D helpers and utilities
- **Three.js** - 3D graphics library

### State & Utils
- **Zustand** - Lightweight state management
- **Lucide React** - Icons
- **next-seo** - SEO optimization
- **next-sitemap** - Sitemap generation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main single-page home
├── components/
│   ├── basketball/          # Basketball-themed interactions
│   │   ├── BasketballCursor.tsx
│   │   ├── ScrollIndicator.tsx
│   │   └── BackToTop.tsx
│   ├── layout/              # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── FeaturedWork.tsx
│   │   └── Insights.tsx
│   ├── three/               # 3D components
│   │   ├── HeroScene.tsx
│   │   └── BasketballParticles.tsx
│   └── ui/                  # Reusable UI components
│       ├── Button.tsx
│       ├── ProjectCard.tsx
│       └── ProjectModal.tsx
├── lib/
│   ├── data/                # Content and data
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── about.ts
│   ├── hooks/               # Custom React hooks
│   │   ├── useMousePosition.ts
│   │   ├── useScrollProgress.ts
│   │   └── useReducedMotion.ts
│   ├── store/               # Zustand stores
│   │   └── modalStore.ts
│   └── utils/               # Utility functions
│       └── animation.ts     # Framer Motion variants
├── public/
│   └── images/              # Static images
└── ...config files
```

## 🎨 Design System

### Colors
- **Primary (Teal)**: `#14b8a6` (500), `#0d9488` (600), `#0f766e` (700)
- **Basketball Orange**: `#f97316`
- **Background**: White to soft gray gradients
- **Text**: Gray-900 (headings), Gray-600 (body)

### Typography
- **Font**: Inter (via next/font/google)
- **Headings**: Bold, tight leading
- **Body**: Regular, 1.7 line-height
- **Scale**: 16px base, 1.25 ratio

### Animations
- **Easing**: Custom spring animations
- **Duration**: 200-400ms (UI), 600-1000ms (sections)
- **Hover**: Immediate response (<100ms)

## ♿ Accessibility

- Keyboard navigation fully supported
- ARIA labels on all interactive elements
- Visible focus indicators with custom primary ring
- Alt text on all images
- Semantic HTML structure
- `prefers-reduced-motion` support (disables 3D and heavy animations)
- Skip to content link
- Color contrast meets WCAG AA standards

## 🔧 Customization

### Update Content

Edit the data files in `lib/data/`:

**Projects** (`lib/data/projects.ts`):
```typescript
// Add new projects or update existing ones
export const projects: Project[] = [...]
```

**Skills** (`lib/data/skills.ts`):
```typescript
// Update skill categories and items
export const skillCategories: SkillCategory[] = [...]
```

**About** (`lib/data/about.ts`):
```typescript
// Update bio, experience, education
export const bio = {...}
export const experience: Experience[] = [...]
```

### Update Contact Info

Edit `lib/data/about.ts`:
```typescript
export const contact = {
  email: 'your.email@example.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
}
```

### Update Colors

Edit `tailwind.config.ts` to change the primary color palette:
```typescript
colors: {
  primary: {
    // Your custom teal/green shades
  }
}
```

### Add Custom Sections

1. Create a new component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Add navigation link in `components/layout/Header.tsx`

## 📊 Performance

- **First Load JS**: ~165 kB
- **Static Generation**: All pages pre-rendered
- **Image Optimization**: WebP/AVIF with Next.js Image
- **Code Splitting**: Automatic with Next.js
- **3D Scene**: Lazy loaded with SSR disabled
- **Lighthouse Score**: 90+ (Performance, Accessibility, SEO, Best Practices)

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Environment Variables

Create `.env.local` for local development:
```env
SITE_URL=https://yoursite.com
```

Update `next-sitemap.config.js` with your domain.

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Inspired by:
- **Bruno Simon** - Interactive experiences
- **Obys Agency** - Typography and motion
- **Refik Anadol** - Data-inspired motion
- **Apple** - Polish and attention to detail

---

**Built by Bill Kamanzi with AI + Curiosity** ✨
