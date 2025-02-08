// src/app/page.js
import HeroSection from "@/components/home/HeroSection";
import ToolsSection from "@/components/home/ToolsSection";
import ServicesSection from "@/components/home/ServicesSection";
import ConnectSection from "@/components/home/ConnectSection";
import LatestCases from "@/components/home/LatestCases";

export default function Home() {
  // Mock data for LatestCases (replace with API data later)
  const cases1 = [
    { 
      doctor: "Dr. Mahmoud", 
      location: "Mansoura", 
      title: "Cavities", 
      image: "/images/Home/doctor.svg" // Path to the doctor's image
    },
    { 
      doctor: "Dr. Ahmed", 
      location: "Cairo", 
      title: "Root Canal", 
      image: "images/Home/doctor.svg" // Path to the doctor's image
    },
    { 
      doctor: "Dr. Sara", 
      location: "Alexandria", 
      title: "Teeth Whitening", 
      image: "images/Home/doctor.svg" // Path to the doctor's image
    },
    { 
      doctor: "Dr. Ali", 
      location: "Giza", 
      title: "Braces", 
      image: "images/Home/doctor.svg" // Path to the doctor's image
    }
  ];

  return (
    <main className="relative">
      <HeroSection />
      <ToolsSection />
      <ServicesSection />
      <ConnectSection />

      {/* LatestCases Section */}
      <LatestCases cases={cases1} />
    </main>
  );
}