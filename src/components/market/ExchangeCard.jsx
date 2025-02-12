import React from 'react';
import Image from 'next/image';
import { Heart, Phone } from 'lucide-react';
import Fav from '../UI/Fav';
import img from '../../../public/images/market/tooth.svg'
const ExchangeCard = ({ publisher, name, exchangeWith, notes, contact, date, imageSrc }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-5 w-full sm:w-96 relative">
            <div className="flex flex-col gap-2 sm:flex-col md:flex-row justify-between items-start mb-4">
                <div>
                    <Image src={imageSrc || img} alt="Tooth icon" width={50} height={50} className="w-16 h-16" />
                </div>
                <div className="text-sm space-y-1">
                    <p>
                        <span className="font-semibold">Publisher:</span> {publisher}
                    </p>
                    <p>
                        <span className="font-semibold">Name:</span> {name}
                    </p>
                    <p>
                        <span className="font-semibold">Exchange with:</span> {exchangeWith}
                    </p>
                </div>
                <div>
                    <Fav />
                </div>
            </div>


            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
                <div className='flex flex-col'>
                <span className="font-semibold text-gray-500">Notes:</span>
                    <p className="">
                        {notes}
                    </p>
                </div>

                <div className="text-left flex flex-col gap-1">
                <span className="font-semibold text-gray-500">contact</span>
                    <p className="text-black text-sm">
                        <Phone className="inline w-4 h-4 mr-1" />
                        <span className='text-black'>{contact}</span>
                    </p>
                    <p className="text-gray-400 text-xs">{date}</p>
                </div>
            </div>
        </div>
    );
};

export default ExchangeCard;
