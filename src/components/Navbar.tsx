
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
        isScrolled ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-display font-bold tracking-tight text-slate-800"
        >
          design<span className="text-blue-600">owe</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-300 animate-underline"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
          >
            Get in Touch
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-800"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white/95 z-40 animate-fade-in">
          <nav className="h-full flex flex-col items-center justify-center space-y-8 p-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-slate-800 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
