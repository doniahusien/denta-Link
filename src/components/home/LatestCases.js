"use client";

import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux"; 
import { fetchLatestPatients } from "@/redux/features/patient/patientThunk";

import HeroSection from "@/components/home/HeroSection";
import ToolsSection from "@/components/home/ToolsSection";
import ServicesSection from "@/components/home/ServicesSection";
import ConnectSection from "@/components/home/ConnectSection";
import LatestCases from "@/components/home/LatestCases";

export default function Home() {
  const dispatch = useDispatch();
  const { latestpatient, loading, error } = useSelector(state => state.patient);

  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    dispatch(fetchLatestPatients());

    const handleScroll = () => {
      setScrollY(window.scrollY);

      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          el.classList.add('animate-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  return (
    <main className={`relative overflow-x-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${-scrollY * 0.1}px, ${scrollY * 0.05}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      {/* Content Sections */}
      <div className="relative">
        <div className="animate-on-scroll"><HeroSection /></div>
        <div className="animate-on-scroll" style={{ animationDelay: '200ms' }}><ToolsSection /></div>
        <div className="animate-on-scroll" style={{ animationDelay: '400ms' }}><ServicesSection /></div>
        <div className="animate-on-scroll" style={{ animationDelay: '600ms' }}><ConnectSection /></div>

        <div className="animate-on-scroll" style={{ animationDelay: '800ms' }}>
          {loading ? (
            <p className="text-center py-10">Loading latest cases...</p>
          ) : error ? (
            <p className="text-center text-red-500 py-10">Error: {error}</p>
          ) : (
            <LatestCases cases={latestpatient || []} />
          )}
        </div>

        <div className="py-16"></div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .animate-in > * {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in > *:nth-child(1) { animation-delay: 0.1s; }
        .animate-in > *:nth-child(2) { animation-delay: 0.2s; }
        .animate-in > *:nth-child(3) { animation-delay: 0.3s; }
        .animate-in > *:nth-child(4) { animation-delay: 0.4s; }
        .animate-in > *:nth-child(5) { animation-delay: 0.5s; }
      `}</style>
    </main>
  );
}
