
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, CheckCircle, ArrowRight, Code, Layers, Globe } from 'lucide-react';
import PageLayout from '../components/PageLayout';

interface Project {
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
  results: string[];
  testimonial?: {
    content: string;
    author: string;
    role: string;
  };
  gallery: string[];
  nextProject?: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern E-commerce Platform',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    client: 'FashionBrand Inc.',
    completionDate: 'June 2023',
    duration: '4 months',
    industry: 'Retail / Fashion',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe', 'Redis', 'ElasticSearch'],
    description: 'A complete e-commerce solution with integrated payment processing, inventory management, and customer analytics for a premium fashion retailer looking to expand their online presence.',
    challenge: 'FashionBrand was struggling with an outdated e-commerce platform that couldn\'t handle their growing inventory and was providing a poor mobile shopping experience. Cart abandonment was high at 76%, and they were unable to implement modern marketing features to increase conversions.',
    solution: 'We developed a custom headless e-commerce platform built on React and Node.js with a MongoDB database. The solution included a responsive design optimized for mobile shoppers, an intelligent product recommendation engine, and a streamlined checkout process. The backend included robust inventory management with real-time stock updates across all sales channels.',
    results: [
      '45% increase in conversion rate within the first 3 months',
      '68% reduction in cart abandonment rate',
      '3.2x improvement in mobile sales',
      '52% increase in average order value through AI-powered product recommendations',
      'Seamless integration with existing ERP and warehouse management systems'
    ],
    testimonial: {
      content: 'The e-commerce platform has completely transformed our online business. The user experience is exceptional, and the backend tools have streamlined our operations significantly. The team was professional, responsive, and delivered exactly what we needed on time and on budget.',
      author: 'Sarah Johnson',
      role: 'CTO, FashionBrand Inc.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2076&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop'
    ],
    nextProject: 2
  },
  {
    id: 2,
    title: 'Financial App UI Design',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    client: 'Capital Finance',
    completionDate: 'August 2023',
    duration: '3 months',
    industry: 'Financial Services',
    technologies: ['React Native', 'Firebase', 'Stripe API', 'Plaid API', 'TypeScript', 'Jest'],
    description: 'Mobile banking application with intuitive investment tracking and portfolio management features, designed for modern investors seeking a comprehensive financial toolkit.',
    challenge: 'Capital Finance needed a mobile application that could provide their clients with easy access to their investment portfolios, enable secure transactions, and deliver insightful analytics about their financial health. Their existing solution was outdated and lacked modern security features.',
    solution: 'We designed and developed a cross-platform mobile application using React Native with a focus on intuitive user experience and robust security. The app includes real-time portfolio tracking, secure transaction processing, personalized financial insights, and integration with multiple financial APIs for comprehensive account aggregation.',
    results: [
      'Increased mobile engagement by 87% compared to previous solution',
      'Reduced customer support inquiries by 42% due to improved UX',
      'Achieved 99.99% uptime with robust security architecture',
      '4.8/5 average rating on app stores within first month of launch',
      'Successfully processed over $50M in transactions in first quarter'
    ],
    testimonial: {
      content: 'The new mobile app has exceeded our expectations in every way. Our clients love the intuitive interface and powerful features, and we\'ve seen a significant increase in engagement metrics. The team\'s attention to security and performance details was particularly impressive.',
      author: 'Robert Chen',
      role: 'VP of Digital, Capital Finance'
    },
    gallery: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607703703674-df96941cad1f?q=80&w=2070&auto=format&fit=crop'
    ],
    nextProject: 3
  },
  // More projects can be added as needed
];

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id === Number(projectId));

  if (!project) {
    return (
      <PageLayout
        hero={{
          title: 'Project Not Found',
          subtitle: 'The project you are looking for does not exist',
          badge: 'Error',
          primaryCta: {
            text: 'Back to Projects',
            link: '/projects'
          }
        }}
      >
        <div className="py-20 md:py-32 text-center">
          <p>The project you are looking for doesn't exist or has been moved.</p>
        </div>
      </PageLayout>
    );
  }

  const categoryLabel = {
    'web': 'Web Design',
    'mobile': 'Mobile App',
    'branding': 'Branding',
    'software': 'Custom Software',
    'ai': 'AI & ML',
    'iot': 'IoT Solutions'
  }[project.category] || project.category;

  return (
    <PageLayout
      hero={{
        title: project.title,
        subtitle: `${categoryLabel} for ${project.client}`,
        badge: 'Case Study',
        primaryCta: {
          text: 'Start Your Project',
          link: '/contact'
        },
        secondaryCta: {
          text: 'See All Projects',
          link: '/projects'
        }
      }}
    >
      {/* Hero Image */}
      <section className="pt-8 pb-16">
        <div className="container px-4 md:px-6">
          <div className="rounded-2xl overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Our Solution</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
            
            <div className="md:col-span-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-6">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Client</h4>
                    <div className="flex items-center">
                      <Users size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                      <p className="font-medium">{project.client}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Industry</h4>
                    <div className="flex items-center">
                      <Globe size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                      <p className="font-medium">{project.industry}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Completion Date</h4>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                      <p className="font-medium">{project.completionDate}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Project Duration</h4>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                      <p className="font-medium">{project.duration}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        >
                          <Code size={12} className="mr-1" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-10 text-center">Results & Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Layers size={24} className="mr-2 text-blue-600 dark:text-blue-400" />
                Key Outcomes
              </h3>
              <ul className="space-y-4">
                {project.results.map((result, index) => (
                  <li key={index} className="flex">
                    <CheckCircle size={20} className="mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {project.testimonial && (
              <div className="bg-blue-600 dark:bg-blue-800 rounded-xl p-8 text-white relative">
                <div className="absolute top-4 right-4 text-5xl opacity-20">"</div>
                <h3 className="text-xl font-bold mb-6">Client Testimonial</h3>
                <p className="italic mb-6 text-blue-50 leading-relaxed">
                  "{project.testimonial.content}"
                </p>
                <div>
                  <p className="font-bold">{project.testimonial.author}</p>
                  <p className="text-blue-200">{project.testimonial.role}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-10 text-center">Project Gallery</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={image} 
                  alt={`${project.title} gallery image ${index + 1}`} 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      {project.nextProject && (
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h3 className="text-lg text-gray-500 dark:text-gray-400 mb-3">Continue Exploring</h3>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">Next Project</h2>
            
            <Link
              to={`/projects/${project.nextProject}`}
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              <span>View Next Case Study</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-blue-600 dark:bg-blue-900 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's collaborate to create innovative solutions that drive results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-md font-medium transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-transparent border border-white/30 rounded-md font-medium transition-all duration-300 hover:bg-white/10"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectDetail;
