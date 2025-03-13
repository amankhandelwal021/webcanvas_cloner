
import { Database } from 'lucide-react';
import { Service, createServiceIcon } from './types';

export const cloudSolutionsService: Service = {
  id: 'cloud-solutions',
  title: 'Cloud Solutions',
  description: 'Scalable, secure cloud infrastructure and services that drive innovation and reduce operational costs.',
  icon: createServiceIcon(Database),
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
};
