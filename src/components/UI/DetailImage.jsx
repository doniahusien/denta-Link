'use client';
import React from 'react';
import Image from 'next/image';
import Fav from './Fav';

const DetailImage = ({ image, alt,fav,patientId, tool}) => {

    return (
        <div className="relative mb-8 h-full">
            <Image src={image[0] }alt={alt} width={200} height={500} className="w-full h-full object-cover" />
            {!tool&&<Fav fav={fav} patientId={patientId} />}
            
        </div>
    );
};

export default DetailImage;
