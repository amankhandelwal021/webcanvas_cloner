
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { services } from '../utils/services';
import { ArrowRight } from 'lucide-react';

const ServicesPage = () => {
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

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We deliver exceptional results through our expertise, innovative approach, and commitment to client success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our team consists of experienced developers, designers, and strategists who excel in their respective fields.",
                icon: "🧠"
              },
              {
                title: "Cutting-Edge Technology",
                description: "We stay at the forefront of technological advancements to provide innovative solutions that give you a competitive edge.",
                icon: "💻"
              },
              {
                title: "Client-Centric Approach",
                description: "We prioritize understanding your business goals and tailor our solutions to meet your specific needs.",
                icon: "🤝"
              },
              {
                title: "Agile Development",
                description: "Our agile methodology ensures flexibility, transparency, and continuous improvement throughout the project lifecycle.",
                icon: "⚡"
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing and quality control measures ensure reliable, high-performance solutions.",
                icon: "✅"
              },
              {
                title: "Ongoing Support",
                description: "We provide comprehensive post-launch support and maintenance to ensure your solution continues to evolve with your business.",
                icon: "🛡️"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
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
      <section className="py-20 md:py-32 bg-blue-600 dark:bg-blue-900 text-white">
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
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
