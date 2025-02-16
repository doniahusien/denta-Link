"use client";

import ContentBox from '@/components/UI/profile/ContentBox';
import IconCard from '@/components/UI/profile/IconCard';
import ProtectedRoute from '@/components/ProtectedRoute';
import { favouriteCards } from '../../../../public/data/cardsData';
export default function FavPage() {

    return (
        <ProtectedRoute>
            <ContentBox title="My Favourites">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {favouriteCards.map((card) => (
                        <IconCard
                            key={card.href}
                            icon={card.icon}
                            title={card.title}
                            href={card.href}
                        />
                    ))}
                </div>
            </ContentBox>
        </ProtectedRoute>
    );
}