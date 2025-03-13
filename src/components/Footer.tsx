
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Column 1 - About */}
          <div className="md:col-span-1">
            <a href="#home" className="text-2xl font-display font-bold tracking-tight mb-6 inline-block">
              design<span className="text-blue-500">owe</span>
            </a>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              We create exceptional digital experiences that connect brands with their audience in meaningful ways.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com`} 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2 - Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'UI/UX Design', 'Digital Marketing', 'Branding', 'Mobile Apps', 'E-commerce'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Work', 'Careers', 'Blog', 'Contact Us', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:hello@designowe.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  hello@designowe.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  123 Design Street, Creative City, 10001
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} designowe. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
