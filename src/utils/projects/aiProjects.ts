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
    technologies: ["Python", "TensorFlow", "BERT", "AWS SageMaker", "OpenAI GPT-4"],
    description: "ML solution that analyzes customer reviews and social media mentions to identify trends and opportunities. The system processes over 50,000 text inputs daily across multiple languages, extracting sentiment, key topics, and emerging issues with 92% accuracy. We implemented a custom NLP pipeline that identifies product-specific feedback and automatically routes insights to appropriate departments. The dashboard provides real-time visualization of sentiment trends, competitive analysis, and actionable recommendations that have helped increase customer satisfaction scores by 28% within six months of implementation.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'RetailGiant needed a solution to analyze customer reviews and social media mentions to identify trends and opportunities. They wanted to extract sentiment, key topics, and emerging issues with high accuracy and process a large volume of text inputs daily. The system needed to provide real-time insights and actionable recommendations to improve customer satisfaction scores.',
    solution: 'We developed a machine learning solution using Python, TensorFlow, BERT, AWS SageMaker, and OpenAI GPT-4 to analyze customer sentiment. The system processes over 50,000 text inputs daily in multiple languages and extracts sentiment, key topics, and emerging issues with 92% accuracy. We implemented a custom NLP pipeline that identifies product-specific feedback and automatically routes insights to appropriate departments. The dashboard provides real-time visualization of sentiment trends, competitive analysis, and actionable recommendations that have increased customer satisfaction scores by 28% within six months.',
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
    id: 10,
    title: "AI-Driven Financial Forecasting",
    slug: 'ai-financial-forecasting',
    category: "ai",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2111&auto=format&fit=crop",
    client: "FinTech Global",
    completionDate: "July 2024",
    technologies: ["OpenAI GPT-4", "LLM", "Gemini API", "Time Series Analysis", "Machine Learning"],
    description: "An advanced AI system for financial forecasting and risk analysis. The platform leverages OpenAI GPT-4, LLMs, and the Gemini API to analyze historical financial data, predict market trends, and provide actionable insights. The system supports real-time data processing, scenario modeling, and risk assessment, enabling businesses to make informed financial decisions. It has been instrumental in improving forecasting accuracy by 35% and reducing financial risks for clients.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'FinTech Global needed a robust AI solution to improve financial forecasting accuracy and reduce risks. The system had to analyze large volumes of historical data, predict market trends, and provide real-time insights to support decision-making.',
    solution: 'We developed an AI-driven financial forecasting platform using OpenAI GPT-4, LLMs, and the Gemini API. The system analyzes historical financial data, predicts market trends, and provides actionable insights. It supports real-time data processing, scenario modeling, and risk assessment, enabling businesses to make informed decisions. The platform has improved forecasting accuracy by 35% and significantly reduced financial risks.',
    industry: 'Finance',
    duration: '12 months',
    results: [ '35% improvement in forecasting accuracy', 'Real-time market trend analysis', 'Reduced financial risks for clients' ],
    testimonial: {
      content: 'Innovate\'s AI-driven financial forecasting platform has transformed our ability to predict market trends and manage risks. The integration of OpenAI GPT-4 and the Gemini API has provided us with unparalleled accuracy and real-time insights. We are extremely satisfied with the results and look forward to future collaborations.',
      author: 'David Thompson, CFO of FinTech Global',
      role: 'Financial Analyst'
    },
    gallery: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2111&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2111&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2111&auto=format&fit=crop'
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
    technologies: ["Computer Vision", "Machine Learning", "Style Transfer", "OpenAI DALL-E"],
    description: "Indulge in personalized transformations with our AI-driven app that revolutionizes the salon experience. Using advanced facial recognition and style mapping algorithms, the platform creates realistic previews of hairstyles, colors, and makeup looks tailored to each user's unique features. The recommendation engine analyzes thousands of professional styles and considers factors like face shape, skin tone, and personal preferences to suggest optimal looks. Users can book appointments directly through the app, share virtual makeovers on social media, and maintain a digital style history with their stylists for consistent service across multiple visits.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'SalonTech wanted to enhance the salon experience by offering personalized makeovers to customers. They needed an AI-driven app that could create realistic previews of hairstyles, colors, and makeup looks tailored to each user\'s unique features. The app needed to analyze professional styles, consider factors like face shape and skin tone, and suggest optimal looks to users.',
    solution: 'We developed an AI-driven app using computer vision, machine learning, style transfer, and OpenAI DALL-E to create personalized makeovers. The platform uses advanced facial recognition and style mapping to generate realistic previews of hairstyles, colors, and makeup looks. The recommendation engine analyzes thousands of professional styles and factors like face shape, skin tone, and personal preferences to suggest optimal looks. Users can book appointments, share virtual makeovers on social media, and maintain a digital style history with their stylists for consistent service.',
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
  {
    id: 9,
    title: "AI-Powered Legal Document Summarization",
    slug: 'ai-legal-document-summarization',
    category: "ai",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    client: "LegalEase Solutions",
    completionDate: "May 2024",
    technologies: ["OpenAI GPT-4", "LLM", "Natural Language Processing", "Gemini API"],
    description: "A cutting-edge AI solution designed to streamline legal document analysis. The system uses advanced LLMs (Large Language Models) and OpenAI GPT-4 to summarize lengthy legal documents, contracts, and case files into concise, actionable insights. The Gemini API integration ensures high accuracy and contextual understanding, while the platform supports multiple languages and legal jurisdictions. Lawyers and legal professionals can save hours of manual work, improve efficiency, and focus on strategic decision-making.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'LegalEase Solutions needed a tool to help legal professionals quickly summarize and analyze lengthy legal documents. The solution had to handle complex legal jargon, support multiple languages, and provide accurate, actionable insights to save time and improve efficiency.',
    solution: 'We developed an AI-powered platform using OpenAI GPT-4, LLMs, and the Gemini API to summarize legal documents. The system processes complex legal texts, extracts key insights, and generates concise summaries. It supports multiple languages and legal jurisdictions, ensuring high accuracy and contextual understanding. The platform has significantly reduced the time spent on manual document analysis, allowing legal professionals to focus on strategic tasks.',
    industry: 'Legal',
    duration: '8 months',
    results: [ '90% reduction in document analysis time', 'Support for multiple languages and legal jurisdictions', 'Improved accuracy in legal document summarization' ],
    testimonial: {
      content: 'The AI-powered document summarization tool developed by Innovate has been a game-changer for our legal team. It saves us countless hours and provides accurate, actionable insights. The integration of OpenAI GPT-4 and the Gemini API ensures high-quality results, even for complex legal documents. We highly recommend Innovate for their expertise and innovative solutions.',
      author: 'Michael Carter, CEO of LegalEase Solutions',
      role: 'Legal Consultant'
    },
    gallery: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop'
    ]
  },
];