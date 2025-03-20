import { Project } from './types';

export const mobileProjects: Project[] = [
  {
    id: 2,
    title: "Financial App UI Design: Capital Finance",
    slug: 'financial-app-ui-design',
    category: "mobile",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    client: "Capital Finance",
    completionDate: "August 2023",
    technologies: ["React Native", "Firebase", "Stripe API"],
    description: "Mobile banking application with intuitive investment tracking and portfolio management features. The app incorporates biometric authentication, real-time market data visualization, and personalized financial insights based on spending patterns. We implemented a comprehensive security framework that exceeds industry standards while maintaining a seamless user experience. The design system we created allows for rapid iteration and consistent UI across iOS and Android platforms, reducing development time by 40% for new features.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'Capital Finance needed a mobile banking app that would provide customers with a secure and user-friendly way to manage their finances. They wanted to incorporate investment tracking and portfolio management features to help users make informed financial decisions. The app needed to be easy to use, visually appealing, and compatible with both iOS and Android devices.',
    solution: 'We designed a mobile banking application using React Native for the frontend and Firebase for the backend. The app integrates with the Stripe API for payment processing and includes biometric authentication for added security. We implemented real-time market data visualization and personalized financial insights based on user spending patterns. Our design system allows for rapid iteration and consistent UI across platforms, reducing development time by 40%.',
    industry: 'Finance',
    duration: '8 months',
    results: [ '40% reduction in development time', 'Comprehensive security framework', 'Seamless user experience' ],
    testimonial: {
      content: 'The team at Innovate delivered an exceptional mobile banking app that has transformed the way our customers manage their finances. The app is secure, user-friendly, and visually appealing, with features that help users make informed financial decisions. Our partnership with Innovate has been instrumental in our success, and we look forward to working with them on future projects.',
      author: 'Jane Smith, CTO of Capital Finance',
      role: 'Lead Designer'
    },
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 14,
    title: "Fitness Tracking App: FitLife",
    slug: 'fitness-tracking-app',
    category: "mobile",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop",
    client: "FitLife",
    completionDate: "October 2023",
    technologies: ["Flutter", "Google Fit API", "Firebase"],
    description: "A fitness tracking app that helps users monitor their workouts, nutrition, and health metrics. The app integrates with Google Fit API to sync data from wearable devices and provides personalized workout plans based on user goals. We implemented a gamification system to keep users motivated and engaged. The app has been downloaded over 500,000 times and has a 4.8-star rating on app stores.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'FitLife needed a fitness tracking app that would help users monitor their workouts, nutrition, and health metrics. They wanted the app to integrate with wearable devices and provide personalized workout plans to keep users motivated.',
    solution: 'We developed a fitness tracking app using Flutter for cross-platform compatibility and integrated it with Google Fit API to sync data from wearable devices. The app provides personalized workout plans and includes a gamification system to keep users motivated. The app has been downloaded over 500,000 times and has a 4.8-star rating on app stores.',
    industry: 'Fitness & Wellness',
    duration: '6 months',
    results: [ '500,000+ downloads', '4.8-star rating on app stores', 'Personalized workout plans' ],
    testimonial: {
      content: 'Innovate has been an incredible partner in developing our fitness tracking app. The app is user-friendly, integrates seamlessly with wearable devices, and keeps users motivated with personalized workout plans. We are thrilled with the results and look forward to continuing our partnership.',
      author: 'Alexandra Lee, CEO of FitLife',
      role: 'Product Manager'
    },
    gallery: [
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop'
    ]
  },
  {
    id: 15,
    title: "E-Commerce App: ShopEase",
    slug: 'e-commerce-app',
    category: "mobile",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2015&auto=format&fit=crop",
    client: "ShopEase",
    completionDate: "December 2023",
    technologies: ["React Native", "Node.js", "Stripe API"],
    description: "A feature-rich e-commerce app that provides a seamless shopping experience. The app includes product search, personalized recommendations, and secure payment processing using Stripe API. We implemented a robust backend with Node.js to handle high traffic and ensure fast load times. The app has increased sales by 30% and improved customer retention.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'ShopEase needed an e-commerce app that would provide a seamless shopping experience for customers. They wanted features like product search, personalized recommendations, and secure payment processing to increase sales and improve customer retention.',
    solution: 'We developed a feature-rich e-commerce app using React Native for the frontend and Node.js for the backend. The app includes product search, personalized recommendations, and secure payment processing using Stripe API. The app has increased sales by 30% and improved customer retention.',
    industry: 'Retail',
    duration: '7 months',
    results: [ '30% increase in sales', 'Improved customer retention', 'Seamless shopping experience' ],
    testimonial: {
      content: 'Innovate\'s e-commerce app has transformed our business by providing a seamless shopping experience for our customers. The app is feature-rich, secure, and has significantly increased our sales. We are extremely satisfied with the results and look forward to future collaborations.',
      author: 'Michael Carter, CEO of ShopEase',
      role: 'Marketing Director'
    },
    gallery: [
      'https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2015&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2015&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2015&auto=format&fit=crop'
    ]
  },
  {
    id: 16,
    title: "Travel Planning App: Wanderly",
    slug: 'travel-planning-app',
    category: "mobile",
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop",
    client: "Wanderly",
    completionDate: "February 2024",
    technologies: ["Swift", "Google Maps API", "Firebase"],
    description: "A travel planning app that helps users discover and book travel experiences. The app integrates with Google Maps API for location-based recommendations and provides real-time updates on travel itineraries. We implemented a user-friendly interface and secure booking system to enhance the user experience. The app has been downloaded over 300,000 times and has a 4.7-star rating on app stores.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'Wanderly needed a travel planning app that would help users discover and book travel experiences. They wanted the app to provide location-based recommendations and real-time updates on travel itineraries.',
    solution: 'We developed a travel planning app using Swift for iOS and integrated it with Google Maps API for location-based recommendations. The app provides real-time updates on travel itineraries and includes a secure booking system. The app has been downloaded over 300,000 times and has a 4.7-star rating on app stores.',
    industry: 'Travel & Tourism',
    duration: '5 months',
    results: [ '300,000+ downloads', '4.7-star rating on app stores', 'Real-time travel updates' ],
    testimonial: {
      content: 'Innovate has been an invaluable partner in developing our travel planning app. The app is user-friendly, provides location-based recommendations, and has significantly improved our customer experience. We are thrilled with the results and look forward to continuing our partnership.',
      author: 'Sarah Thompson, CEO of Wanderly',
      role: 'Product Manager'
    },
    gallery: [
      'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 17,
    title: "Health Monitoring App: VitalTrack",
    slug: 'health-monitoring-app',
    category: "mobile",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    client: "VitalTrack",
    completionDate: "April 2024",
    technologies: ["Kotlin", "HealthKit API", "Firebase"],
    description: "A health monitoring app that tracks vital signs and provides personalized health insights. The app integrates with HealthKit API to sync data from wearable devices and provides real-time alerts for abnormal health metrics. We implemented a secure data storage system to protect user privacy. The app has been downloaded over 200,000 times and has a 4.9-star rating on app stores.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'VitalTrack needed a health monitoring app that would track vital signs and provide personalized health insights. They wanted the app to integrate with wearable devices and provide real-time alerts for abnormal health metrics.',
    solution: 'We developed a health monitoring app using Kotlin for Android and integrated it with HealthKit API to sync data from wearable devices. The app provides real-time alerts for abnormal health metrics and includes a secure data storage system to protect user privacy. The app has been downloaded over 200,000 times and has a 4.9-star rating on app stores.',
    industry: 'Healthcare',
    duration: '6 months',
    results: [ '200,000+ downloads', '4.9-star rating on app stores', 'Real-time health alerts' ],
    testimonial: {
      content: 'Innovate has been an incredible partner in developing our health monitoring app. The app is user-friendly, integrates seamlessly with wearable devices, and provides real-time health alerts. We are thrilled with the results and look forward to continuing our partnership.',
      author: 'David Thompson, CEO of VitalTrack',
      role: 'Product Manager'
    },
    gallery: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 18,
    title: "Language Learning App: LinguaMaster",
    slug: 'language-learning-app',
    category: "mobile",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
    client: "LinguaMaster",
    completionDate: "June 2024",
    technologies: ["Flutter", "AI-Powered Chatbot", "Firebase"],
    description: "A language learning app that uses AI-powered chatbots to provide interactive lessons. The app includes speech recognition, personalized learning paths, and gamification to keep users engaged. We implemented a scalable backend with Firebase to handle a growing user base. The app has been downloaded over 400,000 times and has a 4.8-star rating on app stores.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'LinguaMaster needed a language learning app that would provide interactive lessons using AI-powered chatbots. They wanted the app to include speech recognition, personalized learning paths, and gamification to keep users engaged.',
    solution: 'We developed a language learning app using Flutter for cross-platform compatibility and integrated it with an AI-powered chatbot for interactive lessons. The app includes speech recognition, personalized learning paths, and gamification to keep users engaged. The app has been downloaded over 400,000 times and has a 4.8-star rating on app stores.',
    industry: 'Education',
    duration: '8 months',
    results: [ '400,000+ downloads', '4.8-star rating on app stores', 'Interactive AI-powered lessons' ],
    testimonial: {
      content: 'Innovate has been an invaluable partner in developing our language learning app. The app is interactive, engaging, and has significantly improved our user experience. We are thrilled with the results and look forward to continuing our partnership.',
      author: 'Emily Johnson, CEO of LinguaMaster',
      role: 'Product Manager'
    },
    gallery: [
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop'
    ]
  }
];