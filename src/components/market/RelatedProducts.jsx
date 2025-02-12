'use client';
import React from 'react';
import ToolCard from './ToolCard';

const RelatedProducts = ({ products }) => {
  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold my-10 pl-10">Related</h3>
      <div className="flex gap-4 flex-col lg:flex-row">
        {products.map((product) => (
          <ToolCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
