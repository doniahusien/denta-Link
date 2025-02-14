'use client';
import React from 'react';

const DetailInfo = ({ name,patientname, age, location, gender, price, description, category, publisher }) => {
  return (
    <div className="flex flex-col lg:flex-col items-start gap-5 p-5">
      <div className="flex flex-row gap-20 items-center">
        <h1 className="text-3xl mb-1">{name}</h1>
        {price && <p className="text-blue-500 text-lg">{price} LE</p>}
      </div>
      {description && <p className="text-gray-500">{description}</p>}

      <div className="space-y-2 text-xl">
      {publisher && (
          <p>
            <span className="text-gray-500">Publisher: </span>
            <span className="text-blue-500 hover:underline cursor-pointer">{publisher}</span>
          </p>
        )}
        {patientname && (
          <p>
            <span className="text-gray-500">Patient Name: </span>
            <span className="text-blue-500">{patientname}</span>
          </p>
        )}

        {location && (
          <p>
            <span className="text-gray-500">Location: </span>
            {location}
          </p>
        )}
        
        {age && (
          <p>
            <span className="text-gray-500">Age: </span>
            {age}
          </p>
        )}
        {gender && (
          <p>
            <span className="text-gray-500">Gender: </span>
            {gender}
          </p>
        )}
        {category && (
          <p>
            <span className="text-gray-500">Category: </span>
            {category}
          </p>
        )}
      
      </div>
    </div>
  );
};

export default DetailInfo;
