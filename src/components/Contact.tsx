import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    help: '',
    message: '',
    verification: '',
    proposal: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      emailjs.init("eOyhU0hhF2XPrsvtP");

      const emailParams = {
        message: `
                    
          Lead Information:
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Budget: ${formData.budget}
          Service Required: ${formData.help}
          Need Proporal: ${formData.proposal ? 'Yes': 'No'}

          Lead Requests:
          ${formData.message}
        `
      };

      const response = await emailjs.send(
        "service_u606eq4",
        "template_ggeb635",
        emailParams
      );

      if (response.status === 200) {
        setIsSubmitting(false);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSubmitting(false);
      throw error;
    }

  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Email Us',
      content: 'info@codehorizon.in',
      link: 'mailto:info@codehorizon.in'
    },
    {
      icon: <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Call Us',
      content: '+91 9261638242',
      link: 'tel:+919261638242'
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Visit Us',
      content: '44/7, U-Block, DLF Phase 3, Cyber City, Gurgaon, Haryana, India',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-20 md:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Let's chat about Dreams & Amazing ideas
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <a
              href={info.link}
              key={index}
              className={`p-8 bg-white dark:bg-gray-800/80 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 text-center ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 rounded-full mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{info.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
            </a>
          ))}
        </div>
        
        <div className={`bg-white dark:bg-gray-800/80 rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid md:grid-cols-2">
            {/* Map or image side */}
            <div className="h-64 md:h-full bg-gray-200 dark:bg-gray-700">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.0975835171787!2d77.0895!3d28.4950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjguNDk1MCwgNzcuMDg5NQ!5e0!3m2!1sen!2sus!4v1625761840566!5m2!1sen!2sus" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
            
            {/* Form side */}
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Select Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select Budget</option>
                      <option value="under-$10k">Under $10k</option>
                      <option value="$10k-50k">$10k - $50k</option>
                      <option value="$50k-100k">$50k - $100k</option>
                      <option value="over-$100k">Over $100k</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Where do you need help?
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {['Web Development', 'Mobile Development', 'AI/ML Solutions', 'Custom Software Development', 'E-commerce Solutions'].map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          name="help"
                          value={option}
                          checked={formData.help === option}
                          onChange={handleChange}
                          className="form-radio text-blue-600 dark:text-blue-400"
                        />
                        <span className="ml-2 text-gray-700 dark:text-gray-300">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    How Can We Help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <label htmlFor="verification" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Please verify that you are a human.
                    </label>
                    <input
                      type="text"
                      id="verification"
                      name="verification"
                      value={formData.verification}
                      onChange={handleChange}
                      required
                      className="w-24 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="6 * 1 ="
                    />
                  </div>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="proposal"
                      checked={formData.proposal}
                      onChange={handleChange}
                      className="form-checkbox text-blue-600 dark:text-blue-400"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Send me a proposal</span>
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span>Submit</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
