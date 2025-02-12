"use client"
import React,{useState} from 'react'
import { Heart } from 'lucide-react';
const Fav = () => {
        const [liked, setLiked] = useState(false);
    
        const toggleLike = () => {
            setLiked(!liked);
        };
    
  return (
    <> <button
    onClick={toggleLike}
    className="absolute top-2 right-2 p-2 rounded-full transition-colors"
>
    {liked ? (
        <Heart className="w-8 h-8 text-red-500 fill-red-500" />
    ) : (
        <Heart className="w-8 h-8 text-gray-400" />
    )}
</button></>
  )
}

export default Fav