"use client";

import { useState } from "react";
import CartItem from "@/components/cart/cartItem";
import Button from "@/components/UI/Button/Button";
import { motion } from "framer-motion";
import ProtectedRoute from "@/components/ProtectedRoute";
const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Dental Drill",
      description: "Used to remove decay and shape teeth for fillings or crowns",
      price: 1200,
      quantity: 1,
      image: "drill.svg",
    },
    {
      id: 2,
      name: "Dental Drill",
      description: "Used to remove decay and shape teeth for fillings or crowns",
      price: 1200,
      quantity: 1,
      image: "drill.svg",
    },
  ]);

  const DELIVERY_FEE = 70;
  const DISCOUNT = 0;
  const productTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = productTotal + DELIVERY_FEE - DISCOUNT;

  return (
    <ProtectedRoute>
    <motion.div
      className="max-w-4xl mx-auto p-4 my-40 md:p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <CartItem item={item} />
          </motion.div>
        ))}
      </div>

      {/* Order Summary */}
      <motion.div
        className="mt-8 border p-4 rounded-lg shadow-sm bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold">Order summary</h3>
        <div className="mt-2 space-y-2 text-gray-700">
          <div className="flex justify-between">
            <span>Product total</span>
            <span>{productTotal} LE</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery fee</span>
            <span>{DELIVERY_FEE} LE</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>{DISCOUNT} LE</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>{total} LE</span>
          </div>
        </div>
      </motion.div>

      {/* Confirm Button */}
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Button title="Confirm" link="checkout2" className="w-full py-3 text-lg" />
      </motion.div>
      </motion.div>
      </ProtectedRoute>
  );
};

export default CheckoutPage;
