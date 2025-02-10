'use client'
import Image from "next/image";
import Button from "@/components/UI/Button/Button";
import { useState, useEffect } from "react";

export default function HeroSection() {
  // State to track if the image should be displayed
  const [showImage, setShowImage] = useState(true);

  // Function to detect screen size and update state
  useEffect(() => {
    const handleResize = () => {
      setShowImage(window.innerWidth > 768); // Show image only on medium and larger screens
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Custom Background */}
      <div className="absolute inset-0">
        <img
          src="/images/header-background.svg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 max-w-7xl">
        <div
          className={`flex flex-col md:flex-row items-center justify-between ${
            showImage ? "" : "md:items-start"
          }`}
        >
          {/* Text Content */}
          <div className="max-w-[608px] text-center md:text-left mb-10 md:mb-0">
            <h1 className="font-['cairo'] text-[40px] leading-[40px] md:text-[64px] md:leading-[64px] font-semibold text-black mb-5">
              Find Trusted Patient
            </h1>
            <p className="font-['cairo'] text-[18px] leading-[24px] md:text-[24px] md:leading-[48px] text-[#918E8E] mb-9">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <Button
              title="Get Started"
              link="/"
              className="block w-full md:w-auto px-8 py-3 bg-[#247CFF] text-white rounded-lg text-lg font-semibold hover:bg-[#1e6ad8] transition-colors"
            />
          </div>

          {/* Conditionally Render Image */}
          {showImage && (
            <div className="mt-10 md:mt-0 md:ml-8 flex justify-center">
              <Image
                src="/images/About/doctor.svg"
                alt="Doctor illustration"
                width={500}
                height={500}
                className="object-contain w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}