
import { Globe } from 'lucide-react';
import { Service, createServiceIcon } from './types';

export const ecommerceSolutionsService: Service = {
  id: 'ecommerce-solutions',
  title: 'E-commerce Solutions',
  description: 'Custom e-commerce platforms and strategies that drive sales, enhance customer experience, and scale with your business.',
  icon: createServiceIcon(Globe),
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
};
