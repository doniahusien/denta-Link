'use client'
import React, { useState, useEffect } from "react";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";
const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        if (isVisible) {
          el.classList.add('animate-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const inputFields = [
    { name: 'name', placeholder: 'Name', type: 'text', half: true },
    { name: 'email', placeholder: 'Email', type: 'email', half: true },
    { name: 'subject', placeholder: 'Your subject', type: 'text', half: false },
  ];

  return (
    <ProtectedRoute>
    <div className="min-h-screen relative flex flex-col overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-br from-blue-100/50 via-blue-50/30 to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Custom SVG Background */}
      <svg
        className={`absolute top-0 left-0 w-full h-[600px] -z-10 transition-transform duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-100px] opacity-0'
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1513 1045"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0H1513V798.195L1243.89 846.18L936.169 871.357L535.46 919.877L256.501 954.892L0 1045V0Z"
          fill="#247CFF"
          fillOpacity="0.15"
        />
      </svg>

      {/* Main Content */}
      <div className="flex-grow max-w-6xl mx-auto py-24 px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'll create high-quality linkable content and build at least 40
            high-authority links to each asset, paving the way for you to grow
            your reach.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white/90 backdrop-blur-xl rounded-lg shadow-2xl p-8 animate-on-scroll">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Information */}
            <div className="md:w-1/3">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-8 text-white transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <h2 className="text-2xl font-semibold mb-4">
                  Contact Information
                </h2>
                <p className="text-sm mb-8 opacity-90">
                  Reach out to us for any inquiries or assistance you need.
                </p>
                <div className="space-y-6">
                  {[
                    { Icon: Phone, text: '123-456-789-10' },
                    { Icon: Mail, text: 'DentaLink123@gmail.com' },
                    { Icon: MapPin, text: '123 Dental Street, NY' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                        <item.Icon className="w-5 h-5" />
                      </div>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-2/3">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {inputFields.map((field, index) => (
                    <input
                      key={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className={`${
                        field.half ? '' : 'md:col-span-2'
                      } w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 ${
                        activeInput === index ? 'shadow-lg transform -translate-y-0.5' : ''
                      }`}
                      onFocus={() => setActiveInput(index)}
                      onBlur={() => setActiveInput(null)}
                    />
                  ))}
                </div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
                  onFocus={() => setActiveInput('message')}
                  onBlur={() => setActiveInput(null)}
                ></textarea>
                <button
                  type="submit"
                  className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for Footer */}
      <div className="py-16"></div>

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      </div>
      </ProtectedRoute>
  );
};

export default ContactPage;