// app/components/UI/profile/ContentBox.js
import React from "react";

const ContentBox = ({ title, children }) => {
  return (
    <div className="rounded-xl bg-[#e9f2ff] p-6 min-h-[565px] w-full max-w-[849px] mx-auto">
      <h2 className="mb-4 text-3xl sm:text-4xl font-semibold">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default ContentBox;
