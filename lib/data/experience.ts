import { formatTenureDisplay } from '@/lib/utils/tenure'

export interface Experience {
  id: string
  company: string
  logo?: string
  role: string
  duration: string
  startDate: string
  endDate: string | 'Present'
  location: string
  achievements: string[]
  skills?: string[]
  type: 'full-time' | 'contract' | 'freelance'
}

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    company: 'Long Tail Ventures',
    logo: '/images/logos/ltv-logo.png',
    role: 'Performance Content Marketer',
    duration: '3 months',
    startDate: 'March 2025',
    endDate: 'Present',
    location: 'Dubai, UAE',
    achievements: [
      'Launched and scaled Quackr (company SaaS product) social media to ~1M views across TikTok and YouTube',
      'Created video ads and scroll-stopping posters for Meta, TikTok, and Google Ads campaigns',
      'Wrote, edited, and produced short-form videos optimized for attention, clicks, and conversions',
      'Managed paid ad campaigns end-to-end, focusing on performance metrics like CTR and ROAS',
      'Used customer feedback to shape content ideas that solve real user problems and drive engagement',
    ],
    skills: ['Meta Ads', 'TikTok Ads', 'Google Ads', 'Video Production', 'Content Creation'],
    type: 'full-time',
  },
  {
    id: 'exp-2',
    company: 'Long Tail Ventures',
    logo: '/images/logos/ltv-logo.png',
    role: 'Trainee - Performance Marketing & Data Analysis',
    duration: '2 months',
    startDate: 'January 2025',
    endDate: 'March 2025',
    location: 'Dubai, UAE',
    achievements: [
      'Researched SEO keywords to boost content visibility',
      'Designed posters and short videos for Google campaigns',
      'Handled customer support and shared insights with the team',
    ],
    skills: ['SEO', 'Google Ads', 'Graphic Design', 'Customer Support'],
    type: 'full-time',
  },
  {
    id: 'exp-3',
    company: 'DP World',
    logo: '/images/logos/dpworld-logo.jpeg',
    role: 'IT Intern',
    duration: '3 months',
    startDate: 'July 2023',
    endDate: 'September 2023',
    location: 'Dubai, UAE',
    achievements: [
      'Selected cost-effective vendors, improving resource efficiency by 20%',
      'Coordinated between IT teams and business units across branches to ensure smooth communication',
    ],
    skills: ['Vendor Management', 'IT Coordination', 'Cross-functional Communication'],
    type: 'full-time',
  },
  {
    id: 'exp-4',
    company: 'CrimsonLogic',
    logo: '/images/logos/crimsonlogic-logo.jpeg',
    role: 'IT Intern',
    duration: '4 months',
    startDate: 'May 2022',
    endDate: 'August 2022',
    location: 'Abu Dhabi, UAE',
    achievements: [
      'Designed a user-friendly UI in Figma that reduced customer issue reporting time by 40%',
      'Collaborated with backend developers to test and release software updates, decreasing bug reports by 30%',
    ],
    skills: ['Figma', 'UI/UX Design', 'Software Testing', 'Collaboration'],
    type: 'full-time',
  },
]

// Brand colors for company logos
export const companyBrandColors: Record<string, string> = {
  'exp-1': '#F3F4F6', // Long Tail Ventures - Light gray for neutral logos
  'exp-2': '#F3F4F6', // Long Tail Ventures - Light gray for neutral logos
  'exp-3': '#1E3A8A', // DP World - Deep blue
  'exp-4': '#DC2626', // CrimsonLogic - Red/Crimson
}

/**
 * Enhanced experience data with formatted dates for all roles
 * Shows date range with duration (e.g., "Mar 2025 – Present · 8 months" or "Jan 2025 – Mar 2025 · 3 months")
 */
export const experienceWithTenure = experienceData.map(exp => {
  return {
    ...exp,
    duration: formatTenureDisplay(exp.startDate, exp.endDate)
  }
})

