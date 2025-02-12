'use client';
import React from 'react';

const DetailInfo = ({ name, price, description, category, publisher }) => {
  return (
    <div className="flex flex-col lg:flex-col items-start gap-5 p-5">
      <div className="flex flex-row gap-20 items-center">
        <h1 className="text-3xl mb-1">{name}</h1>
        <p className="text-blue-500 text-lg">{price} LE</p>
      </div>
      <p className="text-gray-500">{description}</p>
      <div className="space-y-1">
        <p>
          <span className="text-gray-500">Category: </span>
          {category}
        </p>
        <p>
          <span className="text-gray-500">Publisher: </span>
          <span className="text-blue-500 hover:underline cursor-pointer">{publisher}</span>
        </p>
      </div>
    </div>
  );
};

export default DetailInfo;
