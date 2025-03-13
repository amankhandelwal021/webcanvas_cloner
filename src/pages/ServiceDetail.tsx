
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { getServiceById } from '../utils/serviceData';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = getServiceById(serviceId || '');

  if (!service) {
    return (
      <PageLayout
        hero={{
          title: 'Service Not Found',
          subtitle: 'Please check our available services',
          badge: 'Error',
          primaryCta: {
            text: 'Back to Services',
            link: '/services'
          }
        }}
      >
        <div className="py-20 md:py-32 text-center">
          <p>The service you are looking for doesn't exist or has been moved.</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      hero={{
        title: service.title,
        subtitle: 'Expert Solutions',
        badge: 'Our Services',
        primaryCta: {
          text: 'Get Started',
          link: '/contact'
        },
        secondaryCta: {
          text: 'All Services',
          link: '/services'
        }
      }}
    >
      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Overview</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Features */}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">Key Features</h2>
              <div className="space-y-4">
                {service.features?.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="ml-3 text-gray-600 dark:text-gray-300 text-lg">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">Benefits</h2>
              <div className="space-y-4">
                {service.benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="ml-3 text-gray-600 dark:text-gray-300 text-lg">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      {service.caseStudies && service.caseStudies.length > 0 && (
        <section className="py-16 md:py-24 bg-white dark:bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-12 text-center">Case Studies</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {service.caseStudies.map((caseStudy, index) => (
                <div key={index} className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4">{caseStudy.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{caseStudy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-blue-600 dark:bg-blue-900 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our {service.title} solutions can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-md font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center">
                Get a Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-white/30 rounded-md font-medium transition-all duration-300 hover:bg-white/10 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center">
                <ArrowLeft className="mr-2 w-4 h-4" />
                View All Services
              </span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServiceDetail;
