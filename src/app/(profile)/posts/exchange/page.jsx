"use client";
import { useEffect } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import ContentBox from "@/components/UI/profile/ContentBox";
import ExchangeCard from "../../../../components/profile/ExchangeCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyExchanges, deleteExchange } from "@/redux/features/profile/profileThunk";

export default function ExchangeProfilePage() {
  const dispatch = useDispatch();
  const { myExchanges, loading, error } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchMyExchanges());
  }, [dispatch]);

  const handleEditExchange = (id, updatedData) => {
    // TODO: Implement edit functionality
    console.log("Editing exchange:", id, updatedData);
  };

  const handleDeleteExchange = (id) => {
    if (confirm("Are you sure you want to delete this exchange?")) {
      dispatch(deleteExchange(id));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <div className="bg-red-50 p-6 rounded-lg max-w-md text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h3 className="mt-3 text-lg font-medium text-red-800">Error loading exchanges</h3>
          <p className="mt-2 text-sm text-red-600">{error}</p>
          <button
            onClick={() => dispatch(fetchMyExchanges())}
            className="mt-4 inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <ContentBox title="My Exchanges">
        <div className="space-y-4">
          {myExchanges.length > 0 ? (
            myExchanges.map((tool) => (
              <ExchangeCard
                key={tool._id}
                name={tool.name}
                publisher={tool.name}
                toothName={tool.toothName}
                imageSrc={tool.images[0]}
                exchangeWith={tool.exchangeWith}
                notes={tool.notes}
                contact={tool.contact}
                createdAt={tool.createdAt}
                isFavorite={false}
                exchangeId={tool._id}
                onEdit={(updatedData) => handleEditExchange(tool._id, updatedData)}
                onDelete={() => handleDeleteExchange(tool._id)}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No exchanges found</h3>
              <p className="mt-1 text-sm text-gray-500">
                You haven't created any exchange listings yet.
              </p>
             
            </div>
          )}
        </div>
      </ContentBox>
    </ProtectedRoute>
  );
}