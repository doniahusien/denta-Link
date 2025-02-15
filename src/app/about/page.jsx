'use client'
import React, { useState, useEffect, useCallback } from "react";
import HeroSection from "@/components/about/hero/HeroSection";
import ToolsSection from "@/components/about/stuff/ToolsSection";
import { debounce } from 'lodash';
import ProtectedRoute from "@/components/ProtectedRoute";
// Pre-define the tools sections data
const TOOLS_SECTIONS = [
  {
    imageSrc: "/images/About/doctor2.svg",
    imageAlt: "Doctor with patient",
    imageWidth: 600,
    imageHeight: 600,
    imageClassName: "object-contain",
    title: "Find Trusted Patient",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    textClassName: "max-w-[615px] text-[32px] leading-[48px] font-semibold mb-4",
    reverseOrder: true
  },
  {
    imageSrc: "/images/About/doctor3.svg",
    imageAlt: "Easy Appointments",
    imageWidth: 500,
    imageHeight: 500,
    imageClassName: "object-contain",
    title: "Easy Appointments",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    textClassName: "max-w-[615px] text-[32px] leading-[48px] font-semibold mb-4",
    linkUrl: "#",
    linkLabel: "Find Patient"
  }
];

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Debounced scroll handler
  const handleScroll = useCallback(
    debounce(() => {
      setScrollY(window.scrollY);
      
      // Use more efficient selector
      const animatedElements = document.getElementsByClassName('animate-on-scroll');
      const viewportHeight = window.innerHeight * 0.75;
      
      // Use more efficient loop
      for (let i = 0; i < animatedElements.length; i++) {
        const el = animatedElements[i];
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportHeight) {
          el.classList.add('animate-in');
        }
      }
    }, 10), // Small debounce for smooth performance
    []
  );

  useEffect(() => {
    // Delay the loaded state slightly to ensure smooth transition
    const loadTimer = setTimeout(() => setIsLoaded(true), 100);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(loadTimer);
      handleScroll.cancel(); // Cancel any pending debounced calls
    };
  }, [handleScroll]);

  return (
    <ProtectedRoute>
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative">
        {/* Performance optimized background elements */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            // willChange: 'transform'
          }}
        >
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl" />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <div className="animate-on-scroll">
            <HeroSection />
          </div>

          {/* Map through tools sections for better maintainability */}
          {TOOLS_SECTIONS.map((section, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 200}ms` }}>
              <ToolsSection {...section} />
            </div>
          ))}

          {/* Spacer for Footer */}
          <div className="py-16" />
        </div>
      </div>

      {/* Optimized animation styles */}
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
           will-change: transform, opacity;
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

export default AboutPage;