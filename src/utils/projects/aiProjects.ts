import { Project } from './types';

export const aiProjects: Project[] = [
  {
    id: 7,
    title: "Customer Sentiment Analysis: RetailGiant",
    slug: 'customer-sentiment-analysis',
    category: "ai",
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop",
    client: "RetailGiant Inc.",
    completionDate: "January 2024",
    technologies: ["Python", "TensorFlow", "BERT", "AWS SageMaker"],
    description: "ML solution that analyzes customer reviews and social media mentions to identify trends and opportunities. The system processes over 50,000 text inputs daily across multiple languages, extracting sentiment, key topics, and emerging issues with 92% accuracy. We implemented a custom NLP pipeline that identifies product-specific feedback and automatically routes insights to appropriate departments. The dashboard provides real-time visualization of sentiment trends, competitive analysis, and actionable recommendations that have helped increase customer satisfaction scores by 28% within six months of implementation.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'RetailGiant needed a solution to analyze customer reviews and social media mentions to identify trends and opportunities. They wanted to extract sentiment, key topics, and emerging issues with high accuracy and process a large volume of text inputs daily. The system needed to provide real-time insights and actionable recommendations to improve customer satisfaction scores.',
    solution: 'We developed a machine learning solution using Python, TensorFlow, BERT, and AWS SageMaker to analyze customer sentiment. The system processes over 50,000 text inputs daily in multiple languages and extracts sentiment, key topics, and emerging issues with 92% accuracy. We implemented a custom NLP pipeline that identifies product-specific feedback and automatically routes insights to appropriate departments. The dashboard provides real-time visualization of sentiment trends, competitive analysis, and actionable recommendations that have increased customer satisfaction scores by 28% within six months.',
    industry: 'Retail',
    duration: '9 months',
    results: [ '92% accuracy in sentiment analysis', 'Real-time visualization of sentiment trends', '28% increase in customer satisfaction scores' ],
    testimonial: {
      content: 'The team at Innovate delivered an exceptional machine learning solution that has transformed the way we analyze customer sentiment. The system processes a large volume of text inputs daily with high accuracy and provides real-time insights that have helped us increase customer satisfaction scores by 28%. Our partnership with Innovate has been instrumental in our success, and we look forward to working with them on future projects.',
      author: 'Sarah Johnson, CMO of RetailGiant Inc.',
      role: 'Data Scientist'
    },
    gallery: [
      'https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 8,
    title: "AI-Powered Makeovers: Personalized Salon Transformations",
    slug: 'ai-powered-makeovers',
    category: "ai",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    client: "SalonTech",
    completionDate: "March 2024",
    technologies: ["Computer Vision", "Machine Learning", "Style Transfer"],
    description: "Indulge in personalized transformations with our AI-driven app that revolutionizes the salon experience. Using advanced facial recognition and style mapping algorithms, the platform creates realistic previews of hairstyles, colors, and makeup looks tailored to each user's unique features. The recommendation engine analyzes thousands of professional styles and considers factors like face shape, skin tone, and personal preferences to suggest optimal looks. Users can book appointments directly through the app, share virtual makeovers on social media, and maintain a digital style history with their stylists for consistent service across multiple visits.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'SalonTech wanted to enhance the salon experience by offering personalized makeovers to customers. They needed an AI-driven app that could create realistic previews of hairstyles, colors, and makeup looks tailored to each user\'s unique features. The app needed to analyze professional styles, consider factors like face shape and skin tone, and suggest optimal looks to users.',
    solution: 'We developed an AI-driven app using computer vision, machine learning, and style transfer algorithms to create personalized makeovers. The platform uses advanced facial recognition and style mapping to generate realistic previews of hairstyles, colors, and makeup looks. The recommendation engine analyzes thousands of professional styles and factors like face shape, skin tone, and personal preferences to suggest optimal looks. Users can book appointments, share virtual makeovers on social media, and maintain a digital style history with their stylists for consistent service.',
    industry: 'Beauty & Wellness',
    duration: '10 months',
    results: [ 'Personalized salon transformations', 'Realistic previews of hairstyles and makeup looks', 'Digital style history for consistent service' ],
    testimonial: {
      content: 'Innovate has been an invaluable partner in developing our AI-driven makeover app. They delivered a personalized solution that has transformed the salon experience for our customers. The app creates realistic previews of hairstyles, colors, and makeup looks tailored to each user\'s unique features. The team at Innovate is professional, creative, and dedicated to our success. We are thrilled with the results and look forward to continuing our partnership.',
      author: 'Alexandra Lee, CEO of SalonTech',
      role: 'Product Manager'
    },
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  // Add more AI projects here
]; 