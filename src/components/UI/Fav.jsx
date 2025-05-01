'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Heart } from 'lucide-react';
import { toggleFavorite as togglePatientFavorite } from "@/redux/features/patient/patientThunk";
import { toggleFavorite as toggleExchangeFavorite } from "@/redux/features/exchange/exchangeThunk";
import { toggleFavorite  as toggleToolFavorite} from '@/redux/features/tools/toolThunk';


const Fav = ({ fav, patientId, exchangeId,toolId }) => {
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(fav);
    const [isUpdating, setIsUpdating] = useState(false);

    const toggleLike = async () => {
        setLiked((prev) => !prev);
        setIsUpdating(true);

        try {
            if (patientId) {
                await dispatch(togglePatientFavorite(patientId)).unwrap();
            } else if (exchangeId) {
                console.log("Toggling favorite for exchangeId:", exchangeId);

                await dispatch(toggleExchangeFavorite(exchangeId)).unwrap();
            }else if (toolId) {
                console.log("Toggling favorite for exchangeId:", toolId);

                await dispatch(toggleToolFavorite(toolId)).unwrap();
            }
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
