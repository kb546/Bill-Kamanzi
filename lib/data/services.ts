import { TrendingUp, Code, Sparkles, MessageSquare, BarChart3, Search, Globe } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: React.ElementType
}

export const services: Service[] = [
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Optimizing user journeys. We analyse, iterate, and enhance interfaces to ensure seamless interactions and exceptional user experiences. Aesthetic appeal meets functionality in our UI designs. We focus on creating visually stunning interfaces design.',
    icon: Sparkles,
  },
  {
    id: 'webflow-development',
    title: 'Webflow Development',
    description: "We create bespoke Webflow designs tailored to your brand's unique identity. Our design process involves understanding your vision, audience, and goals to craft a website that stands out. With a focus on aesthetics and user experience.",
    icon: Code,
  },
  {
    id: 'logo-branding',
    title: 'Logo And Branding',
    description: "Creating a memorable brand identity is essential for standing out in today's competitive market. Our logo and branding services are designed to establish a strong, cohesive, and visually appealing presence for your success business.",
    icon: Sparkles,
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'My journey into the world of social media marketing began with a fascination for how digital platforms could bring people together and amplify messages. This interest led me to pursue a degree in Social Media Marketing specialist at 2024.',
    icon: MessageSquare,
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    description: 'Driving measurable results through data-driven campaigns across Google Ads, Meta Ads, and TikTok Ads. I focus on ROI optimization, conversion tracking, and strategic ad placement to maximize your marketing budget.',
    icon: TrendingUp,
  },
  {
    id: 'data-science-analytics',
    title: 'Data Science & Analytics',
    description: 'Transforming raw data into actionable insights using Python, R, and advanced visualization tools. I specialize in predictive modeling, statistical analysis, and creating interactive dashboards that drive informed decision-making.',
    icon: BarChart3,
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Building modern, responsive, and high-performance web applications using React.js, Next.js, and TypeScript. I create seamless user experiences with clean code architecture and cutting-edge frontend technologies.',
    icon: Globe,
  },
  {
    id: 'seo-strategy',
    title: 'SEO Strategy',
    description: 'Implementing comprehensive SEO strategies to improve organic search rankings and drive qualified traffic. From technical SEO to content optimization, I help businesses increase their online visibility and reach their target audience.',
    icon: Search,
  },
]

export const servicesHero = {
  heading: 'Elevating Brands Through Design And Technology',
  description: 'We bring your ideas to life with visually stunning, responsive, and user-friendly websites. We proved best services for your business website.',
}

