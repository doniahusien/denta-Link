import React from "react";
import "@fontsource/cairo";
import HeroSection from "@/components/about/hero/HeroSection";
import ToolsSection from "@/components/about/stuff/ToolsSection";

const aboutPage = () => {
  return (
    <div>
      <HeroSection />
      {/* First ToolsSection */}
      <ToolsSection
        imageSrc="/images/About/doctor2.svg"
        imageAlt="Doctor with patient"
        imageWidth={600}
        imageHeight={600}
        imageClassName="object-contain"
        title="Find Trusted Patient"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text."
        textClassName="font-cairo max-w-[615px] text-[32px] leading-[48px] font-semibold mb-4"
        reverseOrder={true}
      />
      {/* Second ToolsSection */}
      <ToolsSection
        imageSrc="/images/About/doctor3.svg"
        imageAlt="Easy Appointments"
        imageWidth={500}
        imageHeight={500}
        imageClassName="object-contain"
        title="Easy Appointments"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text."
        textClassName="font-cairo max-w-[615px] text-[32px] leading-[48px] font-semibold mb-4"
        linkUrl="#"
        linkLabel="Find Patient"
      />
     
     
      
     
    </div>
  );
};

export default aboutPage;