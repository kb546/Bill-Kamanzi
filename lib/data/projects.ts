export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  category: 'marketing' | 'web-development' | 'data-analysis' | 'machine-learning'
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  impact?: string
  metrics?: string
}

export const projects: Project[] = [
  {
    id: 'quackr-saas',
    title: 'Quackr SaaS Marketing Campaign',
    description: 'Comprehensive digital marketing strategy for SaaS product including SEO optimization, content creation, social media management across Instagram, X, Facebook, TikTok, and YouTube platforms.',
    technologies: ['SEO', 'Content Marketing', 'Social Media Management', 'SaaS Marketing', 'Performance Analytics'],
    category: 'marketing',
    githubUrl: '#',
    featured: true,
    impact: 'Multi-platform digital presence with strategic content distribution',
    metrics: 'Managed 5+ social platforms, created SEO-optimized content strategy',
  },
  {
    id: 'beyondcatering',
    title: 'BeyondCatering Digital Transformation',
    description: 'Led website development, Google Analytics setup, Google My Business optimization, and LinkedIn management for catering business. Managed team to deliver beyondcatering.ae website.',
    technologies: ['Web Development', 'SEO', 'Google Analytics', 'Google My Business', 'Team Management'],
    category: 'marketing',
    githubUrl: '#',
    featured: true,
    impact: 'Complete digital transformation with analytics-driven strategy',
    metrics: 'Team leadership, full-stack digital marketing implementation',
  },
  {
    id: 'uvc-technical',
    title: 'UVC Technical Services Marketing',
    description: 'Developed comprehensive digital marketing strategy including blog creation, Google Analytics implementation, and LinkedIn management for technical services company.',
    technologies: ['Content Marketing', 'SEO', 'Google Analytics', 'LinkedIn Marketing', 'Digital Strategy'],
    category: 'marketing',
    githubUrl: '#',
    featured: true,
    impact: 'Strategic content marketing with measurable analytics insights',
    metrics: 'Blog strategy, analytics setup, professional B2B presence',
  },
  {
    id: 'fraud-detection',
    title: 'Fraud Detection System',
    description: 'Developed a predictive model to identify fraudulent transactions in a retail self-scanning system. The system helps minimize losses while maintaining customer trust by optimizing follow-up checks.',
    technologies: ['R', 'Machine Learning', 'Data Analysis', 'Statistical Modeling', 'Classification Algorithms'],
    category: 'machine-learning',
    githubUrl: 'https://github.com/kb546/Fraud-Detection-System',
    featured: true,
    impact: 'Predictive analytics to reduce retail fraud',
    metrics: 'Machine learning classification for transaction analysis',
  },
  {
    id: 'rosa-restaurant',
    title: 'The Rosa Restaurant Website',
    description: 'Designed and developed a responsive website for a restaurant with modern UI/UX principles. Features include menu showcase, reservation system, and mobile-first design.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX'],
    category: 'web-development',
    githubUrl: 'https://github.com/kb546/The-Rosa-Restaurant',
    featured: true,
    impact: 'Modern, responsive restaurant web presence',
    metrics: 'Mobile-first design with reservation system',
  },
  {
    id: 'ihub-store',
    title: 'iHub Store E-commerce',
    description: 'Created an e-commerce platform for a phone retail business. Implemented product catalog, shopping cart, and responsive design for optimal mobile experience.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'E-commerce', 'Responsive Design'],
    category: 'web-development',
    githubUrl: 'https://github.com/kb546/iHub-Store',
    featured: true,
    impact: 'Full e-commerce solution for retail business',
    metrics: 'Product catalog, cart system, mobile optimization',
  },
  {
    id: 'spacex-falcon9',
    title: 'SpaceX Falcon 9 Landing Prediction',
    description: 'Predicted SpaceX Falcon 9 rocket landing success based on various flight parameters using machine learning algorithms.',
    technologies: ['Python', 'Pandas', 'NumPy', 'SQL', 'Machine Learning', 'Logistic Regression', 'SVM', 'KNN', 'Decision Tree'],
    category: 'machine-learning',
    githubUrl: 'https://github.com/kb546/DataScience_Capstone_Project',
    liveUrl: 'https://github.com/kb546/DataScience_Capstone_Project',
    featured: false,
    impact: 'Predictive modeling for aerospace applications',
    metrics: 'Multi-algorithm comparison for optimal prediction',
  },
  {
    id: 'social-buzz',
    title: 'Social Buzz Data Analytics',
    description: 'Analyzed social media content trends, user engagement, and post performance for Social Buzz platform.',
    technologies: ['Excel', 'Data Cleaning', 'VLOOKUP', 'Pivot Tables', 'Data Visualization'],
    category: 'data-analysis',
    githubUrl: 'https://github.com/kb546/Social_Buzz_Data_Analytics_Project',
    liveUrl: 'https://github.com/kb546/Social_Buzz_Data_Analytics_Project',
    featured: false,
    impact: 'Social media analytics and engagement insights',
    metrics: 'Content trend analysis, user engagement metrics',
  },
  {
    id: 'tableau-dashboard',
    title: 'Sales Performance Dashboard',
    description: 'Created interactive Tableau dashboards for tracking sales, customer trends, and KPIs with real-time analytics.',
    technologies: ['Tableau', 'Data Visualization', 'Sales Analysis', 'Customer Segmentation'],
    category: 'data-analysis',
    githubUrl: 'https://bit.ly/4eixeo2',
    liveUrl: 'https://bit.ly/4eixeo2',
    featured: false,
    impact: 'Real-time sales insights with interactive visualization',
    metrics: 'Customer segmentation, KPI tracking, trend analysis',
  },
  {
    id: 'healthcare-dashboard',
    title: 'Healthcare Analytics Dashboard',
    description: 'Built an interactive Power BI dashboard to visualize patient satisfaction, demographics, and healthcare performance metrics.',
    technologies: ['Power BI', 'Healthcare Analytics', 'Interactive Dashboards', 'Data Analysis', 'Data Cleaning'],
    category: 'data-analysis',
    githubUrl: 'https://github.com/kb546/Healthcare_Data_Analysis_PowerBI',
    liveUrl: 'https://github.com/kb546/Healthcare_Data_Analysis_PowerBI',
    featured: false,
    impact: 'Healthcare performance insights through interactive dashboards',
    metrics: 'Patient satisfaction tracking, demographic analysis',
  },
  {
    id: 'campconnect',
    title: 'CampConnect Smart Camping Tent',
    description: 'Led a team to design and prototype a smart camping tent with integrated solar panels for eco-friendly power generation.',
    technologies: ['React.js', 'Firebase', 'Web Development', 'IoT'],
    category: 'web-development',
    githubUrl: 'https://github.com/kb546/CampConnect-Smart-Camping-Tent',
    liveUrl: 'https://github.com/kb546/CampConnect-Smart-Camping-Tent',
    featured: false,
    impact: 'IoT-enabled camping solution with sustainable energy',
    metrics: 'Team leadership, IoT integration, React application',
  },
  {
    id: 'rit-react',
    title: 'RIT iSchool Web Service',
    description: 'Developed a web application using React.js to interact with the RIT iSchool website API, displaying dynamic content.',
    technologies: ['React.js', 'API Integration', 'Web Development', 'JavaScript'],
    category: 'web-development',
    githubUrl: 'https://github.com/kb546/Project-2-React',
    liveUrl: 'https://github.com/kb546/Project-2-React',
    featured: false,
    impact: 'Dynamic React application with API integration',
    metrics: 'RESTful API consumption, component-based architecture',
  },
  {
    id: 'dubai-expo',
    title: 'Dubai Expo 2020 Website Replica',
    description: 'Designed and developed a responsive replica of the Dubai Expo 2020 website to guide tourists around the event.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    category: 'web-development',
    githubUrl: 'https://people.rit.edu/~kb5703/240/homepage/project.html',
    liveUrl: 'https://people.rit.edu/~kb5703/240/homepage/project.html',
    featured: false,
    impact: 'Tourist-friendly event website with responsive design',
    metrics: 'Multi-page navigation, mobile optimization',
  },
  {
    id: 'house-prediction',
    title: 'House Price Prediction',
    description: 'Utilized Python for data cleaning and feature engineering to predict housing prices in Washington, USA using regression models.',
    technologies: ['Python', 'Data Analysis', 'Machine Learning', 'Linear Regression', 'Ridge Regression'],
    category: 'data-analysis',
    githubUrl: 'https://github.com/kb546/House-Sales-Prediction-Project',
    liveUrl: 'https://github.com/kb546/House-Sales-Prediction-Project',
    featured: false,
    impact: 'Real estate price prediction with feature engineering',
    metrics: 'Data cleaning, regression modeling, price forecasting',
  },
]

export const getFeaturedProjects = () => projects.filter(p => p.featured)

export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(p => p.category === category)


