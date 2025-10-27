export interface Project {
  id: string
  slug: string
  title: string
  client: string
  year: string
  category: string[]
  description: string
  longDescription: string
  heroImage: string
  logo?: string  // Optional - not all projects have logos
  logoVariant?: 'light' | 'dark' // for Quackr
  images: string[]
  gradientFrom: string
  gradientTo: string
  backgroundImage?: string  // For homepage card background
  cardLogo?: string  // Different logo for card display
  
  // Detailed sections
  overview: string
  myRole: string[]
  challenges?: string[]
  solutions?: string[]
  results: {
    metric: string
    value: string
    description: string
  }[]
  
  // Services performed
  services: string[]
  technologies?: string[]
  
  // Links
  links?: {
    website?: string
    blog?: string
    github?: string
    linkedin?: string
    instagram?: string
    tiktok?: string
    youtube?: string
    twitter?: string
    facebook?: string
  }
  
  // Download
  downloadLink?: string
  downloadFilename?: string
  
  // Certificate
  certificate?: {
    name: string
    issuer: string
    link: string
  }
  
  // SEO
  metaTitle: string
  metaDescription: string
  keywords: string[]
}

export const projects: Project[] = [
  {
    id: 'quackr',
    slug: 'quackr',
    title: 'Quackr',
    client: 'Quackr',
    year: '2025',
    category: ['Social Media Marketing', 'Content Creation', 'Community Management', 'SEO & Digital Marketing'],
    description: 'Launched and scaled Quackr\'s social media presence from scratch across TikTok, X, LinkedIn, and YouTube, achieving nearly 1M combined views through strategic content and engaging visuals.',
    longDescription: 'Building a social media empire from the ground up. Quackr needed a strategic voice across every major platform—and that\'s exactly what I delivered. From conceptualizing viral TikTok content to crafting professional LinkedIn posts, I managed the entire social media lifecycle. The result? Nearly 1 million combined views across TikTok and YouTube, and a thriving community on X, LinkedIn, and beyond. Every banner, every post, every comment—strategically designed to drive engagement and build brand awareness.',
    heroImage: '/images/projects/quackr/1.png',
    logo: '/images/projects/quackr/quackr-logo-light.png',
    logoVariant: 'light',
    cardLogo: '/images/projects/quackr/quackr-logo.png',
    images: [
      '/images/projects/quackr/1.png',
      '/images/projects/quackr/2.png',
      '/images/projects/quackr/3.png',
      '/images/projects/quackr/4.png',
      '/images/projects/quackr/5.png',
    ],
    gradientFrom: '#10b981',
    gradientTo: '#0ea5e9',
    
    overview: 'Quackr, a temporary phone number SaaS platform developed by Long Tail Ventures, needed to establish a strong social media presence across multiple platforms to connect with their target audience and build brand awareness. Starting from zero followers, I was tasked with creating, managing, and scaling their entire social media strategy across TikTok, YouTube, X (Twitter), LinkedIn, and other platforms. The challenge was not just about creating content—it was about building a community, establishing a brand voice, and driving measurable engagement that would translate into business growth.',
    
    myRole: [
      'Social Media Strategy & Management (All Platforms)',
      'Content Creation & Copywriting',
      'Blog Content Writing & SEO',
      'Graphic Design (Banners, Posts, Thumbnails)',
      'Platform Setup from Scratch (TikTok, YouTube)',
      'Community Engagement & Growth',
      'Analytics & Performance Tracking',
      'Brand Voice Development'
    ],
    
    challenges: [
      'Building social media presence from absolute zero with no existing audience',
      'Creating platform-specific content that resonates with different demographics',
      'Maintaining consistent posting schedule across 5+ platforms',
      'Designing eye-catching visuals that stand out in crowded feeds',
      'Balancing viral content trends with brand messaging'
    ],
    
    solutions: [
      'Developed comprehensive social media strategy with platform-specific approaches',
      'Created content calendar with optimized posting times based on audience analytics',
      'Designed consistent visual branding system (banners, thumbnails, post templates)',
      'Implemented A/B testing for content types and posting strategies',
      'Leveraged trending topics while maintaining brand authenticity',
      'Built community engagement through active responses and interactive content'
    ],
    
    results: [
      {
        metric: 'Total Views',
        value: '~1M',
        description: 'Combined views across TikTok and YouTube platforms'
      },
      {
        metric: 'Platforms Managed',
        value: '5+',
        description: 'Successfully launched and managed X, LinkedIn, TikTok, YouTube, and more'
      },
      {
        metric: 'From Scratch',
        value: '100%',
        description: 'Built TikTok and YouTube channels from zero followers to engaged communities'
      }
    ],
    
    services: ['Social Media Marketing', 'Content Creation', 'Blog Writing & SEO', 'Graphic Design', 'Community Management', 'Brand Strategy'],
    technologies: ['TikTok', 'X (Twitter)', 'LinkedIn', 'YouTube', 'Canva', 'Adobe Creative Suite', 'Buffer', 'Analytics Tools'],
    
    links: {
      website: 'https://quackr.io/',
      blog: 'https://quackr.io/blog',
      linkedin: 'https://www.linkedin.com/company/quackr',
      instagram: 'https://www.instagram.com/quackr.io',
      tiktok: 'https://www.tiktok.com/@quackr.io',
      youtube: 'https://www.youtube.com/@quackrio',
      twitter: 'https://x.com/quackrio',
      facebook: 'https://www.facebook.com/quackr.io/',
    },
    
    metaTitle: 'Quackr Social Media Success Story - Bill Kamanzi Portfolio',
    metaDescription: 'How I scaled Quackr\'s social media presence from zero to nearly 1M views across TikTok, YouTube, X, and LinkedIn through strategic content and community management.',
    keywords: ['social media marketing', 'TikTok growth', 'content creation', 'community management', 'viral content', 'brand building', 'digital marketing', 'social media strategy']
  },
  {
    id: 'beyond-catering',
    slug: 'beyond-catering',
    title: 'Beyond Catering',
    client: 'Beyond Catering',
    year: '2025',
    category: ['WordPress Development', 'Social Media Marketing', 'SEO & Digital Marketing', 'Content Strategy'],
    description: 'Led a team to develop Beyond Catering\'s main website and personally built their blog site using WordPress and Blocksy theme. Established their digital footprint with Google My Business setup and LinkedIn management.',
    longDescription: 'Beyond Catering, a premium catering service, needed a complete digital transformation. As the technical lead, I orchestrated the development of their main website while personally crafting a dynamic WordPress blog platform using the Blocksy theme. Beyond the website, I established their local SEO presence through Google My Business optimization and managed their professional LinkedIn presence to attract corporate clients. The result was a cohesive digital ecosystem that positioned Beyond Catering as an industry leader.',
    heroImage: '/images/projects/beyond-catering/1.jpeg',
    logo: '/images/projects/beyond-catering/beyondcatering-logo.jpeg',
    cardLogo: '/images/projects/beyond-catering/beyondcatering-logo.jpeg',
    backgroundImage: '/images/projects/beyond-catering/3.JPG',
    images: [
      '/images/projects/beyond-catering/1.jpeg',
      '/images/projects/beyond-catering/2.jpg',
      '/images/projects/beyond-catering/3.JPG',
      '/images/projects/beyond-catering/4.jpeg',
    ],
    gradientFrom: '#0ea5e9',
    gradientTo: '#14b8a6',
    
    overview: 'Beyond Catering approached me with the challenge of establishing a comprehensive digital presence that would showcase their premium catering services and attract high-value corporate clients. The project encompassed multiple components: a professional main website, a content-rich blog platform, local search optimization, and LinkedIn social media management. As the project lead, I coordinated team efforts for the main site development while personally handling the blog creation and digital marketing strategy.',
    
    myRole: [
      'Team Lead - Website Development',
      'WordPress Blog Development (Blocksy Theme)',
      'Google My Business Setup & Optimization',
      'LinkedIn Social Media Management',
      'SEO Implementation & Content Strategy',
      'Technical Architecture Planning',
      'Client Communication & Project Management'
    ],
    
    challenges: [
      'Coordinating team development while maintaining quality standards',
      'Creating a blog platform that balances aesthetics with functionality',
      'Establishing local SEO presence in competitive catering market',
      'Building professional LinkedIn presence for B2B client acquisition'
    ],
    
    solutions: [
      'Implemented agile development process with clear milestones and deliverables',
      'Selected Blocksy theme for WordPress providing flexibility and performance',
      'Configured custom post types and taxonomies for service categories',
      'Optimized Google My Business profile with high-quality images and complete information',
      'Developed LinkedIn content strategy targeting corporate event planners',
      'Implemented on-page SEO best practices across all web properties'
    ],
    
    results: [
      {
        metric: 'Blog Articles',
        value: '50+',
        description: 'Published articles on catering trends, event planning, and culinary tips'
      },
      {
        metric: 'GMB Customers',
        value: '200+',
        description: 'Customers discovered and engaged through optimized Google My Business profile'
      },
      {
        metric: 'LinkedIn Network',
        value: '325+',
        description: 'Professional followers and connections built on LinkedIn'
      }
    ],
    
    services: ['Web Development', 'WordPress Development', 'Blog Development', 'LinkedIn Management', 'Content Strategy', 'SEO Optimization', 'Google My Business'],
    technologies: ['WordPress', 'Blocksy Theme', 'PHP', 'Google My Business', 'LinkedIn', 'Yoast SEO', 'Google Analytics'],
    
    links: {
      website: 'https://beyondcatering.ae/',
      blog: 'https://beyondcatering.ae/blog/',
      linkedin: 'https://www.linkedin.com/company/beyond-catering-catering-services'
    },
    
    metaTitle: 'Beyond Catering Digital Transformation - Bill Kamanzi Portfolio',
    metaDescription: 'Led the complete digital transformation for Beyond Catering including website development, WordPress blog creation, Google My Business setup, and LinkedIn management.',
    keywords: ['WordPress development', 'Blocksy theme', 'website development', 'blog design', 'Google My Business', 'local SEO', 'LinkedIn marketing', 'team leadership']
  },
  {
    id: 'uvc',
    slug: 'uvc',
    title: 'UVC Technical Services',
    client: 'UVC Technical Services',
    year: '2025',
    category: ['WordPress Development', 'Social Media Marketing', 'SEO & Digital Marketing', 'Content Strategy'],
    description: 'Developed UVC\'s blog platform using WordPress and Blocksy theme, creating a content hub for their facility management services. Managed their LinkedIn presence and established local search visibility through Google My Business.',
    longDescription: 'UVC Technical Services, a facility management company based in Dubai at Innov8 Business Incubator, required a sophisticated blog platform to share insights about HVAC, MEP, and facility management best practices. I designed and developed a custom WordPress solution using the Blocksy theme, creating a content management system that empowered their team to share technical expertise and engage with their audience. Complementing the technical work, I managed their professional LinkedIn presence and optimized their Google My Business profile to enhance local visibility and establish UVC as thought leaders in the facility management space.',
    heroImage: '/images/projects/uvc/2.jpeg',
    backgroundImage: '/images/projects/uvc/5.jpeg',
    images: [
      '/images/projects/uvc/2.jpeg',
      '/images/projects/uvc/3.jpeg',
      '/images/projects/uvc/4.jpeg',
      '/images/projects/uvc/5.jpeg',
      '/images/projects/uvc/6.jpeg',
      '/images/projects/uvc/7.jpeg',
    ],
    gradientFrom: '#10b981',
    gradientTo: '#14b8a6',
    
    overview: 'UVC Technical Services, a facility management company based in Dubai at Innov8 Business Incubator, needed a professional blog platform to establish thought leadership in the facility management sector. The challenge was to create a content hub that would showcase their technical expertise in HVAC, MEP, and facility management while also improving their digital visibility through strategic SEO and social media presence. The blog needed to be easy to manage for non-technical team members while maintaining professional aesthetics and performance standards.',
    
    myRole: [
      'WordPress Blog Development (Blocksy Theme)',
      'Content Strategy & Planning',
      'Google My Business Setup & Management',
      'LinkedIn Social Media Management',
      'SEO Optimization',
      'User Experience Design',
      'Content Management System Setup'
    ],
    
    challenges: [
      'Creating intuitive content management for non-technical users',
      'Designing blog layout that works for various content types',
      'Establishing digital presence in competitive facility management market',
      'Balancing visual appeal with fast load times'
    ],
    
    solutions: [
      'Implemented WordPress with Blocksy theme providing visual editor capabilities',
      'Created custom templates for different post types (projects, insights, news)',
      'Set up comprehensive SEO plugin configuration with automatic optimization',
      'Designed responsive layouts optimized for mobile reading',
      'Established Google My Business with complete business information',
      'Developed LinkedIn content calendar focusing on industry insights'
    ],
    
    results: [
      {
        metric: 'Technical Articles',
        value: '40+',
        description: 'In-depth articles on HVAC, MEP, and facility management best practices'
      },
      {
        metric: 'Local Discovery',
        value: '150+',
        description: 'Customers found UVC services through Google My Business optimization'
      },
      {
        metric: 'Professional Reach',
        value: '129+',
        description: 'LinkedIn followers in the facilities management industry'
      }
    ],
    
    services: ['WordPress Development', 'Blog Development', 'LinkedIn Management', 'Content Strategy', 'SEO Optimization', 'Google My Business'],
    technologies: ['WordPress', 'Blocksy Theme', 'PHP', 'Google My Business', 'LinkedIn', 'Yoast SEO', 'Google Analytics', 'PageSpeed Optimization'],
    
    links: {
      website: 'https://uvc.ae/',
      blog: 'https://uvc.ae/blog/',
      linkedin: 'https://www.linkedin.com/company/uvc-facilities-management-llc'
    },
    
    metaTitle: 'UVC WordPress Blog & Digital Strategy - Bill Kamanzi Portfolio',
    metaDescription: 'Developed UVC\'s WordPress blog platform with Blocksy theme, managed LinkedIn presence, and established local SEO through Google My Business optimization.',
    keywords: ['WordPress blog', 'Blocksy theme', 'content strategy', 'digital marketing', 'local SEO', 'LinkedIn management', 'facility management marketing', 'HVAC', 'MEP']
  },
  {
    id: 'rosa-restaurant',
    slug: 'rosa-restaurant',
    title: 'The Rosa Restaurant',
    client: 'Rosa Restaurant',
    year: '2024',
    category: ['Web Development', 'UI/UX Design', 'Frontend'],
    description: 'Designed and developed an elegant restaurant website featuring a modern interface, interactive menu, and reservation system.',
    longDescription: 'Created a sophisticated web presence for The Rosa Restaurant, combining aesthetic design with functional features. The site showcases the restaurant\'s ambiance through immersive visuals, provides an interactive menu experience, and simplifies the reservation process for customers.',
    heroImage: '/images/projects/rosa/1.png',
    logo: '/images/projects/rosa/1.png',
    cardLogo: '/images/projects/rosa/1.png',
    backgroundImage: '/images/projects/rosa/1.png',
    images: [
      '/images/projects/rosa/1.png',
      '/images/projects/rosa/2.png',
      '/images/projects/rosa/3.png',
      '/images/projects/rosa/4.png',
      '/images/projects/rosa/5.png',
      '/images/projects/rosa/6.png',
      '/images/projects/rosa/7.png',
    ],
    gradientFrom: '#dc2626',
    gradientTo: '#ea580c',
    
    overview: 'The Rosa Restaurant needed a digital presence that reflected their sophisticated dining experience. The goal was to create an elegant website that showcases their culinary offerings, captures the restaurant\'s ambiance, and provides an intuitive reservation system. The design needed to be responsive, fast-loading, and visually stunning to attract diners and convert visitors into reservations.',
    
    myRole: [
      'Frontend Development',
      'UI/UX Design',
      'Responsive Implementation',
      'Menu System Design'
    ],
    
    challenges: [
      'Creating an immersive visual experience that showcases ambiance',
      'Designing an intuitive menu navigation system',
      'Ensuring seamless mobile experience for on-the-go diners'
    ],
    
    solutions: [
      'Implemented high-quality imagery with lazy loading for performance',
      'Created interactive menu with filtering and search capabilities',
      'Developed mobile-first design with touch-optimized interactions'
    ],
    
    results: [
      {
        metric: 'Design Quality',
        value: 'Premium',
        description: 'Modern, elegant interface'
      },
      {
        metric: 'Responsiveness',
        value: '100%',
        description: 'Perfect mobile experience'
      },
      {
        metric: 'Performance',
        value: 'Optimized',
        description: 'Fast loading times'
      }
    ],
    
    services: ['Web Development', 'UI/UX Design', 'Frontend Development'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    
    links: {
      website: 'https://kb546.github.io/The-Rosa-Restaurant/',
      github: 'https://github.com/kb546/The-Rosa-Restaurant'
    },
    
    metaTitle: 'The Rosa Restaurant Website - Bill Kamanzi Portfolio',
    metaDescription: 'Designed and developed an elegant restaurant website with modern interface, interactive menu, and reservation system.',
    keywords: ['restaurant website', 'web design', 'UI/UX', 'frontend development', 'responsive design', 'HTML5', 'CSS3', 'JavaScript']
  },
  {
    id: 'spacex-falcon9',
    slug: 'spacex-falcon9',
    title: 'SpaceX Falcon 9 Landing Prediction',
    client: 'IBM Data Science Capstone',
    year: '2024',
    category: ['Data Science', 'Machine Learning', 'Python'],
    description: 'Predicted SpaceX Falcon 9 rocket landing success based on various flight parameters using machine learning algorithms.',
    longDescription: 'Developed a predictive model to determine the likelihood of successful SpaceX Falcon 9 first stage landings. This capstone project from the IBM Data Science Professional Certificate involved data collection, exploratory analysis, feature engineering, and model training to optimize launch cost predictions.',
    heroImage: '/images/projects/spacex/1.png',
    logo: '/images/projects/spacex/1.png',
    cardLogo: '/images/projects/spacex/1.png',
    backgroundImage: '/images/projects/spacex/1.png',
    images: [
      '/images/projects/spacex/1.png',
      '/images/projects/spacex/2.png',
      '/images/projects/spacex/3.png',
      '/images/projects/spacex/4.png',
      '/images/projects/spacex/5.png',
      '/images/projects/spacex/6.png',
      '/images/projects/spacex/7.png',
    ],
    gradientFrom: '#0ea5e9',
    gradientTo: '#3b82f6',
    
    downloadLink: '/downloads/spacex-presentation.pdf',
    downloadFilename: 'SpaceX_Falcon9_Analysis.pdf',
    
    certificate: {
      name: 'IBM Data Science Professional Certificate',
      issuer: 'IBM',
      link: '/about#education'
    },
    
    overview: 'SpaceX advertises Falcon 9 rocket launches at $62 million while competitors charge upwards of $165 million. The cost savings are largely due to reusable first stages. Predicting landing success is crucial for determining launch costs and competitiveness. This project analyzes historical launch data to predict whether SpaceX will attempt to land the first stage.',
    
    myRole: [
      'Data Collection & Cleaning',
      'Exploratory Data Analysis',
      'Feature Engineering',
      'Model Training & Evaluation',
      'Results Visualization'
    ],
    
    challenges: [
      'Collecting and cleaning SpaceX launch data from multiple sources',
      'Handling imbalanced dataset (more successful than failed landings)',
      'Selecting optimal features for prediction accuracy'
    ],
    
    solutions: [
      'Used web scraping and API calls to gather comprehensive data',
      'Applied SMOTE and class weighting to handle imbalanced classes',
      'Conducted thorough feature importance analysis and selection'
    ],
    
    results: [
      {
        metric: 'Model Accuracy',
        value: '85%+',
        description: 'Successfully predicted landing outcomes'
      },
      {
        metric: 'Features Analyzed',
        value: '15+',
        description: 'Flight parameters and conditions'
      },
      {
        metric: 'Data Points',
        value: '1000+',
        description: 'Historical launch records processed'
      }
    ],
    
    services: ['Data Science', 'Machine Learning', 'Predictive Analytics'],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    
    links: {
      github: 'https://github.com/kb546/DataScience_Capstone_Project'
    },
    
    metaTitle: 'SpaceX Falcon 9 Landing Prediction - Bill Kamanzi Portfolio',
    metaDescription: 'Machine learning project predicting SpaceX Falcon 9 rocket landing success using Python, scikit-learn, and data science techniques.',
    keywords: ['data science', 'machine learning', 'SpaceX', 'predictive modeling', 'Python', 'pandas', 'scikit-learn', 'IBM certification']
  },
  {
    id: 'social-buzz',
    slug: 'social-buzz',
    title: 'Social Buzz Data Analytics Project',
    client: 'Accenture Certification',
    year: '2024',
    category: ['Data Analytics', 'Python', 'Data Visualization'],
    description: 'Analyzed social media content trends, user engagement, and post performance for Social Buzz, identifying key insights for content strategy.',
    longDescription: 'Completed as part of the Accenture North America Data Analytics and Visualization Job Simulation. Analyzed large datasets to uncover trends in user engagement, content performance, and posting patterns, providing actionable recommendations for optimizing Social Buzz\'s content strategy.',
    heroImage: '/images/projects/social-buzz/1.png',
    logo: '/images/projects/social-buzz/1.png',
    cardLogo: '/images/projects/social-buzz/1.png',
    backgroundImage: '/images/projects/social-buzz/1.png',
    images: [
      '/images/projects/social-buzz/1.png',
      '/images/projects/social-buzz/2.png',
      '/images/projects/social-buzz/3.png',
      '/images/projects/social-buzz/4.png',
      '/images/projects/social-buzz/5.png',
      '/images/projects/social-buzz/6.png',
      '/images/projects/social-buzz/7.png',
      '/images/projects/social-buzz/8.png',
      '/images/projects/social-buzz/9.png',
    ],
    gradientFrom: '#8b5cf6',
    gradientTo: '#ec4899',
    
    downloadLink: '/downloads/social-buzz-presentation.pptx',
    downloadFilename: 'Social_Buzz_Analytics.pptx',
    
    certificate: {
      name: 'Accenture North America Data Analytics Job Simulation',
      issuer: 'Accenture',
      link: '/about#education'
    },
    
    overview: 'Social Buzz, a rapidly growing social media platform, needed to understand their content ecosystem better. With over 100,000 pieces of content generated daily, they required data-driven insights to optimize content strategy, understand user engagement patterns, and identify top-performing content categories.',
    
    myRole: [
      'Data Cleaning & Preparation',
      'Trend Analysis',
      'Engagement Metrics Calculation',
      'Data Visualization',
      'Insights Presentation'
    ],
    
    challenges: [
      'Processing and cleaning large datasets with inconsistent formats',
      'Identifying meaningful patterns in user engagement data',
      'Creating visualizations that communicate insights effectively'
    ],
    
    solutions: [
      'Developed automated data cleaning pipelines',
      'Applied statistical analysis to identify trends',
      'Created interactive visualizations using Python libraries'
    ],
    
    results: [
      {
        metric: 'Top Categories',
        value: '5',
        description: 'Identified highest-performing content types'
      },
      {
        metric: 'Engagement Patterns',
        value: 'Mapped',
        description: 'User interaction trends discovered'
      },
      {
        metric: 'Recommendations',
        value: '10+',
        description: 'Actionable content strategy insights'
      }
    ],
    
    services: ['Data Analytics', 'Data Visualization', 'Business Intelligence'],
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Excel'],
    
    links: {
      github: 'https://github.com/kb546/Social_Buzz_Data_Analytics_Project'
    },
    
    metaTitle: 'Social Buzz Data Analytics Project - Bill Kamanzi Portfolio',
    metaDescription: 'Data analytics project analyzing social media trends and user engagement for Social Buzz, completed as part of Accenture certification.',
    keywords: ['data analytics', 'social media analytics', 'Python', 'data visualization', 'Accenture', 'business intelligence', 'content strategy']
  },
  // Tableau Dashboard - Temporarily removed (no images available)
  /*
  {
    id: 'tableau-dashboard',
    slug: 'tableau-dashboard',
    title: 'Sales & Customer Performance Dashboard',
    client: 'Company XYZ',
    year: '2024',
    category: ['Data Visualization', 'Tableau', 'Business Intelligence'],
    description: 'Created interactive Tableau dashboards for tracking sales, customer trends, and KPIs with real-time insights for executive decision-making.',
    longDescription: 'Developed comprehensive Tableau dashboards that transform raw sales and customer data into actionable insights. The dashboards provide real-time visibility into sales performance, customer behavior, and key business metrics, enabling data-driven decision-making at all organizational levels.',
    heroImage: '/images/projects/tableau/hero.jpg',
    logo: '/images/projects/tableau/tableau-logo.png',
    cardLogo: '/images/projects/tableau/tableau-logo.png',
    backgroundImage: '/images/projects/tableau/hero.jpg',
    images: [
      '/images/projects/tableau/hero.jpg',
    ],
    gradientFrom: '#0ea5e9',
    gradientTo: '#14b8a6',
    
    overview: 'Company XYZ needed a unified view of their sales and customer data across multiple regions and product lines. The challenge was to consolidate data from various sources and present it in an intuitive, interactive format that would enable quick decision-making and strategic planning.',
    
    myRole: [
      'Dashboard Design',
      'Data Integration',
      'KPI Definition',
      'Interactive Visualization',
      'User Training'
    ],
    
    challenges: [
      'Consolidating data from multiple sources with different formats',
      'Designing intuitive interfaces for non-technical users',
      'Ensuring dashboard performance with large datasets'
    ],
    
    solutions: [
      'Implemented efficient data connections and extracts',
      'Created user-friendly filters and parameters',
      'Optimized dashboard performance through data modeling'
    ],
    
    results: [
      {
        metric: 'Dashboards',
        value: '2',
        description: 'Sales and Customer performance views'
      },
      {
        metric: 'Metrics Tracked',
        value: '20+',
        description: 'KPIs monitored in real-time'
      },
      {
        metric: 'Decision Time',
        value: '-50%',
        description: 'Faster insights for executives'
      }
    ],
    
    services: ['Data Visualization', 'Business Intelligence', 'Dashboard Design'],
    technologies: ['Tableau Desktop', 'Tableau Public', 'SQL', 'Data Modeling'],
    
    links: {
      website: 'https://public.tableau.com/app/profile/bill.kamanzi/viz/SalesCustomerDashboardsForCompanyXYZ/SalesDashboard'
    },
    
    metaTitle: 'Sales & Customer Tableau Dashboard - Bill Kamanzi Portfolio',
    metaDescription: 'Interactive Tableau dashboards for tracking sales performance, customer trends, and business KPIs with real-time insights.',
    keywords: ['Tableau', 'data visualization', 'business intelligence', 'dashboard design', 'sales analytics', 'customer analytics', 'KPI tracking']
  },
  */
  {
    id: 'ihub-store',
    slug: 'ihub-store',
    title: 'iHub Store - E-commerce Platform',
    client: 'iHub Retail',
    year: '2024',
    category: ['Web Development', 'E-commerce', 'Frontend'],
    description: 'Created an e-commerce platform for a phone retail business with product catalog, shopping cart, and responsive design for optimal mobile experience.',
    longDescription: 'Developed a modern e-commerce platform for iHub, a phone retail business. The platform features a comprehensive product catalog, intuitive shopping cart functionality, and a mobile-optimized design to enhance the customer shopping experience and drive conversions.',
    heroImage: '/images/projects/ihub/1.png',
    logo: '/images/projects/ihub/1.png',
    cardLogo: '/images/projects/ihub/1.png',
    backgroundImage: '/images/projects/ihub/1.png',
    images: [
      '/images/projects/ihub/1.png',
      '/images/projects/ihub/2.png',
      '/images/projects/ihub/3.png',
    ],
    gradientFrom: '#ef4444',
    gradientTo: '#f97316',
    
    overview: 'iHub, a phone retail business, needed an online presence to expand their reach beyond physical stores. The goal was to create an e-commerce platform that showcases their product catalog effectively and provides a seamless shopping experience across all devices, particularly mobile.',
    
    myRole: [
      'Full-Stack Development',
      'UI/UX Design',
      'Shopping Cart Implementation',
      'Responsive Design',
      'Product Catalog Management'
    ],
    
    challenges: [
      'Creating intuitive product browsing and filtering',
      'Implementing smooth shopping cart functionality',
      'Optimizing for mobile-first experience'
    ],
    
    solutions: [
      'Developed responsive grid layout for product catalog',
      'Implemented JavaScript-based shopping cart with local storage',
      'Created mobile-optimized checkout flow'
    ],
    
    results: [
      {
        metric: 'Product Catalog',
        value: 'Dynamic',
        description: 'Easy-to-browse phone inventory'
      },
      {
        metric: 'Mobile UX',
        value: 'Optimized',
        description: 'Seamless shopping on any device'
      },
      {
        metric: 'Cart Functionality',
        value: 'Complete',
        description: 'Smooth checkout experience'
      }
    ],
    
    services: ['Web Development', 'E-commerce Development', 'UI/UX Design'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design'],
    
    links: {
      website: 'https://kb546.github.io/iHub-Store/'
    },
    
    metaTitle: 'iHub Store E-commerce Platform - Bill Kamanzi Portfolio',
    metaDescription: 'E-commerce platform for phone retail business featuring product catalog, shopping cart, and mobile-optimized design.',
    keywords: ['e-commerce', 'web development', 'online store', 'shopping cart', 'responsive design', 'mobile optimization', 'retail website']
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects
  return projects.filter(p => p.category.includes(category))
}

export function getFeaturedProjects(count: number = 3): Project[] {
  return projects.slice(0, count)
}

