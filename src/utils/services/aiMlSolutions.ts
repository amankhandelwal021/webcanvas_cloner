
import { Cpu } from 'lucide-react';
import { Service, createServiceIcon } from './types';

export const aiMlSolutionsService: Service = {
  id: 'ai-ml-solutions',
  title: 'AI & Machine Learning',
  description: 'Harness the power of artificial intelligence and machine learning to gain insights, automate processes, and create intelligent applications.',
  icon: createServiceIcon(Cpu),
  longDescription: 'Our AI and machine learning solutions transform how businesses operate by unlocking the value hidden in your data. We help you implement cutting-edge AI technologies to automate routine tasks, predict outcomes, and make data-driven decisions with unprecedented accuracy. From computer vision to natural language processing, we build custom AI solutions that solve real-world business problems.',
  features: [
    'Predictive analytics',
    'Natural language processing',
    'Computer vision solutions',
    'Recommendation engines',
    'Chatbots and virtual assistants',
    'Anomaly detection systems',
    'AI-powered process automation',
    'Generative AI implementation',
    'Large language model fine-tuning',
    'Voice recognition systems',
    'Machine learning model training'
  ],
  benefits: [
    'Enhanced decision making',
    'Process automation',
    'Personalized customer experiences',
    'Predictive maintenance',
    'Fraud detection',
    'Competitive advantage through innovation',
    'Reduced operational costs',
    'Improved accuracy and efficiency',
    'Advanced business intelligence',
    'Scalable AI capabilities'
  ],
  technologies: [
    'TensorFlow', 'PyTorch', 'Scikit-learn',
    'BERT', 'GPT-4', 'LangChain',
    'Llama', 'Stable Diffusion', 'Computer Vision APIs',
    'Azure ML', 'AWS SageMaker', 'Google AI',
    'Neural Networks', 'Deep Learning', 'NLP',
    'Vector Databases', 'Hugging Face',
    'MLOps pipelines', 'Kubernetes for ML'
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
    },
    {
      title: 'Computer Vision Quality Control',
      description: 'Built computer vision system that detected manufacturing defects with 99.2% accuracy, reducing quality issues by 78% and inspection costs by 45%.',
      image: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=2064&auto=format&fit=crop'
    },
    {
      title: 'Personalized Recommendation Engine',
      description: 'Implemented AI-driven recommendation system increasing customer engagement by 58% and average order value by 31% for e-commerce platform.',
      image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2070&auto=format&fit=crop'
    }
  ]
};
