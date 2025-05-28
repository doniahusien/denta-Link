import Image from 'next/image';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '@/redux/features/cart/cartThunk';
import { addToCart } from '@/redux/features/cart/cartThunk';
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col md:flex-row items-center p-4 border rounded-lg shadow-sm space-y-4 md:space-y-0">
      <div className="w-24 h-24 flex-shrink-0">
        <Image src={item.tool.images[0]} alt={item.tool.toolName} width={80} height={80} />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-lg font-semibold">{item.tool.toolName}</h3>
        <p className="text-gray-600">{item.tool.description}</p>
        <p className="text-blue-600 font-semibold">{item.tool.price} LE</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="p-1 border rounded"
          onClick={() =>
            dispatch(addToCart({ toolId: item.tool._id, quantity: 1 }))
          }
        >
          <Plus size={16} />
        </button>

        <span className="px-2">{item.quantity}</span>
        <button
          className="p-1 border rounded"
          onClick={() =>
            dispatch(removeCartItem({ toolId: item.tool._id }))
          }
        >
          <Minus size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
