// app/(profile)/profile/page.jsx
'use client';
import { useState, useEffect } from 'react';
import ContentBox from '@/components/UI/profile/ContentBox';
import OrderCard from '@/components/profile/OrderCard';

export default function ProfilePage() {
  const [orders, setOrders] = useState([]);


  useEffect(() => {

    const fakeData = [
      {
        orderNumber: "3256205",
        orderDate: "25/4/2025",
        totalAmount: "250LE",
        imageSrc: "/images/Profile/mirror.svg"
      },
      {
        orderNumber: "3256206",
        orderDate: "30/4/2025",
        totalAmount: "300LE",
        imageSrc: "/images/Profile/mirror.svg"
      },
      {
        orderNumber: "3256207",
        orderDate: "2/5/2025",
        totalAmount: "150LE",
        imageSrc: "/images/Profile/mirror.svg"
      }
    ];


    setTimeout(() => {
      setOrders(fakeData);
    }, 1000);
  }, []);

  return (
    <ContentBox title="All Orders">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {orders.map((order) => (
          <OrderCard 
            key={order.orderNumber}
            orderNumber={order.orderNumber}
            orderDate={order.orderDate}
            totalAmount={order.totalAmount}
            imageSrc={order.imageSrc}
          />
        ))}
      </div>
    </ContentBox>
  );
}
