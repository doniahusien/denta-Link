"use client";
import React, { useState } from "react";
import Image from "next/image";
import EditForm from "./EditForm";
import Fav from "../UI/Fav";

const Card = ({ 
  type, 
  imageSrc, 
  name, 
  additionalFields = [], 
  description, 
  onEdit, 
  patientId, 
  isFavorite = false 
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => setIsFormVisible(!isFormVisible);

  const handleSave = (updatedData) => {
    onEdit && onEdit(updatedData);
    setIsFormVisible(false);
  };

  return (
    <div className="mb-6 w-full px-5 ">
      <div className="relative flex flex-col md:flex-row items-start gap-4 rounded-xl border border-blue-300 p-4 shadow-sm bg-white w-full mx-auto">
        
        {/* Image Section */}
        <div className="relative w-28 h-28 md:w-32 md:h-32 flex-shrink-0">
          <Image
            src={imageSrc || "/images/default-placeholder.svg"} // ✅ Fallback image
            alt={name || "img"}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1">
          {/* Display Name Separately */}
          <p className="text-sm text-gray-500">
            {type === "tool" ? "Tool name:" : "Patient name:"}{" "}
            <span className="font-semibold text-gray-700">{name}</span>
          </p>

          {/* Dynamic Fields (Excluding "Name" & "Description") */}
          {additionalFields
            .filter(field => !["name", "description"].includes(field.label.toLowerCase())) // ✅ Remove duplicate "Name" & "Description"
            .map(({ label, value, color }, index) => (
              <p key={index} className="text-sm text-gray-500">
                {label}: <span className={`font-semibold ${color}`}>{value}</span>
              </p>
          ))}

          {/* Display Description (Only if it exists) */}
          {description && description.trim() !== "" && (
            <p className="text-sm text-gray-500 mt-1">
              Description: <span className="text-gray-700">{description}</span>
            </p>
          )}
        </div>

        {/* Favorite Button (Only if isFavorite is true) */}
        {isFavorite && <Fav fav={isFavorite} patientId={patientId} />}

        {/* Edit Icon - Only shows if onEdit is provided */}
        {onEdit && (
          <button onClick={toggleForm} className="absolute top-3 right-3">
            <Image
              src="/images/icons/profile/edit.svg"
              alt="Edit"
              width={20}
              height={20}
              className="cursor-pointer hover:opacity-80 transition"
            />
          </button>
        )}
      </div>

      {/* Edit Form Component */}
      {isFormVisible && (
        <EditForm
          fields={[
            { name: "name", label: "Name", value: name },
            ...additionalFields
              .filter(field => field.label.toLowerCase() !== "description"), // ✅ Exclude "Description"
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
