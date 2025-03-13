
import { Server } from 'lucide-react';
import { Service, createServiceIcon } from './types';

export const customSoftwareDevelopmentService: Service = {
  id: 'custom-software-development',
  title: 'Custom Software Development',
  description: 'Tailor-made software solutions designed to solve your unique business challenges and drive operational efficiency.',
  icon: createServiceIcon(Server),
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
};
