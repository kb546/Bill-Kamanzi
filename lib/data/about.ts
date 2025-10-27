export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  current?: boolean
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
  tagline: "Hi, I'm Bill Kamanzi — where data meets creativity.",
  subtitle: "Performance Marketer • Data Scientist • Web Developer",
  description: [
    "A dynamic Performance Marketer and Digital Marketing Specialist with expertise in driving growth through strategic campaigns and data-driven insights. With experience in SEO, social media management, content creation, and performance marketing, I help businesses scale effectively across digital platforms.",
    "Recent Computer Science Graduate at Rochester Institute of Technology, I've successfully transitioned into the marketing space, bringing analytical thinking and technical skills to create compelling campaigns that drive results.",
    "My approach combines creative storytelling with performance analytics, managing teams and campaigns for SaaS products, catering services, and technical companies to deliver measurable business growth.",
  ],
  journey: "From Data Science → to Development → to Growth Strategy",
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


