
import { Code, PenTool, Share2, BarChart, Database, Globe, ShieldCheck, Smartphone } from 'lucide-react';
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
  }[];
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'We build fast, responsive, and accessible websites that deliver exceptional user experiences across all devices.',
    icon: Code && { type: Code, props: { size: 24 } },
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
    caseStudies: [
      {
        title: 'E-commerce Platform Redesign',
        description: 'Increased conversions by 45% through optimized checkout process and improved mobile experience.'
      },
      {
        title: 'SaaS Application Development',
        description: 'Built a scalable web application with real-time collaboration features serving over 10,000 daily users.'
      }
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Our design process focuses on creating intuitive, engaging interfaces that align with your brand and business goals.',
    icon: PenTool && { type: PenTool, props: { size: 24 } },
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
    caseStudies: [
      {
        title: 'Banking App Redesign',
        description: 'Simplified complex financial transactions resulting in 60% faster task completion and 35% higher customer satisfaction.'
      },
      {
        title: 'B2B Dashboard Design',
        description: 'Created an intuitive analytics dashboard reducing training time by 75% and increasing feature adoption.'
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic campaigns that connect with your audience, drive engagement, and deliver measurable results.',
    icon: Share2 && { type: Share2, props: { size: 24 } },
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
    caseStudies: [
      {
        title: 'B2C Product Launch Campaign',
        description: 'Generated over 2 million impressions and 15,000 new customers through integrated digital marketing campaign.'
      },
      {
        title: 'B2B Lead Generation',
        description: 'Increased qualified leads by A new lead generation strategy: achieved 300% increase in qualified leads and 40% reduction in cost per acquisition.'
      }
    ]
  },
  {
    id: 'analytics-insights',
    title: 'Analytics & Insights',
    description: 'Data-driven intelligence to optimize performance, understand user behavior, and inform business decisions.',
    icon: BarChart && { type: BarChart, props: { size: 24 } },
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
    caseStudies: [
      {
        title: 'E-commerce Analytics Implementation',
        description: 'Identified key drop-off points in checkout process, leading to optimization that increased conversions by 25%.'
      },
      {
        title: 'Marketing Channel Attribution',
        description: 'Developed multi-touch attribution model revealing true ROI across channels, reallocating budget for 30% efficiency gain.'
      }
    ]
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable, secure cloud infrastructure and services that drive innovation and reduce operational costs.',
    icon: Database && { type: Database, props: { size: 24 } },
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
    caseStudies: [
      {
        title: 'Legacy System Migration',
        description: 'Migrated on-premise infrastructure to cloud, reducing operational costs by 60% and improving system reliability.'
      },
      {
        title: 'Serverless Application Architecture',
        description: 'Redesigned monolithic application as serverless microservices, achieving 99.99% uptime and 40% cost reduction.'
      }
    ]
  },
  {
    id: 'ecommerce-solutions',
    title: 'E-commerce Solutions',
    description: 'Custom e-commerce platforms and strategies that drive sales, enhance customer experience, and scale with your business.',
    icon: Globe && { type: Globe, props: { size: 24 } },
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
    caseStudies: [
      {
        title: 'D2C Brand Launch',
        description: 'Built custom e-commerce platform for product launch, achieving $1M in sales within first quarter.'
      },
      {
        title: 'B2B E-commerce Portal',
        description: 'Developed specialized wholesale ordering system with custom pricing tiers, increasing B2B sales by 85%.'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions that protect your digital assets, customer data, and business reputation.',
    icon: ShieldCheck && { type: ShieldCheck, props: { size: 24 } },
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
    caseStudies: [
      {
        title: 'Financial Services Security Program',
        description: 'Implemented comprehensive security framework achieving regulatory compliance and preventing multiple attack vectors.'
      },
      {
        title: 'E-commerce Security Enhancement',
        description: 'Conducted penetration testing and remediation, securing customer data and payment information across platforms.'
      }
    ]
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that engage users with intuitive experiences and powerful functionality.',
    icon: Smartphone && { type: Smartphone, props: { size: 24 } },
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
    caseStudies: [
      {
        title: 'Retail Loyalty App',
        description: 'Developed mobile app with personalized recommendations increasing store visits by 40% and average purchase value by 25%.'
      },
      {
        title: 'Field Service Application',
        description: 'Created mobile solution for field technicians reducing paperwork by 90% and increasing daily service capacity by 35%.'
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
