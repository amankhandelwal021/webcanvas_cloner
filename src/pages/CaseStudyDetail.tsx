
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, CheckCircle, ArrowRight, Code, Layers, Globe } from 'lucide-react';
import PageLayout from '../components/PageLayout';

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  image: string;
  client: string;
  completionDate: string;
  duration: string;
  industry: string;
  technologies: string[];
  description: string;
  challenge: string;
  solution: string;
  approach: string;
  results: string[];
  testimonial?: {
    content: string;
    author: string;
    role: string;
  };
  gallery: string[];
  nextProject?: number;
}

// This would normally come from an API or database - for now we'll hardcode a few examples
// In a production app, you'd want to fetch this data based on the ID
const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'E-commerce Platform Redesign',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    client: 'FashionBrand Inc.',
    completionDate: 'June 2023',
    duration: '4 months',
    industry: 'Retail / Fashion',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe', 'Redis', 'ElasticSearch'],
    description: 'A complete e-commerce solution with integrated payment processing, inventory management, and customer analytics for a premium fashion retailer looking to expand their online presence.',
    challenge: 'FashionBrand was struggling with an outdated e-commerce platform that couldn\'t handle their growing inventory and was providing a poor mobile shopping experience. Cart abandonment was high at 76%, and they were unable to implement modern marketing features to increase conversions.',
    approach: 'We began with extensive user research to understand customer pain points and shopping behaviors. After creating detailed user personas and journey maps, we designed prototypes that were tested with actual customers. Our development process used agile methodologies with two-week sprints and regular client demos to ensure the solution evolved based on feedback.',
    solution: 'We developed a custom headless e-commerce platform built on React and Node.js with a MongoDB database. The solution included a responsive design optimized for mobile shoppers, an intelligent product recommendation engine, and a streamlined checkout process. The backend included robust inventory management with real-time stock updates across all sales channels.',
    results: [
      '45% increase in conversion rate within the first 3 months',
      '68% reduction in cart abandonment rate',
      '3.2x improvement in mobile sales',
      '52% increase in average order value through AI-powered product recommendations',
      'Seamless integration with existing ERP and warehouse management systems'
    ],
    testimonial: {
      content: 'The e-commerce platform has completely transformed our online business. The user experience is exceptional, and the backend tools have streamlined our operations significantly. The team was professional, responsive, and delivered exactly what we needed on time and on budget.',
      author: 'Sarah Johnson',
      role: 'CTO, FashionBrand Inc.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2076&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop'
    ],
    nextProject: 2
  },
  {
    id: 2,
    title: 'AI-Powered Predictive Maintenance System',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
    client: 'IndustrialTech Manufacturing',
    completionDate: 'September 2023',
    duration: '6 months',
    industry: 'Manufacturing',
    technologies: ['TensorFlow', 'Python', 'AWS SageMaker', 'IoT Sensors', 'React', 'Node.js', 'MongoDB'],
    description: 'An advanced predictive maintenance system using machine learning to forecast equipment failures before they occur, enabling proactive maintenance scheduling and minimizing costly downtime.',
    challenge: 'IndustrialTech was experiencing significant losses due to unexpected equipment failures. Each hour of downtime cost approximately $15,000, and traditional scheduled maintenance was inefficient, often replacing parts that still had useful life remaining.',
    approach: 'We deployed IoT sensors throughout the manufacturing line to collect real-time data on vibration, temperature, pressure, and sound. After establishing a baseline of normal operations for several weeks, we developed multiple machine learning models to detect patterns that preceded past failures and compare current readings to these patterns.',
    solution: 'We developed a comprehensive system with three components: 1) An IoT sensor network gathering real-time equipment data, 2) A machine learning pipeline analyzing the data to predict potential failures, and 3) A user-friendly dashboard allowing maintenance teams to view equipment health, predicted failures, and recommended actions.',
    results: [
      '92% accuracy in predicting equipment failures 24-48 hours in advance',
      '37% reduction in overall maintenance costs',
      '59% decrease in unplanned downtime',
      '28% increase in equipment lifespan through optimized maintenance',
      'ROI of 312% in the first year of implementation'
    ],
    testimonial: {
      content: 'This predictive maintenance system has revolutionized our operations. We've gone from reactive to proactive, addressing potential issues before they cause downtime. The solution has more than paid for itself in prevented losses and operational improvements.',
      author: 'Michael Rodriguez',
      role: 'VP of Operations, IndustrialTech Manufacturing'
    },
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574723507015-6c6b1c808cf2?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop'
    ],
    nextProject: 3
  },
  {
    id: 3,
    title: 'Healthcare Mobile Application',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    client: 'MediCare Solutions',
    completionDate: 'December 2023',
    duration: '5 months',
    industry: 'Healthcare',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Express', 'MongoDB', 'HIPAA Compliance', 'Stripe'],
    description: 'A comprehensive mobile healthcare platform that allows patients to schedule appointments, access medical records, consult with doctors remotely, and manage prescriptions – all in a secure, HIPAA-compliant environment.',
    challenge: 'MediCare Solutions needed to reduce administrative burden on their staff while improving patient engagement. Patients were frustrated with phone-based scheduling, paper forms, and limited access to their health information.',
    approach: 'We conducted extensive user research with both patients and healthcare providers to identify key pain points. Our design process involved numerous iterations of wireframes and prototypes that were tested with real users. Security and compliance were built into every step of the process.',
    solution: 'We developed a cross-platform mobile application with secure patient portals, telemedicine capabilities, appointment scheduling, prescription management, and secure messaging. The backend infrastructure was designed with HIPAA compliance in mind, including end-to-end encryption, detailed access logs, and secure authentication.',
    results: [
      '60% reduction in no-show appointments',
      '75% decrease in administrative phone calls',
      '82% patient adoption rate within 6 months',
      '4.8/5 average rating on app stores',
      '35% increase in patient satisfaction scores',
      'Significant reduction in administrative costs'
    ],
    testimonial: {
      content: 'This mobile application has transformed how we interact with patients. The scheduling alone has saved countless hours of staff time, and patients love having access to their records and test results. The telemedicine feature proved invaluable, especially during peak seasons.',
      author: 'Dr. Emily Chen',
      role: 'Medical Director, MediCare Solutions'
    },
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1643228995862-4d9d99c40fc9?q=80&w=2070&auto=format&fit=crop'
    ],
    nextProject: 1
  },
  {
    id: 4,
    title: 'Smart Home IoT Ecosystem',
    category: 'iot',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2069&auto=format&fit=crop',
    client: 'SmartLiving Technologies',
    completionDate: 'March 2024',
    duration: '7 months',
    industry: 'Real Estate / Smart Home',
    technologies: ['Arduino', 'Raspberry Pi', 'MQTT', 'Node.js', 'React', 'AWS IoT', 'TensorFlow Lite'],
    description: 'A comprehensive smart home ecosystem allowing homeowners to control, monitor, and automate every aspect of their living environment through a unified mobile and voice interface.',
    challenge: 'SmartLiving Technologies wanted to create a unified smart home solution that would integrate with existing devices while providing enhanced security, energy efficiency, and convenience features that weren't available in fragmented consumer solutions.',
    approach: 'We began with extensive compatibility testing of existing smart home products to determine integration paths. We built custom bridge hardware where necessary and developed a microservices architecture that could easily adapt to new devices and protocols as they entered the market.',
    solution: 'We developed a full-stack IoT ecosystem including custom hardware bridges, a cloud backend for remote access and AI processing, and intuitive mobile and voice interfaces. The system features predictive automation based on user habits, sophisticated energy management, and enterprise-grade security protocols.',
    results: [
      '35% average reduction in energy costs for homeowners',
      '95% customer satisfaction rating',
      'Successfully integrated with 27 different third-party smart device brands',
      'Achieved industry-leading security certification',
      'Reduced false alarms by 78% compared to competitor systems'
    ],
    testimonial: {
      content: 'This solution has transformed our product offering completely. Not only are we able to offer best-in-class smart home functionality, but the system actually learns and improves over time. The energy savings alone have been a major selling point for our luxury home developments.',
      author: 'Jennifer Morgan',
      role: 'CEO, SmartLiving Technologies'
    },
    gallery: [
      'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=2071&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop'
    ],
    nextProject: 5
  },
  {
    id: 5,
    title: 'Enterprise Digital Transformation',
    category: 'software',
    image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=2025&auto=format&fit=crop',
    client: 'Global Logistics Corp',
    completionDate: 'October 2023',
    duration: '12 months',
    industry: 'Logistics / Supply Chain',
    technologies: ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Kubernetes', 'Azure', 'Docker', 'Power BI'],
    description: 'A comprehensive digital transformation initiative that replaced legacy systems with a modern, scalable microservices architecture to optimize global supply chain operations.',
    challenge: 'Global Logistics was operating with 15+ disconnected legacy systems that were costly to maintain, prone to failures, and unable to provide real-time insights. Manual data entry was causing errors and delays, while integration limitations were preventing innovation.',
    approach: 'We conducted a thorough systems audit and developed a phased migration strategy that allowed for continuous operations. Working closely with stakeholders across all departments, we prioritized features based on business impact and gradually replaced legacy components with modern microservices.',
    solution: 'We developed a comprehensive cloud-native platform with real-time tracking, intelligent routing, predictive analytics, and seamless integration with partner systems. The solution included mobile apps for drivers, warehouse staff, and management, all connected to a central data platform.',
    results: [
      '67% reduction in operational IT costs',
      '94% decrease in system downtime',
      '43% improvement in delivery time accuracy',
      'Real-time visibility across the entire supply chain',
      'Ability to onboard new clients in hours instead of weeks'
    ],
    testimonial: {
      content: 'This digital transformation has fundamentally changed how we operate. We've gone from fighting fires with our legacy systems to leveraging technology as a competitive advantage. The modular approach means we can continue to evolve without the pain of another massive overhaul.',
      author: 'Thomas Wilson',
      role: 'CIO, Global Logistics Corp'
    },
    gallery: [
      'https://images.unsplash.com/photo-1593106584228-daa0a8ac44d1?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
    ],
    nextProject: 1
  }
];

const CaseStudyDetail = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const caseStudy = caseStudies.find(p => p.id === Number(caseStudyId));

  if (!caseStudy) {
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
          <p>The case study you are looking for doesn't exist or has been moved.</p>
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
            Let's collaborate to create innovative solutions that drive results for your business.
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
