import { Code2, TrendingUp, Megaphone, ClipboardList, Sparkles, Palette } from 'lucide-react'

export interface ServiceDetail {
  id: string
  slug: string
  name: string
  shortDescription: string
  fullDescription: string
  icon: React.ElementType
  gradientFrom: string
  gradientTo: string
  keyPoints: string[]
  tools: string[]
  outcomes: string[]
  process?: {
    step: string
    description: string
  }[]
}

export const servicesDetailed: ServiceDetail[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    name: 'Web Development & Optimization',
    shortDescription:
      'Build full-featured, fast, and optimized websites with modern frameworks that deliver exceptional user experiences.',
    fullDescription:
      'I specialize in creating high-performance websites using modern technologies like React.js, Next.js, and Tailwind CSS. Every website I build is optimized for speed, SEO, and user experience. From responsive design to custom features, I ensure your website not only looks great but performs exceptionally well across all devices and platforms.',
    icon: Code2,
    gradientFrom: '#10b981',
    gradientTo: '#059669',
    keyPoints: [
      'SEO Optimized Code for better search engine rankings',
      'Performance-driven Design that loads in under 2 seconds',
      'Custom Features tailored to your business needs',
      'End-to-End Support from design to deployment and beyond',
    ],
    tools: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Framer Motion',
      'Vercel',
      'Git',
    ],
    outcomes: [
      'Improve website load times by up to 40%',
      'Increase user engagement with intuitive interfaces',
      'Boost conversion rates through optimized user flows',
      'Enhance mobile experience with responsive design',
    ],
    process: [
      {
        step: 'Discovery & Planning',
        description:
          'Understanding your goals, target audience, and technical requirements',
      },
      {
        step: 'Design & Prototyping',
        description: 'Creating wireframes and high-fidelity mockups for approval',
      },
      {
        step: 'Development',
        description:
          'Building the website with clean, scalable code and best practices',
      },
      {
        step: 'Testing & Launch',
        description:
          'Thorough testing across devices and browsers before deployment',
      },
      {
        step: 'Support & Maintenance',
        description: 'Ongoing support, updates, and performance monitoring',
      },
    ],
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    name: 'Organic Digital Marketing',
    shortDescription:
      'Manage and optimize social media accounts, create engaging content, and implement SEO strategies to grow organic traffic.',
    fullDescription:
      'I help businesses build a strong organic online presence through strategic social media management and comprehensive SEO services. From creating engaging content that resonates with your audience to optimizing your website for search engines, I focus on sustainable growth strategies that deliver long-term results. My approach combines creative content creation with data-driven optimization to maximize your reach and engagement.',
    icon: TrendingUp,
    gradientFrom: '#0ea5e9',
    gradientTo: '#0284c7',
    keyPoints: [
      'Increase organic traffic by up to 50% with proven SEO strategies',
      'Boost brand awareness and engagement across social platforms',
      'Content strategy and creation that converts visitors into customers',
      'SEO optimization and link building for long-term visibility',
    ],
    tools: [
      'Google Analytics',
      'SEMrush',
      'Ahrefs',
      'Canva',
      'Buffer',
      'Hootsuite',
      'WordPress',
      'Google Search Console',
    ],
    outcomes: [
      'Grow organic search traffic sustainably',
      'Build engaged social media communities',
      'Improve brand visibility and recognition',
      'Generate qualified leads through content',
    ],
    process: [
      {
        step: 'Audit & Analysis',
        description:
          'Comprehensive analysis of current digital presence and competitors',
      },
      {
        step: 'Strategy Development',
        description: 'Creating a tailored content and SEO strategy aligned with goals',
      },
      {
        step: 'Content Creation',
        description: 'Producing high-quality blog posts, social media content, and visuals',
      },
      {
        step: 'SEO Implementation',
        description:
          'On-page optimization, technical SEO, and link building campaigns',
      },
      {
        step: 'Monitoring & Optimization',
        description: 'Regular performance tracking and strategy refinement',
      },
    ],
  },
  {
    id: 'paid-ads',
    slug: 'paid-ads',
    name: 'Paid Ads Campaign Management',
    shortDescription:
      'Manage and optimize Meta Ads, Google Ads, and TikTok Ads with engaging video and image content for maximum ROI.',
    fullDescription:
      'I specialize in creating and managing high-performing paid advertising campaigns across Meta (Facebook & Instagram), Google Ads, and TikTok. From crafting scroll-stopping creatives to optimizing targeting and bidding strategies, I focus on delivering measurable results. I create engaging video ads and eye-catching images that capture attention and drive conversions, while continuously optimizing campaigns to maximize your return on ad spend (ROAS).',
    icon: Megaphone,
    gradientFrom: '#10b981',
    gradientTo: '#14b8a6',
    keyPoints: [
      'Target the right audiences with precision for best ROI',
      'Create engaging video and image content that converts',
      'Optimize campaigns continuously for peak performance',
      'Track and improve CTR, ROAS, and conversion metrics',
    ],
    tools: [
      'Meta Ads Manager',
      'Google Ads',
      'TikTok Ads',
      'Google Analytics',
      'Canva',
      'Adobe Creative Suite',
      'Tag Manager',
      'Looker Studio',
    ],
    outcomes: [
      'Boost ROI by up to 150% with optimized campaigns',
      'Reduce cost per acquisition (CPA) by 30-40%',
      'Increase click-through rates with compelling creatives',
      'Scale campaigns profitably across platforms',
    ],
    process: [
      {
        step: 'Campaign Strategy',
        description:
          'Defining objectives, target audiences, and budget allocation',
      },
      {
        step: 'Creative Development',
        description: 'Creating high-converting video ads, images, and copy',
      },
      {
        step: 'Campaign Setup',
        description: 'Building campaigns with proper tracking and targeting',
      },
      {
        step: 'Launch & Monitor',
        description: 'Going live and closely monitoring early performance',
      },
      {
        step: 'Optimize & Scale',
        description:
          'Continuous A/B testing and scaling winning campaigns',
      },
    ],
  },
  {
    id: 'project-management',
    slug: 'project-management',
    name: 'Project Management',
    shortDescription:
      'Oversee project execution, ensuring milestones are met, budgets maintained, and quality delivery achieved.',
    fullDescription:
      'I provide comprehensive project management services to ensure your digital projects run smoothly from start to finish. With experience managing cross-functional teams and complex timelines, I focus on clear communication, efficient resource allocation, and meeting deadlines without compromising quality. Whether you need someone to coordinate your marketing campaigns, web development projects, or business initiatives, I ensure everything stays on track and within budget.',
    icon: ClipboardList,
    gradientFrom: '#0ea5e9',
    gradientTo: '#10b981',
    keyPoints: [
      'Manage resources and timelines efficiently for on-time delivery',
      'Maintain clear client communication and regular reporting',
      'Ensure budget oversight and cost optimization',
      'Deliver quality assurance and project excellence',
    ],
    tools: [
      'Asana',
      'Trello',
      'Monday.com',
      'Slack',
      'Google Workspace',
      'Notion',
      'Jira',
      'Microsoft Project',
    ],
    outcomes: [
      'Deliver projects on time and within budget',
      'Improve team collaboration and productivity',
      'Reduce project risks through proactive planning',
      'Ensure stakeholder satisfaction and alignment',
    ],
    process: [
      {
        step: 'Project Initiation',
        description: 'Defining scope, objectives, and success criteria',
      },
      {
        step: 'Planning & Setup',
        description:
          'Creating detailed project plans, timelines, and resource allocation',
      },
      {
        step: 'Execution & Coordination',
        description:
          'Managing day-to-day activities and team coordination',
      },
      {
        step: 'Monitoring & Reporting',
        description: 'Tracking progress and providing regular status updates',
      },
      {
        step: 'Delivery & Closure',
        description: 'Final review, handoff, and project documentation',
      },
    ],
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    shortDescription:
      'Optimize user journeys with interfaces that blend aesthetic appeal with functionality for exceptional user experiences.',
    fullDescription:
      'I specialize in creating user-centered designs that not only look stunning but also deliver seamless interactions and exceptional experiences. Through careful analysis, iterative design, and user testing, I craft interfaces that enhance usability, increase engagement, and drive conversions. My design process focuses on understanding your users\' needs and behaviors to create intuitive experiences that achieve your business goals.',
    icon: Sparkles,
    gradientFrom: '#14b8a6',
    gradientTo: '#059669',
    keyPoints: [
      'User research and persona development for targeted design',
      'Wireframing and prototyping for early validation',
      'Visual design that aligns with brand identity',
      'Usability testing and iterative improvements',
    ],
    tools: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'InVision',
      'Miro',
      'UsabilityHub',
      'Hotjar',
      'Maze',
    ],
    outcomes: [
      'Improve user satisfaction scores by up to 45%',
      'Increase conversion rates with optimized flows',
      'Reduce bounce rates through better UX',
      'Create consistent brand experiences across platforms',
    ],
    process: [
      {
        step: 'Research & Discovery',
        description:
          'Understanding users, competitors, and business requirements',
      },
      {
        step: 'Wireframing',
        description: 'Creating low-fidelity layouts to establish structure',
      },
      {
        step: 'Visual Design',
        description: 'Developing high-fidelity mockups with brand styling',
      },
      {
        step: 'Prototyping',
        description: 'Building interactive prototypes for user testing',
      },
      {
        step: 'Testing & Iteration',
        description: 'Gathering feedback and refining the design',
      },
    ],
  },
  {
    id: 'webflow-development',
    slug: 'webflow-development',
    name: 'Webflow Development',
    shortDescription:
      'Create bespoke Webflow designs tailored to your brand with focus on aesthetics, user experience, and easy content management.',
    fullDescription:
      'I design and develop custom Webflow websites that are not only visually stunning but also easy to manage. Webflow combines the power of code with the ease of visual design, allowing for pixel-perfect websites without compromising on functionality. Whether you need a portfolio, business site, or e-commerce platform, I create responsive Webflow sites that are optimized for performance and designed for your success.',
    icon: Code2,
    gradientFrom: '#10b981',
    gradientTo: '#0ea5e9',
    keyPoints: [
      'Custom Webflow design tailored to your brand identity',
      'Fully responsive across all devices and screen sizes',
      'CMS setup for easy content updates without coding',
      'SEO optimization and performance tuning built-in',
    ],
    tools: [
      'Webflow',
      'Figma',
      'Adobe Creative Suite',
      'Google Analytics',
      'Mailchimp',
      'Zapier',
      'Finsweet',
      'Memberstack',
    ],
    outcomes: [
      'Launch professional websites in 2-4 weeks',
      'Empower your team to update content easily',
      'Achieve 95+ page speed scores',
      'Stand out with unique, custom designs',
    ],
    process: [
      {
        step: 'Brand Discovery',
        description: 'Understanding your vision, audience, and goals',
      },
      {
        step: 'Design Concept',
        description: 'Creating mockups that capture your brand essence',
      },
      {
        step: 'Webflow Development',
        description: 'Building the site with interactions and animations',
      },
      {
        step: 'CMS & Content',
        description: 'Setting up CMS and adding your content',
      },
      {
        step: 'Launch & Training',
        description: 'Going live and training your team on Webflow',
      },
    ],
  },
  {
    id: 'logo-branding',
    slug: 'logo-branding',
    name: 'Logo And Branding',
    shortDescription:
      'Create memorable brand identities with cohesive visual design that establishes a strong presence in competitive markets.',
    fullDescription:
      'I help businesses establish a strong, memorable brand identity that stands out in today\'s competitive market. From logo design to complete brand guidelines, I create cohesive visual identities that resonate with your target audience and communicate your values. My branding services ensure consistency across all touchpoints, building trust and recognition that drives business success.',
    icon: Palette,
    gradientFrom: '#0284c7',
    gradientTo: '#0d9488',
    keyPoints: [
      'Custom logo design that captures brand essence',
      'Complete brand guidelines for consistent application',
      'Marketing collateral design across all platforms',
      'Brand strategy consultation and positioning',
    ],
    tools: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Figma',
      'Canva Pro',
      'Brandmark',
      'Coolors',
      'Font Squirrel',
      'Dribbble',
    ],
    outcomes: [
      'Stand out with a unique, professional identity',
      'Build brand recognition and customer loyalty',
      'Ensure consistent branding across all channels',
      'Increase perceived value and credibility',
    ],
    process: [
      {
        step: 'Brand Discovery',
        description: 'Understanding your business, values, and target market',
      },
      {
        step: 'Concept Development',
        description: 'Creating multiple logo concepts and mood boards',
      },
      {
        step: 'Refinement',
        description: 'Refining chosen concept based on feedback',
      },
      {
        step: 'Brand Guidelines',
        description: 'Developing comprehensive brand style guide',
      },
      {
        step: 'Delivery & Support',
        description: 'Providing all assets and ongoing brand support',
      },
    ],
  },
]

export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  return servicesDetailed.find((service) => service.slug === slug)
}

