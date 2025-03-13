import { useEffect, useRef, useState } from 'react';
import { Code, PenTool, Share2, BarChart, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => {
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
      className={`group p-8 md:p-10 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-black/20 hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-500 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mb-6 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 w-12 h-12 flex items-center justify-center text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description:
        'We build fast, responsive, and accessible websites that deliver exceptional user experiences across all devices.',
      icon: <Code size={24} />,
      delay: 100,
    },
    {
      title: 'UI/UX Design',
      description:
        'Our design process focuses on creating intuitive, engaging interfaces that align with your brand and business goals.',
      icon: <PenTool size={24} />,
      delay: 200,
    },
    {
      title: 'Digital Marketing',
      description:
        'Strategic campaigns that connect with your audience, drive engagement, and deliver measurable results.',
      icon: <Share2 size={24} />,
      delay: 300,
    },
    {
      title: 'Analytics & Insights',
      description:
        'Data-driven intelligence to optimize performance, understand user behavior, and inform business decisions.',
      icon: <BarChart size={24} />,
      delay: 400,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Elevate your digital presence
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Comprehensive solutions tailored to your unique business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors animate-underline"
          >
            <span>Discover all services</span>
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
