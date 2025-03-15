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
    fullWidth: true,
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
  // Add more web projects here
]; 