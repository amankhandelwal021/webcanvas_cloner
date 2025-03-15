
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowRight } from 'lucide-react';
import Contact from './Contact';
import Awards from './Awards';

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge: string;
  primaryCta?: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
}

interface PageLayoutProps {
  children: ReactNode;
  hero: PageHeroProps;
}

const PageLayout = ({ children, hero }: PageLayoutProps) => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen overflow-hidden">
      <Navbar />
      <main>
        {/* Hero Section for all pages */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 pb-20">
          {/* Background gradient and overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-800/90 -z-10"></div>
          
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTIgMGgydjJoLTJ2LTJ6bS0yLTR2Mmgtdn'+
          'YtMmjMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 -z-10" />

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="space-y-4 max-w-5xl transition-all duration-1000 opacity-100">
                <span className="inline-block bg-blue-500/40 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in backdrop-blur-sm">
                  {hero.badge}
                </span>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-tight md:leading-tight text-white">
                  <span className="relative">
                    {hero.title}
                    <span className="block text-blue-600 mt-5">{hero.subtitle}</span>
                  </span>
                </h1>
                
                {(hero.primaryCta || hero.secondaryCta) && (
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in delay-300">
                    {hero.primaryCta && (
                      <a 
                        href={hero.primaryCta.link} 
                        className="group px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-md font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto mt-4"
                      >
                        <span className="flex items-center justify-center">
                          {hero.primaryCta.text} 
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </a>
                    )}
                    
                    {hero.secondaryCta && (
                      <a 
                        href={hero.secondaryCta.link} 
                        className="px-8 py-4 border border-white/60 backdrop-blur-sm text-white rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:border-white hover:bg-white/10 w-full sm:w-auto"
                      >
                        {hero.secondaryCta.text}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {children}
      </main>
      <Contact />
      <Awards />
      <Footer />
    </div>
  );
};

export default PageLayout;
