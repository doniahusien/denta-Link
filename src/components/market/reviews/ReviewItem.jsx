import React from "react";
import StarRating from "./StarRating";

const ReviewItem = ({ review }) => {
    return (
        <div className="mb-4 p-4 border rounded-lg bg-white">
            <div className="flex justify-between">
                <span className="font-semibold">{review.name}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <StarRating rating={review.rating} />
            <p className="text-gray-700 mt-2">{review.comment}</p>
        </div>
    );
};

export default ReviewItem;
