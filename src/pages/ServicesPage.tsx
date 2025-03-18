
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { services } from '../utils/services';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Contact from '@/components/Contact';
import Awards from '@/components/Awards';
import { Code, Cpu, Users, Zap, ShieldCheck, Wrench } from "lucide-react";

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


const ServicesPage = () => {
  const features = [
    {
      title: "Industry-Leading Expertise",
      description:
        "Our team of skilled engineers, designers, and strategists bring deep industry knowledge and hands-on experience in building scalable digital solutions.",
      icon: <Code size={40} className="text-primary" />,
    },
    {
      title: "Innovative Technology",
      description:
        "We leverage the latest advancements in AI, cloud computing, and software development to create future-proof solutions that drive efficiency and growth.",
      icon: <Cpu size={40} className="text-primary" />,
    },
    {
      title: "Client-Centric Approach",
      description:
        "We collaborate closely with our clients, ensuring that our solutions align perfectly with their business objectives and deliver measurable impact.",
      icon: <Users size={40} className="text-primary" />,
    },
    {
      title: "Agile & Scalable Solutions",
      description:
        "Our agile methodologies ensure flexibility, adaptability, and rapid iteration, helping businesses scale and evolve seamlessly.",
      icon: <Zap size={40} className="text-primary" />,
    },
    {
      title: "Robust Security & Compliance",
      description:
        "We implement industry-standard security protocols and compliance measures to safeguard your data and ensure regulatory adherence.",
      icon: <ShieldCheck size={40} className="text-primary" />,
    },
    {
      title: "End-to-End Support",
      description:
        "From ideation to deployment and beyond, we provide continuous support, maintenance, and optimization to keep your systems at peak performance.",
      icon: <Wrench size={40} className="text-primary" />,
    },
  ];
  
  return (
    <PageLayout
      hero={{
        title: 'Our Services',
        subtitle: 'Elevate your digital presence',
        badge: 'Expert Solutions',
        primaryCta: {
          text: 'Get in Touch',
          link: '/contact'
        }
      }}
    >
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Comprehensive solutions tailored to your unique business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
                delay={0}
                id={service.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900 dark:text-white">
            Why Partner with Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            We combine technical excellence, strategic thinking, and a client-focused approach to deliver cutting-edge IT solutions tailored to your business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Industries We Serve */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our solutions are tailored to meet the unique challenges of various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Healthcare", "Finance", "E-commerce", "Education",
              "Manufacturing", "Real Estate", "Logistics", "Hospitality",
              "Technology", "Entertainment", "Non-profit", "Retail"
            ].map((industry, index) => (
              <div key={index} className="bg-white dark:bg-black p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                <p className="font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-20 md:py-32 bg-blue-600 dark:bg-blue-900 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our solutions can help your business grow and innovate.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-blue-600 rounded-md font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <span className="flex items-center justify-center">
              Get a Free Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </Link>
        </div>
      </section> */}
    </PageLayout>
  );
};

export default ServicesPage;
