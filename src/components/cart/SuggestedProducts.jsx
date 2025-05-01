"use client"
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSuggestedItems } from '@/redux/features/cart/cartThunk';

const SuggestedProducts = () => {
  const dispatch = useDispatch();
  const { suggested } = useSelector((state) => state.cart);
  useEffect(() => {
   dispatch(getSuggestedItems())
  },[dispatch])
  return (
    <div>
      <h3 className="mt-8 text-xl font-semibold">You might like</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {suggested.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow-sm">
            <Image src={product.images[0]} alt={product.toolName} width={128} height={128} />
            <h4 className="mt-2 text-lg font-semibold">{product.toolName}</h4>
            <p className="text-gray-600">Price: {product.price} LE</p>
            <p className="text-gray-500 text-sm">{product.description}</p>
            <Link href="#" className="mt-2 flex items-center text-blue-600 font-medium hover:underline">
              View <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedProducts;
