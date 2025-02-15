import React from 'react';

const TermsCard = ({ title, content }) => {
  return (
    <div className="bg-blue-50 rounded-lg shadow-md p-6 border border-blue-200 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">{title}</h3>
      <div className="text-sm text-gray-600">{content}</div>
    </div>
  );
};

export default TermsCard;
