"use client";
import React, { useState } from "react";
import Image from "next/image";
import EditForm from "./EditForm";

const Card = ({ 
  type, 
  imageSrc, 
  name, 
  additionalFields, 
  description, 
  onEdit 
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSave = (updatedData) => {
    onEdit(updatedData); 
    setIsFormVisible(false);
  };

  return (
    <div className="mb-6 ml-6">
      <div className="flex items-start gap-4 rounded-xl border border-blue-300 p-4 shadow-sm bg-white w-[680px]">
        {/* Image Section */}
        <div className="relative w-32 h-24">
          <Image
            src={imageSrc}
            alt={name||"img"}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
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
          <p className="text-sm text-gray-500">
            {type === "tool" ? "Tool name:" : "Patient name:"}{" "}
            <span className="font-semibold text-gray-700">{name}</span>
          </p>

          {/* Dynamic Fields */}
          {additionalFields.map(({ label, value, color }, index) => (
            <p key={index} className="text-sm text-gray-500">
              {label}: <span className={`font-semibold ${color}`}>{value}</span>
            </p>
          ))}

          <p className="text-sm text-gray-500">
            Description: <span className="text-gray-700">{description}</span>
          </p>
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
          fields={[
            { name: "name", label: "Name", value: name },
            ...additionalFields.map(({ label, value }) => ({
              name: label.toLowerCase().replace(" ", "_"),
              label,
              value,
            })),
            { name: "description", label: "Description", value: description },
          ]}
          onSave={handleSave}
          onClose={() => setIsFormVisible(false)}
        />
      )}
    </div>
  );
};

export default Card;
