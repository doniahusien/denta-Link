'use client';
import { useState, useEffect } from 'react';
import ContentBox from '@/components/UI/profile/ContentBox';
import OrderCard from '@/components/profile/OrderCard';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getMyOrders } from '@/redux/features/cart/cartThunk';
export default function ProfilePage() {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.cart);
const imgsrc="/images/Profile/mirror.svg"
  useEffect(() => {
dispatch(getMyOrders())
  }, []);

  return (
    <ProtectedRoute>
    <ContentBox title="All Orders">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {orders.map((order) => (
          <OrderCard 
            key={order.orderNumber}
            orderNumber={order.orderNumber}
            orderDate={new Date(order.createdAt).toLocaleString()}
            totalAmount={order.totalPrice}
            imageSrc={imgsrc}
          />
        ))}
      </div>
      </ContentBox>
    </ProtectedRoute>
  );
}
