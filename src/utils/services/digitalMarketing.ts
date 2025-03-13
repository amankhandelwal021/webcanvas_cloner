
import { Share2 } from 'lucide-react';
import { Service, createServiceIcon } from './types';

export const digitalMarketingService: Service = {
  id: 'digital-marketing',
  title: 'Digital Marketing',
  description: 'Strategic campaigns that connect with your audience, drive engagement, and deliver measurable results.',
  icon: createServiceIcon(Share2),
  longDescription: 'In today\'s digital landscape, standing out requires more than just a great product. Our digital marketing team creates data-driven strategies that connect with your target audience, build brand awareness, and drive measurable business growth across multiple channels. We combine creativity with analytics to deliver campaigns that generate real ROI.',
  features: [
    'Search engine optimization (SEO)',
    'Pay-per-click advertising (PPC)',
    'Social media marketing & management',
    'Content marketing & strategy',
    'Email marketing automation',
    'Conversion rate optimization (CRO)',
    'Influencer marketing campaigns',
    'Marketing analytics & reporting'
  ],
  benefits: [
    'Increased brand awareness',
    'Higher quality leads',
    'Improved ROI on marketing spend',
    'Enhanced customer loyalty',
    'Data-driven decision making',
    'Competitive advantage',
    'Multi-channel presence',
    'Improved customer lifetime value'
  ],
  technologies: [
    'Google Analytics', 'Google Ads', 'Meta Business Suite',
    'Mailchimp', 'HubSpot', 'SEMrush',
    'Ahrefs', 'Moz', 'Buffer',
    'Hootsuite', 'Canva', 'Adobe Creative Cloud',
    'Google Tag Manager', 'Klaviyo', 'ActiveCampaign',
    'TikTok Ads', 'LinkedIn Marketing Solutions'
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
    },
    {
      title: 'E-commerce SEO Overhaul',
      description: 'Implemented comprehensive SEO strategy resulting in 187% increase in organic traffic and 94% increase in organic revenue.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop'
    }
  ]
};
