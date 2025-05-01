'use client';
import React from 'react';
import Link from 'next/link';

const Reviews = ({ reviews }) => {
    return (
  
            <div className="pt-10">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">Reviews ({reviews.length})</h3>
                    <Link href="/market/reviews">
                        <span className="text-gray-500 text-sm hover:underline cursor-pointer">
                            View all
                        </span>
                    </Link>

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
         
    );
};

export default Reviews;
