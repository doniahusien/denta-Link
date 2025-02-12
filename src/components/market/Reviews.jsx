'use client';
import React from 'react';

const Reviews = ({ reviews }) => {
    return (
        <div className="space-y-8 p-10 shadow-md">
            <div className="pt-10">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">Reviews ({reviews.length})</h3>
                    <span className="text-gray-500 text-sm hover:underline cursor-pointer">
                        View all
                    </span>
                </div>
                {reviews.slice(0, 1).map((review, index) => (
                    <div key={index} className="space-y-4">
                        <div className="flex flex-row justify-between">
                            <div className="flex gap-2">
                                <p>{review.user}</p>
                                <div className="flex text-yellow-400">★★★★</div>
                            </div>
                            <p className="text-gray-500 text-sm">{review.date}</p>
                        </div>
                        <p className="text-sm text-gray-600">{review.comment}</p>
                    </div>
                ))}
            </div>
            <button className="w-full text-xl bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors">
                Add to cart
            </button>
        </div>
    );
};

export default Reviews;
