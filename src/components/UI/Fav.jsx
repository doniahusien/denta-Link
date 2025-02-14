'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Heart } from 'lucide-react';
import { toggleFavorite } from '@/redux/features/patient/patientThunk';

const Fav = ({ fav, patientId }) => {
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(fav);
    const [isUpdating, setIsUpdating] = useState(false);

    const toggleLike = async () => {
        setLiked((prev) => !prev); 
        setIsUpdating(true);

        try {
            await dispatch(toggleFavorite(patientId)).unwrap();
        } catch (error) {
            console.error("Failed to toggle favorite:", error);
            setLiked((prev) => !prev); 
        } finally {
            setIsUpdating(false);
        }
    };

    useEffect(() => {
        setLiked(fav);
    }, [fav]);

    return (
        <button
            onClick={toggleLike}
            className={`absolute top-2 right-4 p-2 rounded-full transition-colors ${isUpdating ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            disabled={isUpdating}
        >
            <Heart
                className={`w-8 h-8 transition-colors ${liked ? 'text-red-500 fill-red-500' : 'text-gray-400'
                    }`}
            />
        </button>
    );
};

export default Fav;
