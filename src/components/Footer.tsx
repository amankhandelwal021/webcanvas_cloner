
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import FooterInfo from './FooterInfo';

const   Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const services = [
    {
      name: 'Web Development',
      link: '/services/web-development'
    },
    // {
    //     name: 'UI/UX Design',
    //   link: '/services/ui-ux-design'
    // },
    {
      name: 'Digital Marketing',
      link: '/services/digital-marketing'
    },
    // {
    //   name: 'Branding',
    //   link: '/services/branding'
    // },
    {
      name: 'Mobile Apps Development',
      link: '/services/mobile-apps-development'
    },
    {
      name: 'E-commerce Solutions',
      link: '/services/ecommerce-solutions'
    },
    {
      name: 'AI/ML Solutions',
      link: '/services/ai-ml-solutions'
    },
    // {
    //   name: 'Cybersecurity',
    //   link: '/services/cybersecurity'
    // },
    {
      name: 'Cloud Solutions',
      link: '/services/cloud-solutions'
    }, 
    // {
    //   name: 'IoT Solutions',
    //   link: '/services/iot-solutions'
    // },
    {
      name: 'Custom Software Development',
      link: '/services/custom-software-development'
    },
  ]

  const company = [
    {
      name: 'About Us',
      link: '/about'
    },
    {
      name: 'Our Work',
      link: '/projects'
    },
    // {
    //   name: 'Careers',
    //   link: '/careers'
    // },
    // {
    //   name: 'Blog',
    //   link: '/blog'
    // },
    {
      name: 'Contact Us',
      link: '/contact'
    },
    {
      name: 'Privacy Policy',
      link: '/privacy-policy'
    }
  ]

  return (
    <div>
      <FooterInfo />
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
            {/* Column 1 - About */}
            <div className="md:col-span-1">
              <a href="#home" className="text-2xl font-display font-bold tracking-tight mb-6 inline-block">
                code<span className="text-blue-500">horizon</span>
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
                {services.map((service) => (
                  <li key={service.name}>
                    <a href={service.link} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Company */}
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <a href={item.link} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item.name}
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
                  <a href="mailto:info@codehorizon.in" className="text-gray-400 hover:text-white transition-colors text-sm">
                    info@codehorizon.in
                  </a>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <a href="tel:+919261638242" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +91 9261638242
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    44/7, U-Block, DLF Phase 3, Cyber City, Gurgaon, Haryana, India
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} techhorizon. All rights reserved.
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
    </div>

  );
};

export default Footer;
