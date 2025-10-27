export interface SkillCategory {
  name: string
  icon: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Marketing',
    icon: '📈',
    description: 'Performance marketing, content creation, and digital strategy',
    skills: [
      'Google Ads',
      'Meta Ads',
      'TikTok Ads',
      'SEO Strategy',
      'Content Marketing',
      'Social Media Management',
      'Performance Analytics',
      'Campaign Optimization',
      'A/B Testing',
      'Conversion Tracking',
      'Email Marketing',
      'LinkedIn Marketing',
    ],
  },
  {
    name: 'Data Science',
    icon: '📊',
    description: 'Data analysis, visualization, and machine learning',
    skills: [
      'Python (Pandas, NumPy)',
      'R',
      'Tableau',
      'Power BI',
      'SQL',
      'Machine Learning',
      'Statistical Analysis',
      'Data Visualization',
      'Predictive Modeling',
      'Excel',
    ],
  },
  {
    name: 'Web Development',
    icon: '🌐',
    description: 'Modern web technologies and frameworks',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5/CSS3',
      'Tailwind CSS',
      'Node.js',
      'Responsive Design',
      'UI/UX Design',
      'API Integration',
    ],
  },
  {
    name: 'Tools & Platforms',
    icon: '🛠️',
    description: 'Analytics platforms and productivity tools',
    skills: [
      'Google Analytics',
      'Google My Business',
      'Looker',
      'Firebase',
      'Git & GitHub',
      'Vercel',
      'SEO Tools',
      'Performance Tracking',
    ],
  },
]


