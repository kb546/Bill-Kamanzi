export interface ServiceFAQ {
  id: string
  question: string
  answer: string
}

export const webDevFAQs: ServiceFAQ[] = [
  {
    id: 'web-dev-technologies',
    question: 'What technologies do you use for web development?',
    answer:
      'I specialize in modern web technologies including React.js, Next.js, TypeScript, Tailwind CSS, and Node.js. I also work with headless CMS solutions like Contentful and Sanity for content management, and deploy applications on platforms like Vercel and Netlify for optimal performance.',
  },
  {
    id: 'web-dev-timeline',
    question: 'How long does it take to build a website?',
    answer:
      'Project timelines vary based on complexity and requirements. A simple landing page or portfolio site typically takes 2-3 weeks, while a full-featured web application with custom functionality can take 6-12 weeks. During our initial consultation, I\'ll provide a detailed timeline based on your specific needs.',
  },
  {
    id: 'web-dev-responsive',
    question: 'Will my website be mobile-friendly?',
    answer:
      'Absolutely! All websites I build are fully responsive and optimized for mobile, tablet, and desktop devices. I follow a mobile-first approach to ensure your site looks great and functions perfectly on all screen sizes, providing an excellent user experience for all visitors.',
  },
  {
    id: 'web-dev-maintenance',
    question: 'Do you provide ongoing maintenance and support?',
    answer:
      'Yes, I offer maintenance and support packages to keep your website secure, up-to-date, and running smoothly. This includes regular updates, security patches, performance monitoring, content updates, and technical support. We can discuss the best maintenance plan for your needs.',
  },
  {
    id: 'web-dev-seo',
    question: 'Is SEO included in your web development service?',
    answer:
      'Yes, I implement fundamental SEO best practices in all my web development projects, including proper meta tags, semantic HTML structure, fast loading times, mobile optimization, and clean URLs. For more advanced SEO strategies and ongoing optimization, I also offer dedicated digital marketing services.',
  },
  {
    id: 'web-dev-cost',
    question: 'How much does web development cost?',
    answer:
      'Project costs vary depending on scope, features, and complexity. A basic website starts around $2,000-$5,000, while more complex applications can range from $10,000-$30,000+. I provide custom quotes after understanding your requirements. All quotes are transparent with no hidden fees.',
  },
]

export const digitalMarketingFAQs: ServiceFAQ[] = [
  {
    id: 'digital-marketing-platforms',
    question: 'Which social media platforms do you manage?',
    answer:
      'I manage all major social media platforms including Facebook, Instagram, LinkedIn, Twitter (X), TikTok, and Pinterest. The platforms I recommend depend on your target audience, industry, and business goals. During our consultation, we\'ll determine the best platform mix for your brand.',
  },
  {
    id: 'digital-marketing-content',
    question: 'Do you create content for social media?',
    answer:
      'Yes! I provide comprehensive content creation services including copywriting, graphic design, video editing, and content calendars. I develop content that aligns with your brand voice and resonates with your target audience, designed to drive engagement and conversions.',
  },
  {
    id: 'digital-marketing-results',
    question: 'How long before I see results from digital marketing?',
    answer:
      'Organic digital marketing is a long-term strategy. You can expect to see initial engagement within 2-4 weeks, but substantial growth in followers, traffic, and leads typically takes 3-6 months of consistent effort. SEO results can take 4-6 months. I provide monthly reports to track progress.',
  },
  {
    id: 'digital-marketing-strategy',
    question: 'What does your digital marketing strategy include?',
    answer:
      'My strategy includes competitor analysis, audience research, content planning, SEO optimization, social media management, engagement tactics, analytics tracking, and continuous optimization. I create a customized roadmap aligned with your business goals and adjust based on performance data.',
  },
  {
    id: 'digital-marketing-metrics',
    question: 'How do you measure marketing success?',
    answer:
      'I track KPIs relevant to your goals including website traffic, engagement rates, follower growth, reach and impressions, conversion rates, lead generation, and ROI. You\'ll receive detailed monthly reports with insights and recommendations for continuous improvement.',
  },
  {
    id: 'digital-marketing-cost',
    question: 'How much do digital marketing services cost?',
    answer:
      'My digital marketing packages start at $1,500/month for basic social media management and SEO. Comprehensive strategies with content creation, multiple platforms, and advanced analytics range from $3,000-$8,000/month. I offer flexible packages tailored to your budget and goals.',
  },
]

export const paidAdsFAQs: ServiceFAQ[] = [
  {
    id: 'paid-ads-platforms',
    question: 'Which advertising platforms do you specialize in?',
    answer:
      'I specialize in Meta Ads (Facebook & Instagram), Google Ads (Search, Display, Shopping), and TikTok Ads. Each platform has unique strengths - Meta for targeted demographics, Google for search intent, and TikTok for viral reach. I\'ll recommend the best mix based on your goals and audience.',
  },
  {
    id: 'paid-ads-budget',
    question: 'What\'s the minimum budget for paid ads?',
    answer:
      'I recommend a minimum monthly ad spend of $1,000-$2,000 per platform to see meaningful results and gather enough data for optimization. This is separate from my management fee. Smaller budgets can work but may limit reach and testing capabilities. We\'ll find the right budget for your goals.',
  },
  {
    id: 'paid-ads-targeting',
    question: 'How do you target the right audience?',
    answer:
      'I use advanced targeting strategies including demographic targeting, interest-based targeting, behavioral targeting, lookalike audiences, retargeting/remarketing, and custom audiences from your customer data. I continuously refine targeting based on performance to maximize ROI.',
  },
  {
    id: 'paid-ads-creative',
    question: 'Do you create ad creatives and copy?',
    answer:
      'Yes! I create compelling ad creatives including images, videos, carousel ads, and engaging copy. I follow platform best practices and A/B test multiple variations to identify what resonates best with your audience. I can also work with your existing brand assets.',
  },
  {
    id: 'paid-ads-roi',
    question: 'What kind of ROI can I expect from paid ads?',
    answer:
      'ROI varies by industry, competition, and goals, but well-optimized campaigns typically achieve 3x-5x ROAS (Return on Ad Spend) or better. E-commerce often sees higher returns. I focus on continuous optimization to improve performance over time and provide transparent reporting on all key metrics.',
  },
  {
    id: 'paid-ads-management',
    question: 'What\'s included in your ad management service?',
    answer:
      'My service includes campaign strategy and setup, audience research and targeting, ad creative production, A/B testing, daily monitoring and optimization, performance reporting, landing page recommendations, and conversion tracking setup. You have full transparency and regular communication.',
  },
]

export const projectManagementFAQs: ServiceFAQ[] = [
  {
    id: 'pm-methodology',
    question: 'What project management methodology do you use?',
    answer:
      'I primarily use Agile methodology with Scrum principles for flexibility and iterative progress. For projects requiring more structure, I also implement traditional waterfall or hybrid approaches. The methodology is tailored to your project\'s needs, team size, and organizational requirements.',
  },
  {
    id: 'pm-tools',
    question: 'What tools do you use for project management?',
    answer:
      'I use industry-standard tools including Asana, Trello, Monday.com for task management, Slack and Microsoft Teams for communication, Jira for software development projects, and Google Workspace or Microsoft 365 for documentation. I can adapt to your existing tools or recommend the best fit.',
  },
  {
    id: 'pm-team-size',
    question: 'What size projects and teams can you manage?',
    answer:
      'I have experience managing projects ranging from small 2-3 person teams to larger cross-functional teams of 15+ members. Whether it\'s a single project or multiple concurrent initiatives, I ensure effective coordination, clear communication, and successful delivery.',
  },
  {
    id: 'pm-communication',
    question: 'How do you keep stakeholders informed?',
    answer:
      'I maintain transparent communication through regular status meetings (daily standups, weekly check-ins), detailed progress reports, project dashboards with real-time updates, and proactive communication about risks or changes. Stakeholders always have visibility into project health and progress.',
  },
  {
    id: 'pm-risk',
    question: 'How do you handle project risks and delays?',
    answer:
      'I proactively identify potential risks early through risk assessment sessions, maintain a risk register with mitigation strategies, communicate issues immediately to stakeholders, and develop contingency plans. When delays occur, I work to minimize impact and adjust timelines realistically.',
  },
  {
    id: 'pm-deliverables',
    question: 'What deliverables do you provide as a project manager?',
    answer:
      'Deliverables include project charter and roadmap, detailed project plan and timeline, resource allocation plan, regular status reports, risk and issue logs, stakeholder communication updates, sprint/milestone reviews, and post-project retrospectives with lessons learned.',
  },
]

export const uiUxDesignFAQs: ServiceFAQ[] = [
  {
    id: 'uiux-process',
    question: 'What is your UI/UX design process?',
    answer:
      'My process starts with user research and competitive analysis, followed by wireframing to establish structure, then visual design with your brand identity, interactive prototyping, and finally user testing with iterations. I focus on creating intuitive experiences that meet both user needs and business goals.',
  },
  {
    id: 'uiux-deliverables',
    question: 'What deliverables will I receive?',
    answer:
      'You\'ll receive wireframes, high-fidelity mockups in Figma or Adobe XD, interactive prototypes, a design system with components and style guide, user flow diagrams, and documentation for developers. All files are organized and ready for handoff to your development team.',
  },
  {
    id: 'uiux-timeline',
    question: 'How long does a UI/UX design project take?',
    answer:
      'A typical UI/UX project takes 4-8 weeks depending on complexity. A landing page might take 2-3 weeks, while a full web application could take 8-12 weeks. The timeline includes research, design iterations, prototyping, and user testing phases.',
  },
  {
    id: 'uiux-revisions',
    question: 'How many design revisions are included?',
    answer:
      'I typically include 2-3 revision rounds in my projects. The first round happens after wireframes, the second after initial visual designs, and a final round after prototyping. Additional revisions can be accommodated if needed to ensure you\'re completely satisfied.',
  },
  {
    id: 'uiux-research',
    question: 'Do you conduct user research?',
    answer:
      'Yes! User research is crucial for effective design. I conduct user interviews, surveys, competitive analysis, and create user personas. For existing products, I analyze analytics data and conduct usability testing to identify pain points and opportunities for improvement.',
  },
  {
    id: 'uiux-responsive',
    question: 'Will the designs be mobile-responsive?',
    answer:
      'Absolutely! All my designs are mobile-first and fully responsive across all devices. I design for mobile, tablet, and desktop breakpoints, ensuring a consistent and optimized experience for users on any device.',
  },
]

export const webflowFAQs: ServiceFAQ[] = [
  {
    id: 'webflow-capabilities',
    question: 'What can Webflow do that other platforms can\'t?',
    answer:
      'Webflow combines the power of code with visual design, allowing for pixel-perfect custom designs without limitations of templates. It offers built-in CMS, hosting, SEO tools, and interactions/animations without plugins. You get a professional website with the flexibility of code but the ease of visual editing.',
  },
  {
    id: 'webflow-cms',
    question: 'Can I update content myself without coding?',
    answer:
      'Yes! Webflow CMS makes content management incredibly easy. I\'ll set up collections for your blog, products, team members, etc. You can add, edit, and delete content through a user-friendly interface without touching any code. I also provide training to make you comfortable with the CMS.',
  },
  {
    id: 'webflow-migration',
    question: 'Can you migrate my existing website to Webflow?',
    answer:
      'Absolutely! I can migrate your existing website to Webflow, whether it\'s from WordPress, Wix, Squarespace, or a custom-coded site. I\'ll recreate your design (or improve it), migrate your content, set up redirects, and ensure everything works perfectly.',
  },
  {
    id: 'webflow-ecommerce',
    question: 'Can you build an e-commerce store in Webflow?',
    answer:
      'Yes! Webflow has robust e-commerce capabilities. I can build custom online stores with product catalogs, shopping cart, checkout, inventory management, and payment processing. It\'s perfect for businesses that want a unique, branded e-commerce experience.',
  },
  {
    id: 'webflow-maintenance',
    question: 'Will I need ongoing maintenance?',
    answer:
      'Webflow handles hosting, security, and updates automatically, so maintenance is minimal. You can manage content yourself through the CMS. I offer optional maintenance packages for design updates, new features, or ongoing support as your business grows.',
  },
  {
    id: 'webflow-cost',
    question: 'How much does a Webflow website cost?',
    answer:
      'Webflow projects typically range from $3,000-$10,000+ depending on complexity. This includes design, development, CMS setup, and training. Webflow also has subscription costs starting at $14/month for hosting. I provide transparent quotes after understanding your requirements.',
  },
]

export const brandingFAQs: ServiceFAQ[] = [
  {
    id: 'branding-includes',
    question: 'What\'s included in a branding package?',
    answer:
      'A complete branding package includes logo design (primary and variations), brand color palette, typography system, brand guidelines document, business card design, social media templates, and all source files. I can also include letterheads, email signatures, and marketing collateral as needed.',
  },
  {
    id: 'branding-process',
    question: 'How does the branding process work?',
    answer:
      'We start with a brand discovery session to understand your business, values, and target audience. Then I create 2-3 logo concepts with mood boards. After you select a direction, I refine it through 2 revision rounds. Finally, I deliver complete brand guidelines and all assets in various formats.',
  },
  {
    id: 'branding-timeline',
    question: 'How long does a branding project take?',
    answer:
      'A typical branding project takes 3-6 weeks. Logo design alone takes 2-3 weeks, while a complete brand identity with guidelines takes 4-6 weeks. Rush options are available if you have urgent deadlines, though I recommend taking time for proper development.',
  },
  {
    id: 'branding-revisions',
    question: 'How many revisions do I get?',
    answer:
      'I include 2-3 revision rounds in my branding packages. The first round is after initial concepts, the second after selecting a direction, and a final polish round. This ensures we perfect every detail. Additional revisions can be added if needed.',
  },
  {
    id: 'branding-files',
    question: 'What file formats will I receive?',
    answer:
      'You\'ll receive your logo and brand assets in all essential formats: vector files (AI, EPS, SVG), high-resolution PNG and JPG files, and web-optimized versions. You\'ll have everything needed for print, web, merchandise, and any other application.',
  },
  {
    id: 'branding-trademark',
    question: 'Will my logo be trademarked?',
    answer:
      'I design unique, original logos, but trademark registration is a separate legal process that you\'ll need to handle with a trademark attorney. I can recommend attorneys and ensure your logo is distinctive and trademarkable. You own full rights to all designs I create for you.',
  },
]

