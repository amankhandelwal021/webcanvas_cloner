
// Service types
export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  caseStudies: {
    title: string;
    description: string;
    image: string;
  }[];
}

// Project types
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  client?: string;
  completionDate?: string;
  duration?: string;
  industry?: string;
  technologies?: string[];
  description?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  testimonial?: {
    content: string;
    author: string;
    role: string;
  };
  gallery?: string[];
  nextProject?: number;
}

// Case Study types
export interface CaseStudy {
  id: number;
  title: string;
  category: string;
  image: string;
  client: string;
  completionDate: string;
  duration: string;
  industry: string;
  technologies: string[];
  description: string;
  challenge: string;
  solution: string;
  approach: string;
  results: string[];
  testimonial?: {
    content: string;
    author: string;
    role: string;
  };
  gallery: string[];
  nextProject?: number;
}

// Team member types
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

// Testimonial types
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}
