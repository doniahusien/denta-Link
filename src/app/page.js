"use client";
import { useState, useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import ToolsSection from "@/components/home/ToolsSection";
import ServicesSection from "@/components/home/ServicesSection";
import ConnectSection from "@/components/home/ConnectSection";
import LatestCases from "@/components/home/LatestCases";
import { fetchLatestPatients } from "@/redux/features/patient/patientThunk";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const dispatch = useDispatch();
  const { latestpatient } = useSelector((state) => state.patient);
  useEffect(() => {
    dispatch(fetchLatestPatients());
    console.log(latestpatient);
    
  }
  , [dispatch]);
  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Handle scroll animations
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        if (isVisible) {
          el.classList.add('animate-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial positions
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  const cases1 = [
    {
      name: "Dr. Ahmed Abdelfatah",
      location: "Mansoura",
      title: "Cavities",
      images: ["/images/Home/doctor.svg"]
    },
    {
      name: "Dr. Ahmed",
      location: "Cairo",
      title: "Root Canal",
      images: ["images/Home/doctor.svg"]
    },
    {
      name: "Dr. Sara",
      location: "Alexandria",
      title: "Teeth Whitening",
      images: ["images/Home/doctor.svg"]
    },
    {
      name: "Dr. Ali",
      location: "Giza",
      title: "Braces",
      images: ["images/Home/doctor.svg"]
    }
  ];

  return (
    <main className={`relative overflow-x-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient Orbs */}
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
        <div className="animate-on-scroll">
          <HeroSection />
        </div>

        <div className="animate-on-scroll" style={{ animationDelay: '200ms' }}>
          <ToolsSection />
        </div>

        <div className="animate-on-scroll" style={{ animationDelay: '400ms' }}>
          <ServicesSection />
        </div>

        <div className="animate-on-scroll" style={{ animationDelay: '600ms' }}>
          <ConnectSection />
        </div>

        <div className="animate-on-scroll" style={{ animationDelay: '800ms' }}>
          <LatestCases cases={latestpatient?.length ? latestpatient : cases1} />
        </div>

        {/* Spacer for Footer */}
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

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        /* Stagger children animations */
        .animate-in > * {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Add animation delays for children */
        .animate-in > *:nth-child(1) { animation-delay: 0.1s; }
        .animate-in > *:nth-child(2) { animation-delay: 0.2s; }
        .animate-in > *:nth-child(3) { animation-delay: 0.3s; }
        .animate-in > *:nth-child(4) { animation-delay: 0.4s; }
        .animate-in > *:nth-child(5) { animation-delay: 0.5s; }
      `}</style>
    </main>
  );
}