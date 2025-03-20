import { useEffect, useRef, useState } from 'react';
import { getFeaturedServices } from '../utils/services';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  delay: number;
  id: string;
}

const ServiceCard = ({ title, description, features, icon, delay, id }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden p-8 md:p-10 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-black/20 hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-500 ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
        }`}
    >
      {/* Decorative gradient background */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-50 dark:bg-blue-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Service number */}
      <div className="absolute top-6 right-6 font-display text-5xl font-bold text-gray-100 dark:text-gray-800 opacity-30">
        {id.padStart(2, '0')}
      </div>

      {/* Icon with enhanced styling */}
      <div className="relative mb-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 w-14 h-14 flex items-center justify-center text-blue-600 dark:text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-blue-100 dark:group-hover:shadow-blue-900/20">
        {icon}
      </div>

      {/* Title with enhanced styling */}
      <h3 className="relative text-xl font-display font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{title}</h3>

      {/* Description with enhanced styling */}
      <p className="relative text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
        {description}
      </p>

      {/* Features list */}
      <ul className="relative space-y-2 mb-6">
        {features.slice(0, 4).map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Action links with enhanced styling */}
      <div className="relative flex items-center space-x-4 mt-6">
        <Link
          to={`/services/${id}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <span>Learn more</span>
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>

        <div className="h-4 w-px bg-gray-300 dark:bg-gray-700"></div>

        <a
          href="#contact"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span>Get quote</span>
          <ExternalLink size={14} className="ml-2" />
        </a>
      </div>

      {/* Hover indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

const Services = () => {
  const featuredServices = getFeaturedServices(6);

  const services = featuredServices.map((service, index) => ({
    id: service.id,
    title: service.title,
    description: service.description,
    features: service.features,
    icon: service.icon,
    delay: (index + 1) * 100,
  }));

  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full opacity-50 blur-3xl"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Comprehensive Software Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            From website development to AI-powered applications, we deliver cutting-edge technology tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <Link
            to="/services"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl hover:shadow-blue-500/20  duration-300"
          >
            <span>Discover all services</span>
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
