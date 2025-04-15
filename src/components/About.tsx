
import { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
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
    <section 
      id="about" 
      ref={ref}
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image side */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://media.istockphoto.com/id/1409520341/photo/group-of-young-people-discussing-in-the-co-working-office.jpg?s=612x612&w=0&k=20&c=MMScAoIbvQebCJ3dhr8pZ1izzuWxW_pBJ4yJ1KQfwpM=" 
                  alt="Our team collaborating" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
          
          {/* Content side */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
              We build experiences that users love
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
              Founded in 2017, we're a team of designers, developers, and strategists passionate about creating exceptional digital products that make a difference. Our collaborative approach ensures that we deliver solutions that exceed expectations.
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
                  30+
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Projects Completed
                </p>
              </div>
              
              <div>
                <p className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
                  25+
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
  );
};

export default About;
