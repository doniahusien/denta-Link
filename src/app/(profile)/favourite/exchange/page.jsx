"use client";

import { useEffect, useState } from "react";
import ContentBox from "@/components/UI/profile/ContentBox";
import ProtectedRoute from "@/components/ProtectedRoute";
import ExchangeCard from "@/components/market/ExchangeCard";

export default function FavPage() {
    const [exchanges, setExchanges] = useState([]);

    useEffect(() => {
        const data = [
            {
                publisher: "Dr Ahmed",
                name: "Cannies",
                imageSrc: "/images/Profile/mirror.svg",
                exchangeWith: "Second molar",
                notes: "The tooth has a cavity.",
                contact: "015080568",
                date: "21/1/2025",
                isFavorite: true,
            },
            {
                publisher: "Dr Sara",
                name: "Incisor",
                imageSrc: "/images/Profile/tooth.svg",
                exchangeWith: "First molar",
                notes: "This tooth needs a root canal.",
                contact: "015080569",
                date: "22/1/2025",
                isFavorite: true,
            },
        ];

        setExchanges(data); 
    }, []);

    return (
        <ProtectedRoute>
            <ContentBox title="Favorite Exchange">
                <div className="flex flex-row flex-wrap pt-5 gap-5">
                    {exchanges.map((exchange, index) => (
                        <ExchangeCard
                            key={index}
                            publisher={exchange.publisher}
                            name={exchange.name}
                            imageSrc={exchange.imageSrc}
                            exchangeWith={exchange.exchangeWith}
                            notes={exchange.notes}
                            contact={exchange.contact}
                            date={exchange.date}
                            isFavorite={exchange.isFavorite}
                        />
                    ))}
                </div>
            </ContentBox>
        </ProtectedRoute>
    );
}
