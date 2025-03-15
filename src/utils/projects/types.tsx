export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  image: string;
  client: string;
  completionDate: string;
  technologies: string[];
  description: string;
  bgColor: string;
  fullWidth: boolean;
  link: string;
  challenge: string;
  solution: string;
  industry: string;
  duration: string;
  results: string[];
  testimonial: {
    content: string;
    author: string;
    role: string;
  },
  gallery: string[];
} 