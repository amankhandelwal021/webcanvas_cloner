import { Code, PenTool, Share2, BarChart, Database, Globe, ShieldCheck, Smartphone, Cpu, Server } from 'lucide-react';
import { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  longDescription?: string;
  features?: string[];
  benefits?: string[];
  caseStudies?: {
    title: string;
    description: string;
    image?: string;
  }[];
  technologies?: string[];
}

const createIcon = (IconComponent: any): ReactNode => {
  return { type: IconComponent, props: { size: 24 } };
};

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'We build fast, responsive, and accessible websites that deliver exceptional user experiences across all devices.',
    icon: createIcon(Code),
    longDescription: 'Our web development team combines technical expertise with creative problem-solving to build websites and web applications that not only look great but also perform exceptionally well. We focus on creating scalable, maintainable solutions that provide real business value.',
    features: [
      'Custom website development',
      'E-commerce solutions',
      'Progressive Web Apps (PWAs)',
      'CMS integration and development',
      'Web application development',
      'API development and integration'
    ],
    benefits: [
      'Improved conversion rates',
      'Enhanced user experience',
      'Faster loading times',
      'Better search engine rankings',
      'Cross-device compatibility',
      'Scalable architecture'
    ],
    technologies: [
      'React.js', 'Next.js', 'Angular', 'Vue.js',
      'Node.js', 'Express', 'Django', 'Laravel',
      'MongoDB', 'PostgreSQL', 'Firebase',
      'AWS', 'Azure', 'Google Cloud',
      'GraphQL', 'REST APIs'
    ],
    caseStudies: [
      {
        title: 'E-commerce Platform Redesign',
        description: 'Increased conversions by 45% through optimized checkout process and improved mobile experience.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'SaaS Application Development',
        description: 'Built a scalable web application with real-time collaboration features serving over 10,000 daily users.',
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Our design process focuses on creating intuitive, engaging interfaces that align with your brand and business goals.',
    icon: createIcon(PenTool),
    longDescription: 'Great design is more than aesthetics; it\'s about creating intuitive, enjoyable experiences that solve real user problems. Our design team works closely with you to understand your users and business objectives, crafting interfaces that delight users while driving business results.',
    features: [
      'User research and testing',
      'Information architecture',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Interaction design',
      'Usability testing'
    ],
    benefits: [
      'Increased user engagement',
      'Higher customer satisfaction',
      'Reduced development costs',
      'Streamlined user journeys',
      'Clearer communication of value',
      'Differentiation from competitors'
    ],
    technologies: [
      'Figma', 'Adobe XD', 'Sketch',
      'InVision', 'Zeplin', 'Framer',
      'Adobe Creative Suite', 'Miro',
      'UserTesting', 'Hotjar', 'Optimal Workshop'
    ],
    caseStudies: [
      {
        title: 'Banking App Redesign',
        description: 'Simplified complex financial transactions resulting in 60% faster task completion and 35% higher customer satisfaction.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'B2B Dashboard Design',
        description: 'Created an intuitive analytics dashboard reducing training time by 75% and increasing feature adoption.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic campaigns that connect with your audience, drive engagement, and deliver measurable results.',
    icon: createIcon(Share2),
    longDescription: 'In today\'s digital landscape, standing out requires more than just a great product. Our digital marketing team creates data-driven strategies that connect with your target audience, build brand awareness, and drive measurable business growth across multiple channels.',
    features: [
      'Search engine optimization (SEO)',
      'Pay-per-click advertising (PPC)',
      'Social media marketing',
      'Content marketing',
      'Email marketing',
      'Analytics and reporting'
    ],
    benefits: [
      'Increased brand awareness',
      'Higher quality leads',
      'Improved ROI on marketing spend',
      'Enhanced customer loyalty',
      'Data-driven decision making',
      'Competitive advantage'
    ],
    technologies: [
      'Google Analytics', 'Google Ads', 'Meta Business Suite',
      'Mailchimp', 'HubSpot', 'SEMrush',
      'Ahrefs', 'Moz', 'Buffer',
      'Hootsuite', 'Canva', 'Adobe Creative Cloud'
    ],
    caseStudies: [
      {
        title: 'B2C Product Launch Campaign',
        description: 'Generated over 2 million impressions and 15,000 new customers through integrated digital marketing campaign.',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop'
      },
      {
        title: 'B2B Lead Generation',
        description: 'Increased qualified leads by 300% and reduced cost per acquisition by 40% with a targeted multi-channel approach.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'analytics-insights',
    title: 'Analytics & Insights',
    description: 'Data-driven intelligence to optimize performance, understand user behavior, and inform business decisions.',
    icon: createIcon(BarChart),
    longDescription: 'Making decisions based on accurate data is crucial for business success. Our analytics services help you collect, analyze, and visualize data from multiple sources to uncover actionable insights that drive growth and optimization opportunities across your digital presence.',
    features: [
      'Data tracking implementation',
      'Custom dashboard creation',
      'User behavior analysis',
      'Conversion rate optimization',
      'A/B testing',
      'Performance reporting'
    ],
    benefits: [
      'Evidence-based decision making',
      'Improved marketing ROI',
      'Enhanced user experience',
      'Identification of growth opportunities',
      'Better understanding of customer journey',
      'Continuous optimization'
    ],
    technologies: [
      'Google Analytics', 'Adobe Analytics',
      'Tableau', 'Power BI', 'Looker',
      'Mixpanel', 'Amplitude', 'Pendo',
      'Hotjar', 'Optimizely', 'Google Optimize'
    ],
    caseStudies: [
      {
        title: 'E-commerce Analytics Implementation',
        description: 'Identified key drop-off points in checkout process, leading to optimization that increased conversions by 25%.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
      },
      {
        title: 'Marketing Channel Attribution',
        description: 'Developed multi-touch attribution model revealing true ROI across channels, reallocating budget for 30% efficiency gain.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable, secure cloud infrastructure and services that drive innovation and reduce operational costs.',
    icon: createIcon(Database),
    longDescription: 'Cloud technology has revolutionized how businesses operate. Our cloud solutions team helps you leverage the power of cloud platforms to increase agility, enhance security, and scale your business while optimizing costs and improving operational efficiency.',
    features: [
      'Cloud migration strategies',
      'Infrastructure as Code (IaC)',
      'Serverless architecture',
      'Containerization and orchestration',
      'Cloud security implementation',
      'Cost optimization'
    ],
    benefits: [
      'Increased business agility',
      'Reduced infrastructure costs',
      'Improved scalability',
      'Enhanced disaster recovery',
      'Better security posture',
      'Global availability'
    ],
    technologies: [
      'AWS', 'Microsoft Azure', 'Google Cloud Platform',
      'Docker', 'Kubernetes', 'Terraform',
      'CloudFormation', 'Lambda', 'Firebase',
      'Netlify', 'Vercel', 'Digital Ocean'
    ],
    caseStudies: [
      {
        title: 'Legacy System Migration',
        description: 'Migrated on-premise infrastructure to cloud, reducing operational costs by 60% and improving system reliability.',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'Serverless Application Architecture',
        description: 'Redesigned monolithic application as serverless microservices, achieving 99.99% uptime and 40% cost reduction.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'ecommerce-solutions',
    title: 'E-commerce Solutions',
    description: 'Custom e-commerce platforms and strategies that drive sales, enhance customer experience, and scale with your business.',
    icon: createIcon(Globe),
    longDescription: 'E-commerce is more than just an online store; it\'s a complete digital sales ecosystem. Our e-commerce solutions combine compelling design, robust technology, and strategic marketing to create online shopping experiences that convert visitors into loyal customers.',
    features: [
      'Custom e-commerce development',
      'Shopping cart optimization',
      'Payment gateway integration',
      'Inventory management systems',
      'Customer account portals',
      'Order fulfillment automation'
    ],
    benefits: [
      'Higher conversion rates',
      'Increased average order value',
      'Improved customer retention',
      'Streamlined operations',
      'Better inventory management',
      'Enhanced customer insights'
    ],
    technologies: [
      'Shopify', 'WooCommerce', 'Magento',
      'BigCommerce', 'Stripe', 'PayPal',
      'Square', 'Authorize.net', 'ShipStation',
      'Inventory Planner', 'Klaviyo', 'Yotpo'
    ],
    caseStudies: [
      {
        title: 'D2C Brand Launch',
        description: 'Built custom e-commerce platform for product launch, achieving $1M in sales within first quarter.',
        image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'B2B E-commerce Portal',
        description: 'Developed specialized wholesale ordering system with custom pricing tiers, increasing B2B sales by 85%.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions that protect your digital assets, customer data, and business reputation.',
    icon: createIcon(ShieldCheck),
    longDescription: 'In an increasingly connected world, cybersecurity isn\'t optional—it\'s essential. Our security specialists help identify vulnerabilities, implement robust protections, and develop security-conscious practices to safeguard your business and customer data against evolving threats.',
    features: [
      'Security assessments and audits',
      'Penetration testing',
      'Security architecture design',
      'Compliance implementation',
      'Security monitoring and response',
      'Employee security training'
    ],
    benefits: [
      'Reduced security risks',
      'Protected customer data',
      'Regulatory compliance',
      'Minimized breach impact',
      'Enhanced customer trust',
      'Business continuity assurance'
    ],
    technologies: [
      'SIEM Solutions', 'Firewalls & WAFs',
      'Endpoint Protection', 'Identity & Access Management',
      'Data Loss Prevention', 'Encryption Tools',
      'VPNs', 'Vulnerability Scanners', 'Penetration Testing Tools'
    ],
    caseStudies: [
      {
        title: 'Financial Services Security Program',
        description: 'Implemented comprehensive security framework achieving regulatory compliance and preventing multiple attack vectors.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'E-commerce Security Enhancement',
        description: 'Conducted penetration testing and remediation, securing customer data and payment information across platforms.',
        image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that engage users with intuitive experiences and powerful functionality.',
    icon: createIcon(Smartphone),
    longDescription: 'Mobile apps provide direct access to your customers\' most personal device. Our mobile development team creates intuitive, high-performance applications that engage users, solve real problems, and represent your brand beautifully across all mobile platforms.',
    features: [
      'iOS and Android development',
      'Cross-platform solutions',
      'Progressive Web Apps',
      'Mobile UI/UX design',
      'App Store optimization',
      'Mobile analytics implementation'
    ],
    benefits: [
      'Enhanced customer engagement',
      'New revenue channels',
      'Improved brand presence',
      'Personalized user experiences',
      'Offline functionality',
      'Competitive advantage'
    ],
    technologies: [
      'React Native', 'Flutter', 'Swift',
      'Kotlin', 'Objective-C', 'Java',
      'Firebase', 'Realm', 'SQLite',
      'Push Notifications', 'In-App Purchases', 'ARKit/ARCore'
    ],
    caseStudies: [
      {
        title: 'Retail Loyalty App',
        description: 'Developed mobile app with personalized recommendations increasing store visits by 40% and average purchase value by 25%.',
        image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'Field Service Application',
        description: 'Created mobile solution for field technicians reducing paperwork by 90% and increasing daily service capacity by 35%.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    description: 'Tailor-made software solutions designed to solve your unique business challenges and drive operational efficiency.',
    icon: createIcon(Server),
    longDescription: 'Off-the-shelf software rarely meets all your specific business needs. Our custom software development services create purpose-built solutions that align perfectly with your workflows, integrate with your existing systems, and evolve as your business grows.',
    features: [
      'Business process automation',
      'Enterprise application development',
      'Legacy system modernization',
      'Custom CRM and ERP solutions',
      'Database design and optimization',
      'System integration services'
    ],
    benefits: [
      'Streamlined business processes',
      'Increased employee productivity',
      'Competitive differentiation',
      'Lower long-term costs',
      'Seamless system integration',
      'Scalable solutions that grow with you'
    ],
    technologies: [
      'Java', 'C#', '.NET', 'Python',
      'Angular', 'React', 'Node.js',
      'SQL Server', 'Oracle', 'MySQL',
      'MongoDB', 'Microservices architecture',
      'CI/CD pipelines', 'Test automation'
    ],
    caseStudies: [
      {
        title: 'Manufacturing Process Automation',
        description: 'Developed custom ERP solution that streamlined operations, reducing production costs by 23% and improving throughput by 35%.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'Healthcare Management System',
        description: 'Built HIPAA-compliant patient management platform that improved appointment scheduling efficiency by 60% and reduced administrative overhead.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'ai-ml-solutions',
    title: 'AI & Machine Learning',
    description: 'Harness the power of artificial intelligence and machine learning to gain insights, automate processes, and create intelligent applications.',
    icon: createIcon(Cpu),
    longDescription: 'Our AI and machine learning solutions transform how businesses operate by unlocking the value hidden in your data. We help you implement cutting-edge AI technologies to automate routine tasks, predict outcomes, and make data-driven decisions with unprecedented accuracy.',
    features: [
      'Predictive analytics',
      'Natural language processing',
      'Computer vision solutions',
      'Recommendation engines',
      'Chatbots and virtual assistants',
      'Anomaly detection systems'
    ],
    benefits: [
      'Enhanced decision making',
      'Process automation',
      'Personalized customer experiences',
      'Predictive maintenance',
      'Fraud detection',
      'Competitive advantage through innovation'
    ],
    technologies: [
      'TensorFlow', 'PyTorch', 'Scikit-learn',
      'BERT', 'GPT', 'Computer Vision APIs',
      'Azure ML', 'AWS SageMaker', 'Google AI',
      'Neural Networks', 'Deep Learning', 'NLP'
    ],
    caseStudies: [
      {
        title: 'Predictive Maintenance System',
        description: 'Implemented machine learning model that predicted equipment failures with 92% accuracy, reducing downtime by 37% for a manufacturing client.',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'Customer Service AI Chatbot',
        description: 'Developed intelligent chatbot handling 65% of customer inquiries automatically, improving response time by 83% and customer satisfaction by 24%.',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getFeaturedServices = (count: number = 4): Service[] => {
  return services.slice(0, count);
};
