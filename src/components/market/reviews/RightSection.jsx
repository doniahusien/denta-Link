import React from "react";
import Image from "next/image";
import ReviewItem from "./ReviewItem";
import StarRating from "./StarRating";
import { Pencil } from "lucide-react";
import logo from "../../../../public/images/icons/logo.svg";

const reviews = [
    {
        id: 1,
        name: "Ahmed",
        rating: 4,
        date: "12/10/2025",
        comment: "Excellent Quality and Precision – A Must-Have for Dental Professionals!",
    },
    {
        id: 2,
        name: "Roaa",
        rating: 5,
        date: "12/10/2025",
        comment: "Excellent Quality and Precision – A Must-Have for Dental Professionals!",
    },
];

const RightSection = () => {
    return (
        <div className="md:w-2/3 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Review</h2>
                <Image src={logo} width={80} height={80} alt="logo" className="mt-4 sm:mt-0" />
            </div>

            {/* Average Rating */}
            <div className="mt-4 border-l-2 pl-4">
                <p className="text-lg font-semibold">Average rating</p>
                <div className="flex items-center">
                    <span className="text-xl font-bold">4.00</span>
                    <StarRating rating={4.5} />
                </div>
                <p className="text-gray-500 text-xs md:text-sm">Average rating this year</p>
            </div>

            <div className="mt-6">
                {reviews.map((review) => (
                    <ReviewItem key={review.id} review={review} />
                ))}
            </div>

            {/* Rate Us Section */}
            <div className="mt-6 border-t pt-4">
                <p className="text-gray-600">Rate us.</p>
                <StarRating rating={0} isInteractive />
                <div className="relative mt-2">
                    <input
                        type="text"
                        placeholder="Add your review..."
                        className="w-full p-2 border rounded-lg pr-10"
                    />
                    <Pencil className="absolute right-3 top-3 text-gray-500" />
                </div>
            </div>
        </div>
    );
};

export default RightSection;
