import Image from 'next/image';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 border rounded-lg shadow-sm space-y-4 md:space-y-0">
      <div className="w-24 h-24 flex-shrink-0">
        <Image src={`/images/Cart/${item.image}`} alt={item.name} width={80} height={80} />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">{item.description}</p>
        <p className="text-blue-600 font-semibold">{item.price} LE</p>
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-1 border rounded" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
          <Minus size={16} />
        </button>
        <span className="px-2">{item.quantity}</span>
        <button className="p-1 border rounded" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
          <Plus size={16} />
        </button>
        <button className="ml-2 text-red-600" onClick={() => removeFromCart(item.id)}>
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
