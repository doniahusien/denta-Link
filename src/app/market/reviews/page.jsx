import React from "react";
import LeftSection from "@/components/market/reviews/LeftSection";
import RightSection from "@/components/market/reviews/RightSection";

const ReviewPage = () => {
  return (
    <div className="py-40 px-4">
      <div className="max-w-6xl mx-auto p-6 bg-blue-50 shadow-lg rounded-lg border border-gray-200 flex flex-col md:flex-row">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
};

export default ReviewPage;
