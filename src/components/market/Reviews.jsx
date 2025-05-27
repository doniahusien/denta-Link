'use client';

import React from 'react';
import Link from 'next/link';

const Reviews = ({ reviews }) => {
    // Render stars dynamically based on rating
    const renderStars = (rating) => {
        const maxStars = 5;
        const stars = [];
        for (let i = 0; i < maxStars; i++) {
            stars.push(
                <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="pt-10">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">Reviews ({reviews.length})</h3>
                <Link href="/market/reviews">
                    <span className="text-gray-500 text-sm hover:underline cursor-pointer">View all</span>
                </Link>
            </div>

            {reviews.slice(0, 1).map((review, index) => (
                <div key={index} className="space-y-4">
                    <div className="flex flex-row justify-between">
                        <div className="flex gap-10 items-center">
                            <p>{/*review.user || "Unknown"*/}Hidden User</p>
                            <div>{renderStars(review.rating)}</div>
                        </div>
                        <p className="text-gray-500 text-sm">{review.date || "N/A"}</p>
                    </div>
                    <p className="text-sm text-gray-600">{review.comment || "No comment"}</p>
                </div>
            ))}
        </div>
    );
};

export default Reviews;
