
import { Server } from 'lucide-react';
import { Service, createServiceIcon } from './types';

export const customSoftwareDevelopmentService: Service = {
  id: 'custom-software-development',
  title: 'Custom Software Development',
  description: 'Tailor-made software solutions designed to solve your unique business challenges and drive operational efficiency.',
  icon: createServiceIcon(Server),
  longDescription: 'Off-the-shelf software rarely meets all your specific business needs. Our custom software development services create purpose-built solutions that align perfectly with your workflows, integrate with your existing systems, and evolve as your business grows. We combine deep technical expertise with business analysis to deliver software that transforms how your organization operates.',
  features: [
    'Business process automation',
    'Enterprise application development',
    'Legacy system modernization',
    'Custom CRM and ERP solutions',
    'Database design and optimization',
    'System integration services',
    'SaaS product development',
    'DevOps implementation',
    'Microservices architecture',
    'Cloud-native applications',
    'Desktop application development'
  ],
  benefits: [
    'Streamlined business processes',
    'Increased employee productivity',
    'Competitive differentiation',
    'Lower long-term costs',
    'Seamless system integration',
    'Scalable solutions that grow with you',
    'Improved data security and compliance',
    'Enhanced decision-making capabilities',
    'Reduced technical debt',
    'Full ownership of intellectual property'
  ],
  technologies: [
    'Java', 'C#', '.NET', 'Python',
    'Angular', 'React', 'Node.js',
    'SQL Server', 'Oracle', 'MySQL',
    'MongoDB', 'PostgreSQL', 'Redis',
    'Microservices architecture', 'Docker', 'Kubernetes',
    'CI/CD pipelines', 'Test automation',
    'RabbitMQ', 'Kafka', 'ElasticSearch'
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
    },
    {
      title: 'Financial Services Platform',
      description: 'Created custom trading platform processing over $50M in daily transactions with 99.99% uptime and advanced security features.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Logistics Management System',
      description: 'Developed comprehensive logistics solution reducing delivery times by 28% and operational costs by 32% while improving tracking accuracy.',
      image: 'https://images.unsplash.com/photo-1566232392379-afd9a0db8915?q=80&w=2070&auto=format&fit=crop'
    }
  ]
};
