export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  current?: boolean
}

export interface TimelineSubItem {
  id: string
  title: string
  company: string
  relationship: 'partnership' | 'client'
  description: string
}

export interface TimelineEntry {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  current?: boolean
  description: string
  subItems?: TimelineSubItem[]
}

export interface Education {
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string
  gpa?: string
  minor?: string
}

export const bio = {
  tagline: "I build products.",
  subtitle: "Product builder crafting tools at the intersection of code, data, and marketing",
  description: [
    "I'm a product builder based in Dubai. I ship software that solves real problems, combining full-stack development with performance marketing and data analysis.",
    "I built ArbHunter, an AI-powered ad arbitrage platform. I'm currently building Cravd, a social food rating app for Dubai. Before that, I scaled Quackr's social media to ~1M views at Long Tail Ventures.",
    "CS graduate from Rochester Institute of Technology. I believe in shipping fast, learning from users, and building in public.",
  ],
  journey: "From CS → to Data Science → to Building Products",
}

export const metrics = [
  {
    value: '15+',
    label: 'Projects Completed',
  },
  {
    value: '20+',
    label: 'Technologies',
  },
  {
    value: '1+',
    label: 'Year Experience',
  },
]

export const aboutHero = {
  heading: "About Me",
  intro: "Hello! I'm Bill Kamanzi, a Performance Marketer, Data Scientist & Web Developer combining data-driven insights with creative solutions to transform ideas into seamless digital experiences through strategic campaigns and innovative development.",
}

export const stats = [
  { value: '1+', label: 'Experience' },
  { value: '15+', label: 'Projects' },
]

export const experience: Experience[] = [
  {
    id: 'ltv-pm',
    title: 'Performance Marketer',
    company: 'Long Tail Ventures',
    location: 'Dubai, UAE',
    startDate: 'March 2025',
    endDate: 'Present',
    current: true,
  },
  {
    id: 'innov8',
    title: 'Marketing Specialist',
    company: 'Innov8 Business Incubator',
    location: 'Dubai, UAE',
    startDate: 'February 2025',
    endDate: 'Present',
    current: true,
  },
  {
    id: 'ltv-trainee',
    title: 'Trainee - Performance Marketing & Data Analysis',
    company: 'Long Tail Ventures',
    location: 'Dubai, UAE',
    startDate: 'January 2025',
    endDate: 'March 2025',
  },
  {
    id: 'accenture',
    title: 'Data Analytics and Visualization',
    company: 'Accenture North America',
    location: 'Dubai, UAE',
    startDate: 'August 2024',
    endDate: 'August 2024',
  },
  {
    id: 'dpworld',
    title: 'IT Intern',
    company: 'DP World',
    location: 'Dubai, UAE',
    startDate: 'July 2023',
    endDate: 'September 2023',
  },
  {
    id: 'crimsonlogic',
    title: 'IT Intern',
    company: 'CrimsonLogic',
    location: 'Abu Dhabi, UAE',
    startDate: 'May 2022',
    endDate: 'August 2022',
  },
]

export const timelineData: TimelineEntry[] = [
  {
    id: 'ltv-pm',
    title: 'Performance Marketer',
    company: 'Long Tail Ventures',
    location: 'Dubai, UAE',
    startDate: 'March 2025',
    endDate: 'Present',
    current: true,
    description: 'Building and scaling digital products through performance marketing, content creation, and data-driven campaigns.',
    subItems: [
      {
        id: 'innov8',
        title: 'Marketing Specialist',
        company: 'Innov8 Business Incubator',
        relationship: 'partnership',
        description: 'Strategic marketing partnership led through Long Tail Ventures.',
      },
      {
        id: 'beyond-catering',
        title: 'Digital Marketing Lead',
        company: 'Beyond Catering',
        relationship: 'client',
        description: 'Performance marketing, Google Business and brand growth.',
      },
      {
        id: 'uvc',
        title: 'Marketing Lead',
        company: 'UVC Technical Services',
        relationship: 'client',
        description: 'WordPress blog, SEO, and social media marketing.',
      },
    ],
  },
  {
    id: 'ltv-trainee',
    title: 'Trainee — Performance Marketing & Data Analysis',
    company: 'Long Tail Ventures',
    location: 'Dubai, UAE',
    startDate: 'January 2025',
    endDate: 'March 2025',
    description: 'Researched SEO keywords, designed campaign assets, and handled customer support.',
  },
  {
    id: 'accenture',
    title: 'Data Analytics and Visualization',
    company: 'Accenture North America',
    location: 'Dubai, UAE',
    startDate: 'August 2024',
    endDate: 'August 2024',
    description: 'Data analytics certification and virtual experience program.',
  },
  {
    id: 'dpworld',
    title: 'IT Intern',
    company: 'DP World',
    location: 'Dubai, UAE',
    startDate: 'July 2023',
    endDate: 'September 2023',
    description: 'Improved resource efficiency by 20% through vendor selection; coordinated cross-branch IT communication.',
  },
  {
    id: 'crimsonlogic',
    title: 'IT Intern',
    company: 'CrimsonLogic',
    location: 'Abu Dhabi, UAE',
    startDate: 'May 2022',
    endDate: 'August 2022',
    description: 'Designed UI in Figma reducing issue reporting time by 40%; collaborated on software testing.',
  },
]

export const education: Education = {
  degree: 'BS in Computer Science and Information Technology',
  institution: 'Rochester Institute of Technology',
  location: 'Dubai, UAE',
  startDate: 'January 2020',
  endDate: 'May 2024',
  gpa: '3.30/4.00',
  minor: 'Data Analytics',
}

export const contact = {
  email: 'bikamanzi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/billkamanzi',
  github: 'https://github.com/kb546',
  facebook: 'https://www.facebook.com/billkamanzi',
  twitter: 'https://twitter.com/billkamanzi',
  instagram: 'https://www.instagram.com/billkamanzi',
}


