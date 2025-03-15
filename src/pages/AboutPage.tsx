import { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getTeamMembers } from '../services';
import PageLayout from '../components/PageLayout';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const { data: teamMembers = [] } = useQuery({
    queryKey: ['teamMembers'],
    queryFn: getTeamMembers,
  });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const advantages = [
    "Strategic approach to design and development",
    "Dedicated project manager for every client",
    "Transparent communication and process",
    "Post-launch support and maintenance",
    "Performance-focused development",
    "User-centered design methodology"
  ];

  return (
    <PageLayout
      hero={{
        title: 'About Us',
        subtitle: 'Building digital experiences since 2015',
        badge: 'Our Story',
        primaryCta: {
          text: 'Join Our Team',
          link: '/contact'
        }
      }}
    >
      <section 
        ref={ref}
        className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Our team collaborating" 
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
                We build experiences that users love
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                Founded in 2015, we're a team of designers, developers, and strategists passionate about creating exceptional digital products that make a difference. Our collaborative approach ensures that we deliver solutions that exceed expectations.
              </p>
              
              <div className="space-y-3 mb-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="ml-3 text-gray-600 dark:text-gray-300">
                      {advantage}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-6 mt-8">
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
                    50+
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Projects Completed
                  </p>
                </div>
                
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
                    30+
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Happy Clients
                  </p>
                </div>
                
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
                    8+
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
              What drives us forward
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              The principles that guide our work and relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-black/20">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We continuously explore new technologies and approaches to deliver cutting-edge solutions that give our clients a competitive advantage.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-black/20">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We hold ourselves to the highest standards in everything we do, from code quality to design aesthetics to client communication.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-black/20">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe the best results come from true partnership with our clients, open communication, and the diverse perspectives of our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
              Meet the experts
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              The talented people behind our success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="group">
                <div className="rounded-xl overflow-hidden mb-4 relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </PageLayout>
  );
};

export default AboutPage;
