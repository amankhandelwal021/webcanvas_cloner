
import { Code } from 'lucide-react';
import { Service, createServiceIcon } from './types';

export const webDevelopmentService: Service = {
  id: 'web-development',
  title: 'Web Development',
  description: 'We build fast, responsive, and accessible websites that deliver exceptional user experiences across all devices.',
  icon: createServiceIcon(Code),
  longDescription: 'Our web development team combines technical expertise with creative problem-solving to build websites and web applications that not only look great but also perform exceptionally well. We focus on creating scalable, maintainable solutions that provide real business value through modern frameworks and technologies.',
  features: [
    'Custom website development',
    'Progressive Web Apps (PWAs)',
    'Headless CMS solutions',
    'Jamstack architecture',
    'Web application development',
    'API development and integration',
    'Performance optimization',
    'Accessibility compliance'
  ],
  benefits: [
    'Improved conversion rates',
    'Enhanced user experience',
    'Faster loading times',
    'Better search engine rankings',
    'Cross-device compatibility',
    'Scalable architecture',
    'Improved security',
    'Lower maintenance costs'
  ],
  technologies: [
    'React.js', 'Next.js', 'Vue.js', 'Svelte',
    'Node.js', 'Express', 'NestJS', 'Django',
    'GraphQL', 'REST APIs', 'Prisma',
    'MongoDB', 'PostgreSQL', 'Firebase',
    'AWS', 'Vercel', 'Netlify',
    'Tailwind CSS', 'TypeScript', 'WebSockets'
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
    },
    {
      title: 'Healthcare Portal System',
      description: 'Developed a secure, HIPAA-compliant healthcare portal that improved patient engagement by 60% and streamlined administrative workflows.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop'
    }
  ]
};
