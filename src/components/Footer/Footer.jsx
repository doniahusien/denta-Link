import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowUpRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleVisibility = () => {
      const footer = document.getElementById('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight);
      }
    };

    window.addEventListener('scroll', () => {
      handleScroll();
      handleVisibility();
    });
    handleVisibility(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { icon: Facebook, color: 'hover:bg-blue-500' },
    { icon: Instagram, color: 'hover:bg-pink-500' },
    { icon: Twitter, color: 'hover:bg-blue-400' },
  ];

  return (
    <footer id="footer" className="relative overflow-hidden font-['Cairo'] bg-gradient-to-b from-white via-blue-50 to-[#E8F1FF]">
      <div className="absolute inset-0">
        <img
          src="/images/footer-background.svg"
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Animated Waves */}
      <div className="absolute inset-0 opacity-70">
       {/* Wave Overlay */}
       <div className="absolute bottom-0 w-full">
        <img
          src="/images/footer-wave.svg"
          alt="Footer Wave"
          className="w-full"
        />
      </div>
      </div>

      {/* Content */}
      <div className={`relative max-w-7xl mx-auto px-4 py-16 text-gray-800 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Logo and About Section */}
          <div className="md:col-span-5 space-y-8 md:space-y-6">
            <div className="relative w-full md:w-80 h-20 transform hover:scale-105 transition-transform duration-300">
              <Image src="/logo.svg" alt="DentaLink Logo" fill className="object-contain" />
            </div>
            <p className="text-gray-600 text-base md:text-xl leading-relaxed">
              Revolutionizing the dental equipment marketplace through trusted exchanges and premium sales. Join our community of dental professionals today.
            </p>
            <div className="flex flex-wrap justify-start md:justify-start space-x-4 pt-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="group transform hover:scale-110 transition-all duration-300"
                >
                  <div className={`bg-white/80 backdrop-blur-sm shadow-lg p-3 rounded-full transition-all duration-300 ${social.color} group-hover:text-white`}>
                    <social.icon className="w-5 md:w-6 h-5 md:h-6" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-8 md:space-y-6 hidden md:block">
            <h3 className="text-gray-800 text-lg md:text-2xl font-semibold">Quick Links</h3>
            <ul className="space-y-4 md:space-y-6">
              {['About Us', 'Services', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-700 text-sm md:text-lg hover:text-[#247CFF] flex items-center group relative overflow-hidden"
                  >
                    <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                      {item}
                    </span>
                    <ExternalLink className="w-4 md:w-5 h-4 md:h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-[-10px]" />
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#247CFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4 space-y-8 md:space-y-6">
            <h3 className="text-gray-800 text-lg md:text-2xl font-semibold">Get in Touch</h3>
            <div className="space-y-4 md:space-y-6">
              {[
                { icon: Mail, text: 'contact@dentalink.com', href: 'mailto:contact@dentalink.com' },
                { icon: Phone, text: '+1 (234) 567-890', href: 'tel:+1234567890' },
                { icon: MapPin, text: '123 Dental Street, Medical District\nHealthcare City, HC 12345' }
              ].map((item, index) => (
                <div key={index} className="group">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center space-x-3 text-gray-700 hover:text-[#247CFF] group"
                    >
                      <div className="bg-white/80 backdrop-blur-sm shadow-lg p-3 rounded-lg transition-all duration-300 group-hover:bg-[#247CFF] group-hover:text-white">
                        <item.icon className="w-5 md:w-6 h-5 md:h-6" />
                      </div>
                      <span className="text-sm md:text-lg whitespace-pre-line transform group-hover:translate-x-2 transition-transform duration-300">{item.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-3 text-gray-700">
                      <div className="bg-white/80 backdrop-blur-sm shadow-lg p-3 rounded-lg">
                        <item.icon className="w-5 md:w-6 h-5 md:h-6 text-[#247CFF]" />
                      </div>
                      <span className="text-sm md:text-lg whitespace-pre-line">{item.text}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-gray-200/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm md:text-lg">&copy; {new Date().getFullYear()} DentaLink. All rights reserved.</p>
            <div className="flex flex-wrap space-x-4 md:space-x-8 text-sm md:text-lg text-gray-700">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-[#247CFF] transition-colors relative group"
                >
                  <span>{item}</span>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#247CFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;