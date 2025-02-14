'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import DetailImage from '@/components/UI/DetailImage';
import DetailInfo from '@/components/UI/DetailInfo';
import PublisherInfo from '@/components/market/PublisherInfo';
import Reviews from '@/components/market/Reviews';
import RelatedProducts from '@/components/market/RelatedProducts';
import Fav from '@/components/UI/Fav';

const ToolDetails = () => {
    const { id } = useParams();

    const tool = {
        name: 'Curette',
        price: '250',
        description: 'A sharp, hook-like tool used to detect cavities, plaque, or tartar buildup',
        category: 'Endodontics',
        publisher: 'Dentsply Sirona',
        image: "/images/market/tool.svg",
    };

    const publisher = {
        name: 'Dentsply Sirona',
        description: 'One of the largest manufacturers of dental equipment and supplies. They produce everything from hand instruments to imaging systems.',
    };

    const reviews = [
        { user: 'Roaa', date: '12/10/2023', comment: 'Excellent Quality and Precision – A Must-Have for Dental Professionals!' },
    ];

    const relatedProducts = [
        { id: 1, name: 'Curette', price: '200', description: 'for deep cleaning', image: "/images/market/tool.svg" },
        { id: 2, name: 'Curette', price: '200', description: 'for deep cleaning', image: "/images/market/tool.svg" },
    ];

    return (
        <div className="max-w-7xl mx-auto py-44">
            <div className="space-y-12">
                <h2 className="text-3xl font-semibold pl-10">Product details</h2>

                <div className="flex flex-col sm:gap-5 md:gap-10 lg:gap-16">
                    {/* Row 1: Image & Info */}
                    <div className="flex flex-col lg:flex-row gap-20 shadow-lg">
                        <div className='relative'>
                            <DetailImage image={tool.image} alt={tool.name} />
                        <Fav />
                        </div>
                        
                        <DetailInfo
                            name={tool.name}
                            price={tool.price}
                            description={tool.description}
                            category={tool.category}
                            publisher={tool.publisher}
                        />
                    </div>

                    {/* Row 2: Publisher Info & Reviews */}
                    <div className="flex flex-col lg:flex-row gap-10 justify-between lg:px-10">
                        <PublisherInfo
                            publisher={publisher}
                            address="123 Elm Street, Apt 4B, Springfield, IL 62704, USA"
                            contact="+999585106845"
                        />
                        <Reviews reviews={reviews} />
                    </div>

                    {/* Row 3: Related Products */}
                    <div className="flex flex-col lg:flex-row">
                        <RelatedProducts products={relatedProducts} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolDetails;
