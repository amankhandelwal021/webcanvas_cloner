import { Project } from './types';

export const webProjects: Project[] = [
  {
    id: 1,
    title: "Modern E-commerce Platform: FashionBrand",
    slug: 'modern-ecommerce-platform',
    category: "web",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    client: "FashionBrand Inc.",
    completionDate: "June 2023",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    description: "A complete e-commerce solution with integrated payment processing, inventory management, and customer analytics. We developed a scalable architecture that handles peak traffic during seasonal sales while maintaining sub-second response times. The platform includes a custom CMS for content editors, AI-powered product recommendations, and a mobile-first responsive design that increased conversion rates by 35%. Our implementation of microservices architecture allows for independent scaling of critical components and simplified maintenance cycles.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'The client needed a modern e-commerce platform that could handle high traffic and provide a seamless shopping experience for customers. They wanted a custom solution that could be easily maintained and scaled as the business grew. The platform needed to be mobile-friendly and integrate with their existing systems for inventory management and customer data.',
    solution: 'We built a custom e-commerce platform using React for the frontend and Node.js for the backend. The platform is hosted on AWS and uses MongoDB for the database. We implemented a microservices architecture to allow for independent scaling of critical components and simplified maintenance cycles. The platform includes a custom CMS for content editors, AI-powered product recommendations, and a mobile-first responsive design that increased conversion rates by 35%.',
    industry: 'E-commerce',
    duration: '12 months',
    results: [ '35% increase in conversion rates', 'Scalable architecture that handles peak traffic', 'Sub-second response times' ],
    testimonial: {
      content: 'Working with the team at Innovate has been a game-changer for our business. They delivered a modern e-commerce platform that exceeded our expectations and helped us increase our sales by 40%. Their team is professional, responsive, and dedicated to our success. We look forward to working with them on future projects.',
      author: 'John Doe, CEO of FashionBrand Inc.',
      role: 'Frontend Developer'
    },
    gallery: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    ]
  },
  {
    id: 21,
    title: "Healthcare Portal: MedConnect",
    slug: 'healthcare-portal',
    category: "web",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    client: "MedConnect",
    completionDate: "December 2023",
    technologies: ["Angular", "Node.js", "MongoDB"],
    description: "A healthcare portal that connects patients with doctors and provides access to medical records. The platform includes features like appointment scheduling, telemedicine, and prescription management. We implemented a secure data storage system to protect patient privacy and ensure compliance with healthcare regulations. The portal has improved patient satisfaction and streamlined healthcare services.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'MedConnect needed a healthcare portal that would connect patients with doctors and provide access to medical records. They wanted features like appointment scheduling, telemedicine, and prescription management to improve patient satisfaction and streamline healthcare services.',
    solution: 'We developed a healthcare portal using Angular for the frontend and Node.js for the backend. The platform includes features like appointment scheduling, telemedicine, and prescription management. We implemented a secure data storage system to protect patient privacy and ensure compliance with healthcare regulations. The portal has improved patient satisfaction and streamlined healthcare services.',
    industry: 'Healthcare',
    duration: '8 months',
    results: [ 'Improved patient satisfaction', 'Streamlined healthcare services', 'Secure data storage system' ],
    testimonial: {
      content: 'Innovate has been an invaluable partner in developing our healthcare portal. The platform is user-friendly, secure, and has significantly improved our patients\' experience. We are thrilled with the results and look forward to continuing our partnership.',
      author: 'David Thompson, CEO of MedConnect',
      role: 'Product Manager'
    },
    gallery: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 19,
    title: "Corporate Website Redesign: TechGlobal",
    slug: 'corporate-website-redesign',
    category: "web",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    client: "TechGlobal",
    completionDate: "August 2023",
    technologies: ["Next.js", "Tailwind CSS", "Contentful CMS"],
    description: "A complete redesign of TechGlobal's corporate website to reflect their innovative brand identity. The new website features a modern design, improved navigation, and seamless integration with Contentful CMS for easy content updates. We also implemented performance optimizations that reduced page load times by 50%. The website has increased user engagement and improved SEO rankings.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'TechGlobal needed a corporate website redesign that would reflect their innovative brand identity. They wanted a modern design, improved navigation, and seamless integration with a CMS for easy content updates. The website needed to be fast, user-friendly, and optimized for SEO.',
    solution: 'We redesigned TechGlobal\'s corporate website using Next.js for the frontend and Tailwind CSS for styling. The website integrates with Contentful CMS for easy content updates and includes performance optimizations that reduced page load times by 50%. The new design has increased user engagement and improved SEO rankings.',
    industry: 'Technology',
    duration: '4 months',
    results: [ '50% reduction in page load times', 'Improved SEO rankings', 'Increased user engagement' ],
    testimonial: {
      content: 'Innovate\'s redesign of our corporate website has been a huge success. The new design reflects our brand identity, and the website is fast, user-friendly, and easy to update. We are extremely satisfied with the results and look forward to future collaborations.',
      author: 'Michael Carter, CEO of TechGlobal',
      role: 'Marketing Director'
    },
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 20,
    title: "Online Learning Platform: EduMaster",
    slug: 'online-learning-platform',
    category: "web",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
    client: "EduMaster",
    completionDate: "October 2023",
    technologies: ["React", "Django", "PostgreSQL"],
    description: "An online learning platform that offers interactive courses and certifications. The platform includes features like video lectures, quizzes, and progress tracking. We implemented a robust backend with Django and PostgreSQL to handle a large number of users and ensure data security. The platform has been used by over 100,000 students and has a 4.8-star rating.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'EduMaster needed an online learning platform that would offer interactive courses and certifications. They wanted features like video lectures, quizzes, and progress tracking to enhance the learning experience. The platform needed to be scalable and secure to handle a large number of users.',
    solution: 'We developed an online learning platform using React for the frontend and Django for the backend. The platform includes features like video lectures, quizzes, and progress tracking. We implemented a robust backend with PostgreSQL to ensure data security and scalability. The platform has been used by over 100,000 students and has a 4.8-star rating.',
    industry: 'Education',
    duration: '6 months',
    results: [ '100,000+ users', '4.8-star rating', 'Interactive learning experience' ],
    testimonial: {
      content: 'Innovate has been an incredible partner in developing our online learning platform. The platform is user-friendly, scalable, and has significantly improved our students\' learning experience. We are thrilled with the results and look forward to continuing our partnership.',
      author: 'Emily Johnson, CEO of EduMaster',
      role: 'Product Manager'
    },
    gallery: [
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop'
    ]
  },
  {
    id: 22,
    title: "Real Estate Listing Platform: HomeFinder",
    slug: 'real-estate-listing-platform',
    category: "web",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    client: "HomeFinder",
    completionDate: "February 2024",
    technologies: ["Vue.js", "Firebase", "Google Maps API"],
    description: "A real estate listing platform that helps users find properties based on their preferences. The platform includes features like property search, virtual tours, and mortgage calculators. We integrated Google Maps API for location-based search and implemented a user-friendly interface. The platform has increased user engagement and improved property sales.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'HomeFinder needed a real estate listing platform that would help users find properties based on their preferences. They wanted features like property search, virtual tours, and mortgage calculators to increase user engagement and improve property sales.',
    solution: 'We developed a real estate listing platform using Vue.js for the frontend and Firebase for the backend. The platform includes features like property search, virtual tours, and mortgage calculators. We integrated Google Maps API for location-based search and implemented a user-friendly interface. The platform has increased user engagement and improved property sales.',
    industry: 'Real Estate',
    duration: '5 months',
    results: [ 'Increased user engagement', 'Improved property sales', 'User-friendly interface' ],
    testimonial: {
      content: 'Innovate has been an incredible partner in developing our real estate listing platform. The platform is user-friendly, feature-rich, and has significantly improved our property sales. We are thrilled with the results and look forward to continuing our partnership.',
      author: 'Sarah Thompson, CEO of HomeFinder',
      role: 'Product Manager'
    },
    gallery: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 23,
    title: "Social Media Dashboard: SocialPulse",
    slug: 'social-media-dashboard',
    category: "web",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop",
    client: "SocialPulse",
    completionDate: "April 2024",
    technologies: ["React", "GraphQL", "AWS"],
    description: "A social media dashboard that provides analytics and insights for businesses. The platform integrates with multiple social media platforms and provides real-time data visualization. We implemented a scalable backend with AWS and used GraphQL for efficient data fetching. The dashboard has improved decision-making and increased ROI for businesses.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'SocialPulse needed a social media dashboard that would provide analytics and insights for businesses. They wanted the platform to integrate with multiple social media platforms and provide real-time data visualization to improve decision-making and increase ROI.',
    solution: 'We developed a social media dashboard using React for the frontend and GraphQL for efficient data fetching. The platform integrates with multiple social media platforms and provides real-time data visualization. We implemented a scalable backend with AWS to ensure performance and reliability. The dashboard has improved decision-making and increased ROI for businesses.',
    industry: 'Marketing',
    duration: '6 months',
    results: [ 'Improved decision-making', 'Increased ROI', 'Real-time data visualization' ],
    testimonial: {
      content: 'Innovate has been an invaluable partner in developing our social media dashboard. The platform is user-friendly, feature-rich, and has significantly improved our decision-making process. We are thrilled with the results and look forward to continuing our partnership.',
      author: 'Alexandra Lee, CEO of SocialPulse',
      role: 'Product Manager'
    },
    gallery: [
      'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop'
    ]
  },
  {
    id: 24,
    title: "Event Management Platform: Eventify",
    slug: 'event-management-platform',
    category: "web",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop",
    client: "Eventify",
    completionDate: "June 2024",
    technologies: ["Svelte", "Firebase", "Stripe API"],
    description: "An event management platform that helps users organize and manage events. The platform includes features like event registration, ticketing, and payment processing. We integrated Stripe API for secure payment processing and implemented a user-friendly interface. The platform has increased event attendance and improved user satisfaction.",
    bgColor: "bg-gray-50 text-black",
    fullWidth: false,
    link: "#",
    challenge: 'Eventify needed an event management platform that would help users organize and manage events. They wanted features like event registration, ticketing, and payment processing to increase event attendance and improve user satisfaction.',
    solution: 'We developed an event management platform using Svelte for the frontend and Firebase for the backend. The platform includes features like event registration, ticketing, and payment processing. We integrated Stripe API for secure payment processing and implemented a user-friendly interface. The platform has increased event attendance and improved user satisfaction.',
    industry: 'Event Management',
    duration: '7 months',
    results: [ 'Increased event attendance', 'Improved user satisfaction', 'Secure payment processing' ],
    testimonial: {
      content: 'Innovate has been an incredible partner in developing our event management platform. The platform is user-friendly, feature-rich, and has significantly improved our event attendance. We are thrilled with the results and look forward to continuing our partnership.',
      author: 'Michael Carter, CEO of Eventify',
      role: 'Product Manager'
    },
    gallery: [
      'https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop'
    ]
  }
]