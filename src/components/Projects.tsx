
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const filters = [
    { value: 'all', label: 'All' },
    { value: 'web', label: 'Web Design' },
    { value: 'software', label: 'Custom Software' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'ai', label: 'AI & ML' },
    { value: 'iot', label: 'IoT Solutions' },
  ];
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern E-commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      description: 'Complete e-commerce solution with integrated payment processing and inventory management.'
    },
    {
      id: 2,
      title: 'Financial App UI Design',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      description: 'Cross-platform mobile banking solution with secure transaction processing.'
    },
    {
      id: 3,
      title: 'AI-Powered Predictive Maintenance',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
      description: 'Machine learning system to forecast equipment failures before they occur.'
    },
    {
      id: 4,
      title: 'Healthcare Mobile Application',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
      description: 'HIPAA-compliant healthcare platform with telemedicine and patient portal.'
    },
    {
      id: 5,
      title: 'Smart Home IoT Ecosystem',
      category: 'iot',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2069&auto=format&fit=crop',
      description: 'Comprehensive smart home system with unified control of all connected devices.'
    },
    {
      id: 6,
      title: 'Enterprise Digital Transformation',
      category: 'software',
      image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=2025&auto=format&fit=crop',
      description: 'Modern, scalable microservices architecture to replace legacy systems.'
    },
  ];
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);
    
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-20 md:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Recent work we're proud of
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Explore our portfolio of innovative digital solutions.
          </p>
        </div>
        
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {filteredProjects.map((project, index) => (
            <Link
              to={`/case-studies/${project.id}`}
              key={project.id}
              className={`group overflow-hidden rounded-xl transition-all duration-700 delay-${index * 100} ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="relative overflow-hidden rounded-xl">
                <div className="img-zoom-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover img-zoom"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/80 mb-3">{project.description}</p>
                    <span className="text-blue-300 text-sm uppercase tracking-wider">{filters.find(f => f.value === project.category)?.label}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link
            to="/projects" 
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-md font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
          >
            <span className="flex items-center">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
