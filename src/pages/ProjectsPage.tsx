
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Star, Users, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { getProjects } from '@/utils/projects';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  url: string;
  client?: string;
  completionDate?: string;
  technologies?: string[];
  description?: string;
}

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [featuredVisible, setFeaturedVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const filters = [
    { value: 'all', label: 'All' },
    { value: 'web', label: 'Web Design' },
    { value: 'branding', label: 'Branding' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'software', label: 'Custom Software' },
    { value: 'ai', label: 'AI & ML' },
  ];
  
  const projects = getProjects();

  const featuredProjects = projects.slice(0, 3);
  
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, FashionBrand Inc.',
      content: 'The e-commerce platform developed by this team exceeded our expectations. Sales have increased by 45% since launch, and the admin interface has made managing our product catalog so much easier.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, MediCare Solutions',
      content: 'The healthcare dashboard has transformed how we make decisions. We now have real-time insights into patient care metrics that have helped us improve outcomes by 32% in just six months.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop'
    },
    {
      name: 'Amanda Peters',
      role: 'Marketing Director, NextGen Tech',
      content: 'Our branding project was handled with incredible care and creativity. The team really understood our vision and translated it into a cohesive identity that has resonated with our target audience.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop'
    }
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
    
    const featuredObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFeaturedVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const testimonialsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTestimonialsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    if (featuredRef.current) {
      featuredObserver.observe(featuredRef.current);
    }
    
    if (testimonialsRef.current) {
      testimonialsObserver.observe(testimonialsRef.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      if (featuredRef.current) {
        featuredObserver.unobserve(featuredRef.current);
      }
      if (testimonialsRef.current) {
        testimonialsObserver.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  return (
    <PageLayout
      hero={{
        title: "Our Projects",
        subtitle: "Recent work we're proud of",
        badge: "Portfolio",
        primaryCta: {
          text: "Start Your Project",
          link: "/contact"
        }
      }}
    >
      {/* Featured Projects Section */}
      <section 
        ref={featuredRef}
        className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
              Success stories that drive results
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore our most impactful projects and the measurable outcomes we've achieved for our clients.
            </p>
          </div>
          
          <div 
            className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
              featuredVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <span className="text-blue-300 text-sm">{filters.find(f => f.value === project.category)?.label}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-400 dark:text-gray-500 flex items-center">
                      <Users size={14} className="mr-1" />
                      {project.client}
                    </span>
                    <span className="text-sm font-medium text-gray-400 dark:text-gray-500 flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {project.completionDate}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description?.substring(0, 120)}...
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies?.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies && project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <Link 
                    to={project.slug} 
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    View case study
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section 
        id="projects" 
        ref={ref}
        className="py-20 md:py-32"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
              Our complete portfolio
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore our portfolio of innovative digital solutions across various industries.
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
                to={project.slug}
                key={project.id}
                className={`group overflow-hidden rounded-xl transition-all duration-700 delay-${index * 100} ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <div className="img-zoom-container h-80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover img-zoom"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                      <span className="text-blue-300 text-sm uppercase tracking-wider">{filters.find(f => f.value === project.category)?.label}</span>
                      <p className="text-white/80 mt-2 text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section 
        ref={testimonialsRef}
        className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
              What our clients say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Don't just take our word for it — hear from some of our satisfied clients.
            </p>
          </div>

          <div 
            className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
              testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
              How we bring your vision to life
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A structured approach to delivering successful projects on time and on budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                number: '01', 
                title: 'Discovery', 
                description: 'We learn about your business, goals, and requirements through in-depth consultation.',
                icon: <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold">1</div>
              },
              { 
                number: '02', 
                title: 'Strategy', 
                description: 'We develop a comprehensive plan tailored to your specific needs and objectives.',
                icon: <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold">2</div>
              },
              { 
                number: '03', 
                title: 'Development', 
                description: 'Our team executes the plan using agile methodologies with regular client feedback.',
                icon: <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold">3</div>
              },
              { 
                number: '04', 
                title: 'Delivery & Support', 
                description: 'We launch your solution and provide ongoing support to ensure continued success.',
                icon: <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold">4</div>
              }
            ].map((step, index) => (
              <div key={index} className="text-center p-6 rounded-xl">
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 md:py-32 bg-blue-600 dark:bg-blue-900 text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to start your project?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help bring your vision to life with our expertise in technology and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-md font-medium transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1"
              >
                Get in touch
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-transparent border border-white/30 rounded-md font-medium transition-all duration-300 hover:bg-white/10"
              >
                Explore our services
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </PageLayout>
  );
};

export default ProjectsPage;
