'use client';

import { useState } from 'react';
import CartItem from '@/components/cart/cartItem';
import SuggestedProducts from '@/components/cart/SuggestedProducts';
import EmptyCart from '@/components/cart/emptyCart';
import Button from "@/components/UI/Button/Button";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Dental Drill',
      description: 'Used to remove decay and shape teeth for fillings or crowns',
      price: 1200,
      quantity: 1,
      image: 'drill.svg',
    },
    {
      id: 2,
      name: 'Curette',
      description: 'Used for deep cleaning of teeth and removing tartar',
      price: 200,
      quantity: 1,
      image: 'curette.svg',
    },
  ]);

  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto my-40 p-4 md:p-6">
      <h2 className="text-2xl font-semibold">Cart ({cartItems.length})</h2>

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className=" mt-6 space-y-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
          ))}
            <div className='mt-10'>
            <Button title="Checkout" link="/checkout" className="w-full mt-10 py-2" />

            </div>
        </div>
      )}

      <SuggestedProducts />
    </div>
  );
};

export default CartPage;
