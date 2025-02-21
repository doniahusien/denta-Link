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
  onEdit,
  patientId,
  isFavorite = false
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const toggleForm = () => setIsFormVisible(!isFormVisible);
  const handleSave = (updatedData) => {
    if (onEdit) {
      const updatedObject = {
        name: updatedData.name || name,
        additionalFields: additionalFields.map((field) => ({
          ...field,
          value: updatedData[field.name] !== undefined ? updatedData[field.name] : field.value,
        })),
      };
      onEdit(updatedObject);
    }
    setIsFormVisible(false);
  };
  

  return (
    <div className="mb-6 w-full px-5">
      <div className="flex flex-col">
        
      </div>
      <div className="relative flex flex-col md:flex-row items-start gap-4 rounded-xl border border-blue-300 p-4 shadow-sm bg-white w-[700px]">

        {/* Image Section */}
        <div className="relative w-28 h-28 md:w-32 md:h-32 flex-shrink-0">
          <Image
            src={imageSrc}
            alt={name || "img"}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1">
          <p className="text-sm text-gray-500">
            {`${type.charAt(0).toUpperCase() + type.slice(1)} Name:`}{" "}
            <span className="font-semibold text-gray-700">{name}</span>
          </p>
          {additionalFields.map(({ label, value, color }, index) => (
            <p key={`${label}-${index}`} className="text-sm text-gray-500">
              {label}: <span className={`font-semibold ${color || "text-gray-700"}`}>{value}</span>
            </p>
          ))}


        </div>

        {isFavorite && <Fav fav={isFavorite} patientId={patientId} />}

        {/* Edit Icon */}
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


      {/* Edit Form */}
      {isFormVisible && (
        <EditForm patientId={patientId}
          fields={[
            { label: "Name", name: "name", value: name },
            ...additionalFields,
          ]}
          onSave={handleSave}
          onClose={() => setIsFormVisible(false)}
        />
      )}
    </div>
  );
};

export default Card;
