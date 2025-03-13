
import { PenTool } from 'lucide-react';
import { Service, createServiceIcon } from './types';

export const uiUxDesignService: Service = {
  id: 'ui-ux-design',
  title: 'UI/UX Design',
  description: 'Our design process focuses on creating intuitive, engaging interfaces that align with your brand and business goals.',
  icon: createServiceIcon(PenTool),
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
};
