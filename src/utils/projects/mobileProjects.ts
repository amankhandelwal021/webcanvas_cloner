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
    fullWidth: true,
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
  // Add more mobile projects here
]; 