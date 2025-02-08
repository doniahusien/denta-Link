import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    // Remove the padding-top (py-16) from here
    <div className="min-h-screen bg-[url('/images/header.svg')] bg-cover bg-center bg-no-repeat">
      {/* Main Content Container */}
      {/* Add padding-top, increase min-height, and improve centering */}
      <div className="max-w-6xl mx-auto min-h-[calc(100vh-80px)] flex flex-col justify-center pt-20 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">Get In Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'll create high-quality linkable content and build at least 40 high-authority links to each asset, paving the way for you to grow your reach.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Information Container */}
            <div className="md:w-1/3">
              <div className="bg-[#247CFFBF] rounded-lg p-8 text-white">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="text-sm text-blue-100 mb-8">
                  We'll create high-quality linkable content and build at least 40 high-authority links to each asset, paving the way for you to grow your reach.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>123-456-789-10</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <span>DentaLink123@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-2/3">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Your subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="flex items-center justify-center bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;