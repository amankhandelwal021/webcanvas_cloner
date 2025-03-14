
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, Globe, Server, Code, Cpu, Shield, Database, Wifi } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { getServiceById } from '../utils/services';

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

  // Helper function to get icon for technology section based on service id
  const getTechIcon = () => {
    switch (serviceId) {
      case 'web-development':
        return <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />;
      case 'mobile-app-development':
        return <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />;
      case 'custom-software-development':
        return <Server className="h-6 w-6 text-blue-600 dark:text-blue-400" />;
      case 'ai-ml-solutions':
        return <Cpu className="h-6 w-6 text-blue-600 dark:text-blue-400" />;
      case 'iot-solutions':
        return <Wifi className="h-6 w-6 text-blue-600 dark:text-blue-400" />;
      case 'cybersecurity':
        return <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />;
      default:
        return <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />;
    }
  };

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

      {/* Technologies Section */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="py-16 md:py-24 bg-white dark:bg-black">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold">Technologies We Use</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We leverage cutting-edge technologies to deliver optimal solutions for your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {service.technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-3">
                    {getTechIcon()}
                  </div>
                  <p className="text-sm font-medium">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      {service.caseStudies && service.caseStudies.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-12 text-center">Case Studies</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.caseStudies.map((caseStudy, index) => (
                <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  {caseStudy.image && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{caseStudy.description}</p>
                    <Link 
                      to="/case-studies/1" 
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <span>Read full case study</span>
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold">Our Development Process</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We follow a structured approach to ensure successful project delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We learn about your business, goals, and requirements through in-depth consultation."
              },
              {
                step: "02",
                title: "Strategy & Planning",
                description: "We develop a comprehensive plan tailored to your specific needs and objectives."
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Our team executes the plan using agile methodologies with regular client feedback."
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "We launch your solution and provide ongoing support to ensure continued success."
              }
            ].map((phase, index) => (
              <div key={index} className="relative p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{phase.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-blue-600 dark:text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-blue-600 dark:bg-blue-900 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our {service.title} solutions can help your business grow and innovate.
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
