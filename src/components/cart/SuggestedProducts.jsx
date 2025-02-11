import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const suggestedProducts = [
  { id: 1, name: "Curette", price: 200, description: "Used for deep cleaning", image: "curette.svg" },
  { id: 2, name: "Scaler", price: 250, description: "Removes plaque and tartar", image: "scaler.svg" },
];

const SuggestedProducts = () => {
  return (
    <div>
      <h3 className="mt-8 text-xl font-semibold">You might like</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {suggestedProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-sm">
            <Image src={`/images/Cart/${product.image}`} alt={product.name} width={128} height={128} />
            <h4 className="mt-2 text-lg font-semibold">{product.name}</h4>
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
