"use client";
import { useEffect } from "react";
import ContentBox from "@/components/UI/profile/ContentBox";
import ProtectedRoute from "@/components/ProtectedRoute";
import ExchangeCard from "@/components/profile/ExchangeCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchFav } from "@/redux/features/profile/profileThunk";

export default function ExchangeFavPage() {
    const dispatch = useDispatch();
    const { loading, favouriteExchanges, error } = useSelector((state) => state.profile);

    useEffect(() => {
        dispatch(fetchFav());
    }, [dispatch]);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="text-red-500">{error}</div>
            </div>
        );
    }

    return (
        <ProtectedRoute>
            <ContentBox title="Favorite Exchanges">
                <div className="flex flex-row flex-wrap gap-2 pt-5">
                    {favouriteExchanges.length > 0 ? (
                        favouriteExchanges.map((exchange) => (
                            <ExchangeCard
                                key={exchange._id}
                                publisher={exchange.name}
                                toothName={exchange.toothName}
                                imageSrc={exchange.images[0]}
                                exchangeWith={exchange.exchangeWith}
                                notes={exchange.notes}
                                contact={exchange.contact}
                                createdAt={exchange.createdAt}
                                exchangeId={exchange._id}
                                isFavorite={true}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10">
                            <p className="text-gray-500">No favorite exchanges found.</p>
                        </div>
                    )}
                </div>
            </ContentBox>
        </ProtectedRoute>
    );
}