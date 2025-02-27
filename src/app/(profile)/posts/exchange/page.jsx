"use client";
import { useEffect } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import ContentBox from "@/components/UI/profile/ContentBox";
import ExchangeCard from "../../../../components/profile/ExchangeCard";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyExchanges } from "@/redux/features/profile/profileThunk";
export default function ProfilePage() {
  const dispatch = useDispatch();
  const { myExchanges, loading } = useSelector(state => state.profile);
  useEffect(() => {
    dispatch(fetchMyExchanges());
  }, [dispatch]);
  return (
    <ProtectedRoute>
      <ContentBox title="Exchange">
        <div className="flex flex-col justify-center">
          {myExchanges.map((tool, index) => (
            <ExchangeCard
              key={index}
              name={tool.name}
              publisher={tool.publisher.name}
              toothName={tool.toothName}
              imageSrc={tool.images[0]}
              exchangeWith={tool.exchangeWith}
              notes={tool.notes}
              contact={tool.contact}
              createdAt={tool.createdAt}
              isFavorite={false}
              exchangeId={tool._id}
              onEdit={(updatedData) => handleEditExchange(tool._id, updatedData)}
            />
          ))}

        </div>
      </ContentBox>
    </ProtectedRoute>
  );
}
