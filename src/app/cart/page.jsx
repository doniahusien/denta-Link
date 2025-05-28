'use client';

import { useEffect } from 'react';
import CartItem from '@/components/cart/cartItem';
import SuggestedProducts from '@/components/cart/SuggestedProducts';
import EmptyCart from '@/components/cart/emptyCart';
import Button from "@/components/UI/Button/Button";
import ProtectedRoute from '@/components/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '@/redux/features/cart/cartThunk';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  // Filter out null tools
  const filteredItems = items?.filter(item => item.tool !== null) || [];

  return (
    <ProtectedRoute>
      <div className="max-w-4xl mx-auto my-40 p-4 md:p-6">
        <h2 className="text-2xl font-semibold">Cart</h2>

        {filteredItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="mt-6 space-y-6">
            {filteredItems.map((item, index) => (
              <CartItem key={item._id || index} item={item} />
            ))}

            <div className="mt-10">
              <Button title="Checkout" link="/checkout" className="w-full mt-10 py-2" />
            </div>
          </div>
        )}

        {/* <SuggestedProducts /> */}
      </div>
    </ProtectedRoute>
  );
};

export default CartPage;
