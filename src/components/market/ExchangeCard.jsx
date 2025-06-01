import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import Fav from '../UI/Fav';
import img from '../../../public/images/market/tooth.svg'
const ExchangeCard = ({ name, toothName, exchangeWith, notes, contact, createdAt, imageSrc, isFavExchange, exchangeId }) => {
    return (
        <div className= "bg-white rounded-lg shadow-md p-3 w-full md:w-[500px] lg:w-[34%] relative">
            <div className="flex flex-col gap-10 sm:flex-col md:flex-row justify-between items-start mb-4">
                <div>
                    <Image src={imageSrc || img} alt="Tooth icon" width={100} height={50} className="w-48 h-48 lg:w-32 lg:h-32" />
                </div>
                <div className="text-sm space-y-1">
                    <p>
                        <span className="font-semibold">Publisher:</span> {name}
                    </p>
                    <p>
                        <span className="font-semibold">Name:</span> {toothName}
                    </p>
                    <p>
                        <span className="font-semibold">Exchange with:</span> {exchangeWith}
                    </p>
                </div>
                <div>
                    <Fav fav={isFavExchange} exchangeId={exchangeId} />
                </div>
            </div>


            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 p-2">
                <div className="flex flex-col max-w-[100%] md:w-52 sm:max-w-[80%]">
                    <span className="font-semibold text-gray-500">Notes:</span>
                    <p className="break-words">
                        {notes}
                    </p>
                </div>


                <div className="text-left flex flex-col gap-2">
                    <span className="font-semibold text-gray-500">contact</span>
                    <p className="text-black text-sm">
                        <Phone className="inline w-4 h-4 mr-1" />
                        <span className='text-black'>{contact}</span>
                    </p>
                    <p className="text-gray-400 text-xs">{new Date(createdAt).toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default ExchangeCard;
