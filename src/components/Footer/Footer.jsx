import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden font-['Cairo']">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <img
          src="/images/footer-background.svg"
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Wave Overlay */}
      <div className="absolute bottom-0 w-full">
        <img
          src="/images/footer-wave.svg"
          alt="Footer Wave"
          className="w-full"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Logo and About Section */}
          <div className="md:col-span-5 space-y-8 md:space-y-6">
            <div className="relative w-full md:w-80 h-20">
              <Image src="/logo.svg" alt="DentaLink Logo" fill className="object-contain" />
            </div>
            <p className="text-gray-600 text-base md:text-xl leading-relaxed">
              Revolutionizing the dental equipment marketplace through trusted exchanges and premium sales. Join our community of dental professionals today.
            </p>
            <div className="flex flex-wrap justify-start md:justify-start space-x-4 pt-4">
              <a href="#" className="group">
                <div className="bg-gray-100 p-3 rounded-full transition-all duration-300 group-hover:bg-gray-200 group-hover:scale-110">
                  <Facebook className="w-5 md:w-6 h-5 md:h-6 text-[#247CFF]" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="bg-gray-100 p-3 rounded-full transition-all duration-300 group-hover:bg-gray-200 group-hover:scale-110">
                  <Instagram className="w-5 md:w-6 h-5 md:h-6 text-[#247CFF]" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="bg-gray-100 p-3 rounded-full transition-all duration-300 group-hover:bg-gray-200 group-hover:scale-110">
                  <Twitter className="w-5 md:w-6 h-5 md:h-6 text-[#247CFF]" />
                </div>
              </a>
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
                    className="text-gray-700 text-sm md:text-lg hover:text-[#247CFF] flex items-center group"
                  >
                    <span>{item}</span>
                    <ArrowUpRight
                      className="w-4 md:w-5 h-4 md:h-5 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4 space-y-8 md:space-y-6">
            <h3 className="text-gray-800 text-lg md:text-2xl font-semibold">Get in Touch</h3>
            <div className="space-y-4 md:space-y-6">
              <a
                href="mailto:contact@dentalink.com"
                className="flex items-center space-x-3 text-gray-700 hover:text-[#247CFF] group"
              >
                <div className="bg-gray-100 p-3 rounded-lg transition-all duration-300 group-hover:bg-gray-200">
                  <Mail className="w-5 md:w-6 h-5 md:h-6 text-[#247CFF]" />
                </div>
                <span className="text-sm md:text-lg">contact@dentalink.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-3 text-gray-700 hover:text-[#247CFF] group"
              >
                <div className="bg-gray-100 p-3 rounded-lg transition-all duration-300 group-hover:bg-gray-200">
                  <Phone className="w-5 md:w-6 h-5 md:h-6 text-[#247CFF]" />
                </div>
                <span className="text-sm md:text-lg">+1 (234) 567-890</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <MapPin className="w-5 md:w-6 h-5 md:h-6 text-[#247CFF]" />
                </div>
                <span className="text-sm md:text-lg">123 Dental Street, Medical District<br />Healthcare City, HC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links for Mobile */}
          <div className="md:hidden mt-8 space-y-8">
            <h3 className="text-gray-800 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-700 text-sm hover:text-[#247CFF] flex items-center group"
                  >
                    <span>{item}</span>
                    <ArrowUpRight
                      className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm md:text-lg">&copy; {new Date().getFullYear()} DentaLink. All rights reserved.</p>
            <div className="flex flex-wrap space-x-4 md:space-x-8 text-sm md:text-lg text-gray-700">
              <a href="#" className="hover:text-[#247CFF] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#247CFF] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#247CFF] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;