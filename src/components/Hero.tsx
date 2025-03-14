
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
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-with-connected-points-34493-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 to-black/90"></div>
      </div>
      
      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <div 
            className={`space-y-4 max-w-5xl transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block bg-indigo-500/40 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in backdrop-blur-sm">
              Award-Winning Digital Agency
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-tight md:leading-tight text-white">
              <span className="relative">
                Creating exceptional
                <span className="block text-gradient-primary bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">digital experiences</span>
              </span>
            </h1>
            
            <p className="mt-8 max-w-3xl mx-auto text-xl text-white leading-relaxed animate-fade-in opacity-90">
              We craft innovative digital products and experiences that connect brands with their audience in meaningful ways.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in delay-300">
              <a 
                href="#projects" 
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-md font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center">
                  View Our Work 
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              
              <a 
                href="#contact" 
                className="px-8 py-4 border border-indigo-400/60 backdrop-blur-sm text-white rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:border-indigo-400 hover:bg-indigo-500/40 w-full sm:w-auto"
              >
                Start a Project
              </a>
            </div>
          </div>
          
          {/* Client logos */}
          <div className={`w-full max-w-5xl mt-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-sm font-medium text-white mb-6">
              TRUSTED BY INNOVATIVE COMPANIES
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-8 w-24 bg-white/20 dark:bg-white/20 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-1">
          <div className="w-1.5 h-2.5 bg-white/70 rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
