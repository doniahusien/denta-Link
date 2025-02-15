'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import EditForm from './EditForm'; 

const ToolCard = ({ imageSrc, name, price, category, description }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="mb-6 ml-6">
      {/* Card */}
      <div className="flex items-start gap-4 rounded-xl border border-blue-300 p-4 shadow-sm bg-white w-[680px]">
        {/* Image Section */}
        <div className="relative w-24 h-24">
          <Image
            src={imageSrc}
            alt={name}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />

          {/* Camera Icon */}
          <div className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
            <Image
              src="/images/icons/profile/camera.svg"
              alt="Camera"
              width={16}
              height={16}
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="flex-1">
          <p className="text-sm text-gray-500">Tool name: <span className="font-semibold text-gray-700">{name}</span></p>
          <p className="text-sm text-gray-500">Price: <span className="font-semibold text-blue-600">{price}</span></p>
          <p className="text-sm text-gray-500">Category: <span className="font-semibold text-gray-700">{category}</span></p>
          <p className="text-sm text-gray-500">Description: <span className="text-gray-700">{description}</span></p>
        </div>

        {/* Edit Icon */}
        <button onClick={toggleForm}>
          <Image 
            src="/images/icons/profile/edit.svg"
            alt="Edit"
            width={20}
            height={20}
            className="cursor-pointer hover:opacity-80 transition"
          />
        </button>
      </div>

      {/* Edit Form Component */}
      {isFormVisible && (
        <EditForm 
          name={name} 
          price={price} 
          category={category} 
          description={description} 
          onClose={() => setIsFormVisible(false)}
        />
      )}
    </div>
  );
};

export default ToolCard;
