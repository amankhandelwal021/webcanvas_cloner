
import { ShieldCheck } from 'lucide-react';
import { Service, createServiceIcon } from './types';

export const cybersecurityService: Service = {
  id: 'cybersecurity',
  title: 'Cybersecurity',
  description: 'Comprehensive security solutions that protect your digital assets, customer data, and business reputation.',
  icon: createServiceIcon(ShieldCheck),
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
};
