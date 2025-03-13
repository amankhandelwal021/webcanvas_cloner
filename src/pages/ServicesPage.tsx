
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { getFeaturedServices } from '../utils/serviceData';
import { ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const services = getFeaturedServices(8); // Get all services
  
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
              <div
                key={index}
                className={`group p-8 md:p-10 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-black/20 hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-500 opacity-100 translate-y-0`}
              >
                <div className="mb-6 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 w-12 h-12 flex items-center justify-center text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link 
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
