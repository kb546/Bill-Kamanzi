export interface Education {
  id: string
  type: 'degree' | 'certification'
  title: string
  institution: string
  logo?: string
  year: string
  location?: string
  gpa?: string
  minor?: string
  description?: string
  modules?: string[]
}

export const educationData: Education[] = [
  {
    id: 'degree-1',
    type: 'degree',
    title: 'Bachelor of Science in Computer Science and IT',
    institution: 'Rochester Institute of Technology',
    logo: '/images/logos/RITdubai-logo.jpeg',
    year: 'January 2020 – May 2024',
    location: 'Dubai, UAE',
    minor: 'Data Analytics',
    gpa: '3.30/4.00',
    description: 'Specialized in Computer Science with a focus on IT and Data Analytics',
  },
  {
    id: 'cert-1',
    type: 'certification',
    title: 'IBM Data Science Professional Certificate',
    institution: 'Coursera',
    logo: '/images/logos/ibm-logo.png',
    year: '2024',
    description: 'Comprehensive data science training covering machine learning, AI, and analytics',
    modules: [
      'Machine Learning with Python',
      'Generative AI',
      'Databases and SQL for Data Science with Python',
      'Data Analysis with Python',
    ],
  },
  {
    id: 'cert-2',
    type: 'certification',
    title: 'Accenture North America Data Analytics and Visualization Job Simulation',
    institution: 'Forage',
    logo: '/images/logos/Accenture-logo.png',
    year: 'September 2024 – October 2024',
    description: 'Completed a simulation focused on advising a hypothetical social media client as a Data Analyst at Accenture North America',
    modules: [
      'Cleaned, modeled, and analyzed 7 datasets in Excel to uncover insights into content trends',
      'Prepared a PowerPoint deck and video presentation to communicate key insights',
      'Delivered strategic recommendations for client and internal stakeholders',
    ],
  },
]

// Brand colors for institution/certification logos
export const institutionBrandColors: Record<string, string> = {
  'degree-1': '#F76902', // RIT - Orange
  'cert-1': '#FFFFFF', // IBM - White (no color filter)
  'cert-2': '#A100FF', // Accenture - Purple
}

