
import { BarChart } from 'lucide-react';
import { Service, createServiceIcon } from './types';

export const analyticsInsightsService: Service = {
  id: 'analytics-insights',
  title: 'Analytics & Insights',
  description: 'Data-driven intelligence to optimize performance, understand user behavior, and inform business decisions.',
  icon: createServiceIcon(BarChart),
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
};
