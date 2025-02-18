import React from "react";

const StarRating = ({ rating, isInteractive = false }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className="flex">
            {[...Array(fullStars)].map((_, i) => (
                <i key={i} className="fas fa-star text-yellow-500 text-lg md:text-xl"></i>
            ))}
            {hasHalfStar && <i className="fas fa-star-half-alt text-yellow-500 text-lg md:text-xl"></i>}
            {isInteractive &&
                [...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
                    <i key={i} className="fas fa-star text-gray-400 cursor-pointer text-lg md:text-xl"></i>
                ))}
        </div>
    );
};

export default StarRating;
