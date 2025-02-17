'use client';
import React from 'react';
import Image from 'next/image';
import Fav from './Fav';

const DetailImage = ({ image, alt,fav,patientId }) => {

    return (
        <div className="relative mb-8">
            <Image src={image[0]} alt={alt} width={100} height={200} className="w-full h-64 object-cover" />
            <Fav fav={fav} patientId={patientId} />
        </div>
    );
};

export default DetailImage;
