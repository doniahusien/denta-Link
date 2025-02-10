"use client";
import Image from "next/image";
import Button from "@/components/UI/Button/Button";
import { useState, useEffect } from "react";

export default function HeroSection() {
  // State to track if the Earth image should be displayed
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
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden animate-on-scroll">
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
            <h1 className="font-cairo text-[36px] leading-[44px] md:text-[56px] md:leading-[64px] font-semibold text-black mb-6">
              Struggling to find patients?
              <br />
              We've got you covered!
            </h1>
            <p className="font-cairo text-[18px] leading-[24px] md:text-[24px] md:leading-[32px] text-gray-500 mb-8">
              Turn your dental training into real-life success stories, with{" "}
              <span className="text-[#247CFF]">DENTALINK</span>
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
                src="/images/Home/earth.svg"
                alt="Globe with medical glove"
                width={600}
                height={500}
                className="object-contain max-w-full max-h-full"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}