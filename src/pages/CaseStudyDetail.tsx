
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, CheckCircle, ArrowRight, Code, Layers, Globe } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getCaseStudyById } from '../services';
import PageLayout from '../components/PageLayout';
import { useState, useEffect } from 'react';
import { CaseStudy } from '../types';

const CaseStudyDetail = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);

  const { isLoading, error, data } = useQuery({
    queryKey: ['caseStudy', caseStudyId],
    queryFn: () => getCaseStudyById(Number(caseStudyId)),
  });

  // Use useEffect to update state when data changes
  useEffect(() => {
    if (data) {
      setCaseStudy(data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <PageLayout
        hero={{
          title: 'Loading...',
          subtitle: 'Please wait while we fetch the case study details',
          badge: 'Case Study',
        }}
      >
        <div className="py-20 md:py-32 text-center">
          <p>Loading case study details...</p>
        </div>
      </PageLayout>
    );
  }

  if (error || !caseStudy) {
    return (
      <PageLayout
        hero={{
          title: 'Case Study Not Found',
          subtitle: 'The case study you are looking for does not exist',
          badge: 'Error',
          primaryCta: {
            text: 'Back to Projects',
            link: '/projects'
          }
        }}
      >
        <div className="py-20 md:py-32 text-center">
          <p>The case study you are looking for doesn&apos;t exist or has been moved.</p>
        </div>
      </PageLayout>
    );
  }

  const categoryLabel = {
    'web': 'Web Development',
    'mobile': 'Mobile App',
    'ai': 'AI & ML Solutions',
    'software': 'Custom Software',
    'iot': 'IoT Solutions',
    'marketing': 'Digital Marketing'
  }[caseStudy.category] || caseStudy.category;

  return (
    <PageLayout
      hero={{
        title: caseStudy.title,
        subtitle: `${categoryLabel} for ${caseStudy.client}`,
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
              src={caseStudy.image} 
              alt={caseStudy.title} 
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
                {caseStudy.description}
              </p>
              
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
              
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">Our Approach</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {caseStudy.approach}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Our Solution</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {caseStudy.solution}
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
                      <p className="font-medium">{caseStudy.client}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Industry</h4>
                    <div className="flex items-center">
                      <Globe size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                      <p className="font-medium">{caseStudy.industry}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Completion Date</h4>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                      <p className="font-medium">{caseStudy.completionDate}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Project Duration</h4>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                      <p className="font-medium">{caseStudy.duration}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {caseStudy.technologies.map((tech, index) => (
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
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="flex">
                    <CheckCircle size={20} className="mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {caseStudy.testimonial && (
              <div className="bg-blue-600 dark:bg-blue-800 rounded-xl p-8 text-white relative">
                <div className="absolute top-4 right-4 text-5xl opacity-20">"</div>
                <h3 className="text-xl font-bold mb-6">Client Testimonial</h3>
                <p className="italic mb-6 text-blue-50 leading-relaxed">
                  "{caseStudy.testimonial.content}"
                </p>
                <div>
                  <p className="font-bold">{caseStudy.testimonial.author}</p>
                  <p className="text-blue-200">{caseStudy.testimonial.role}</p>
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
            {caseStudy.gallery.map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={image} 
                  alt={`${caseStudy.title} gallery image ${index + 1}`} 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      {caseStudy.nextProject && (
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h3 className="text-lg text-gray-500 dark:text-gray-400 mb-3">Continue Exploring</h3>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">Next Case Study</h2>
            
            <Link
              to={`/case-studies/${caseStudy.nextProject}`}
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
            Let&apos;s collaborate to create innovative solutions that drive results for your business.
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

export default CaseStudyDetail;
