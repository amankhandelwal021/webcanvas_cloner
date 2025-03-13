
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', url: '#home' },
    { name: 'Services', url: '#services' },
    { name: 'Projects', url: '#projects' },
    { name: 'About', url: '#about' },
    { name: 'Contact', url: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ease-in-out',
        isScrolled ? 'py-4 bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="text-2xl font-display font-bold tracking-tight"
        >
          design<span className="text-blue-500">owe</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-sm font-medium hover:text-blue-500 transition-colors duration-300 animate-underline"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white dark:bg-black z-40 animate-fade-in">
          <nav className="h-full flex flex-col items-center justify-center space-y-8 p-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium hover:text-blue-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-black text-white dark:bg-white dark:text-black px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
