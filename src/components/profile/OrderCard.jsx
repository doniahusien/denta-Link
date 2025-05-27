import React from 'react';
import Image from 'next/image';

const OrderCard = ({ orderNumber, orderDate, totalAmount, imageSrc }) => {
  return (
    <div className="flex justify-between items-center rounded-xl border border-blue-300 p-2 shadow-sm bg-white w-full">
      {/* Details Section */}
      <div>
        <p className="text-sm text-gray-500">
          Order: <span className="font-semibold text-gray-800">#{orderNumber}</span>
        </p>
        <p className="text-sm text-gray-500">
          Order Date: <span className="font-semibold text-gray-800">{orderDate}</span>
        </p>
        <p className="text-sm text-gray-500">
          Total Amount: <span className="font-semibold text-gray-800">{totalAmount}</span>
        </p>
      </div>

      {/* Image Section */}
      <div className="w-50 h-50">
        <Image
          src={imageSrc}
          alt="Order Image"
          width={150}
          height={150}
          className="object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default OrderCard;
