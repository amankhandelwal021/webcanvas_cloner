
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-40"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-black opacity-60 -z-10"></div>
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTIgMGgydjJoLTJ2LTJ6bS0yLTR2Mmgtdj'+
        'YtMmjMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50 -z-10" />

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-12">
          <div 
            className={`space-y-4 max-w-5xl transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              Award-Winning Digital Agency
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-tight md:leading-tight">
              <span className="relative">
                Creating exceptional
                <span className="block text-blue-600">digital experiences</span>
              </span>
            </h1>
            
            <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in opacity-90">
              We craft innovative digital products and experiences that connect brands with their audience in meaningful ways.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in delay-300">
              <a 
                href="#projects" 
                className="group px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-md font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center">
                  View Our Work 
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              
              <a 
                href="#contact" 
                className="px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:border-blue-500 hover:text-blue-500 w-full sm:w-auto"
              >
                Start a Project
              </a>
            </div>
          </div>
          
          {/* Client logos */}
          <div className={`w-full max-w-5xl mt-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
              TRUSTED BY INNOVATIVE COMPANIES
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-1">
          <div className="w-1.5 h-2.5 bg-gray-400 dark:bg-gray-600 rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
