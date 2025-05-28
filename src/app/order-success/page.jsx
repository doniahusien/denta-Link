"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const OrderSuccess = () => {
  const router = useRouter();

  const { orderId, amount, success } = useSelector((state) => state.cart);


  return (
    <ProtectedRoute>
      <div className="flex justify-center items-center min-h-screen my-44 p-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex justify-center"
          >
            <CheckCircle className="text-green-500 w-16 h-16" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-semibold text-center mt-4 text-gray-700"
          >
            Success
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6 space-y-4 text-gray-600"
          >
            <div className="flex justify-between">
              <span className="font-medium">Order ID</span>
              <span>#{orderId}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Order Date</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Payment</span>
              <span>Credit card</span>
            </div>

    
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-6 bg-gray-100 p-4 rounded-lg"
          >
            <div className="flex justify-between">
              <span>Product Total</span>
              <span>amount LE</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>0 LE</span>
            </div>

            <div className="flex justify-between">
              <span>Discount</span>
              <span>0 LE</span>
            </div>

            <div className="border-t mt-2 pt-2 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>{amount} LE</span>
            </div>
          </motion.div>

          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
            className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
            onClick={() => router.push("/")}
          >
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    </ProtectedRoute>
  );
};

export default OrderSuccess;
