
import { Cpu } from 'lucide-react';
import { Service, createServiceIcon } from './types';

export const aiMlSolutionsService: Service = {
  id: 'ai-ml-solutions',
  title: 'AI & Machine Learning',
  description: 'Harness the power of artificial intelligence and machine learning to gain insights, automate processes, and create intelligent applications.',
  icon: createServiceIcon(Cpu),
  longDescription: 'Our AI and machine learning solutions transform how businesses operate by unlocking the value hidden in your data. We help you implement cutting-edge AI technologies to automate routine tasks, predict outcomes, and make data-driven decisions with unprecedented accuracy.',
  features: [
    'Predictive analytics',
    'Natural language processing',
    'Computer vision solutions',
    'Recommendation engines',
    'Chatbots and virtual assistants',
    'Anomaly detection systems'
  ],
  benefits: [
    'Enhanced decision making',
    'Process automation',
    'Personalized customer experiences',
    'Predictive maintenance',
    'Fraud detection',
    'Competitive advantage through innovation'
  ],
  technologies: [
    'TensorFlow', 'PyTorch', 'Scikit-learn',
    'BERT', 'GPT', 'Computer Vision APIs',
    'Azure ML', 'AWS SageMaker', 'Google AI',
    'Neural Networks', 'Deep Learning', 'NLP'
  ],
  caseStudies: [
    {
      title: 'Predictive Maintenance System',
      description: 'Implemented machine learning model that predicted equipment failures with 92% accuracy, reducing downtime by 37% for a manufacturing client.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Customer Service AI Chatbot',
      description: 'Developed intelligent chatbot handling 65% of customer inquiries automatically, improving response time by 83% and customer satisfaction by 24%.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070&auto=format&fit=crop'
    }
  ]
};
