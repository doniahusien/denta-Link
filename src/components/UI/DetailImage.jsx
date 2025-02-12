'use client';
import React from 'react';
import Image from 'next/image';
import Fav from './Fav';

const DetailImage = ({ image, alt }) => {

    return (
        <div className="relative mb-8">
            <Image src={image} alt={alt} width={150} height={200} className="w-full h-64 object-cover" />
<Fav />
        </div>
    );
};

export default DetailImage;
