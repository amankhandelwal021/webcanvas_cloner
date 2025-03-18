import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Projects', url: '/projects' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ease-in-out',
        isScrolled ? 'py-4 bg-white/90 dark:bg-black/90 shadow-sm' : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-display font-bold tracking-tight"
        >
          code<span className="text-blue-500">horizon</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className="text-sm font-medium hover:text-blue-500 transition-colors duration-300 animate-underline"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            Get in Touch
          </Link>
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

      {/* Mobile Navigation - Slide in from Right */}
      <div className={cn(
        "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}
      onClick={() => setIsMobileMenuOpen(false)}
      />

      <div className={cn(
        "fixed top-0 right-0 h-full w-64 bg-white/90 dark:bg-black shadow-lg z-[9999] transform transition-transform duration-300",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close Menu">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium hover:text-blue-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 bg-black text-white dark:bg-white dark:text-black px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
