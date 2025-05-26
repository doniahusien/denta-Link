"use client";

import { useEffect, useState } from "react";
import ContentBox from "@/components/UI/profile/ContentBox";
import ProtectedRoute from "@/components/ProtectedRoute";
import ExchangeCard from "@/components/market/ExchangeCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchFav } from "@/redux/features/profile/profileThunk";
export default function FavPage() {
    const dispatch = useDispatch();
    const { loading, favouriteExchanges, error } = useSelector((state) => state.profile);

    useEffect(() => {
        dispatch(fetchFav());
    }, [dispatch]);
    return (
        <ProtectedRoute>
            <ContentBox title="Favorite Exchange">
                <div className="flex flex-row justify-around flex-wrap pt-5 gap-5">
                    {favouriteExchanges.map((exchange, index) => (
                        <ExchangeCard
                            key={index}
                            publisher={exchange.name}
                            name={exchange.toothName}
                            imageSrc={exchange.images[0]}
                            exchangeWith={exchange.exchangeWith}
                            notes={exchange.notes}
                            contact={exchange.contact}
                            date={exchange.createdAt}
                            exchangeId={exchange._id}
                            isFavExchange={exchange.isFavExchange}
                        />
                    ))}
                </div>
            </ContentBox>
        </ProtectedRoute>
    );
}
