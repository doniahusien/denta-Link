'use client';
import { useEffect } from 'react';
import ContentBox from '@/components/UI/profile/ContentBox';
import OrderCard from '@/components/profile/OrderCard';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '@/redux/features/profile/profileThunk';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { myOrders = [] } = useSelector((state) => state.profile); // Fallback to empty array
  const imgsrc = "/images/Profile/mirror.svg";

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <ProtectedRoute>
      <ContentBox title="All Orders">
        {myOrders.length === 0 ? (
          <p className="text-center text-gray-600">No orders found.</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {myOrders.map((order) => (
              <OrderCard
                key={order.orderNumber}
                orderNumber={order.orderNumber}
                orderDate={new Date(order.createdAt).toLocaleString()}
                totalAmount={order.totalPrice}
                imageSrc={
                  order.items.find(item => item.tool?.images?.[0])?.tool.images[0] || imgsrc
                }
              />
            ))}
          </div>
        )}
      </ContentBox>
    </ProtectedRoute>
  );
}
