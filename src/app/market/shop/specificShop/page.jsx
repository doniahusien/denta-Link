"use client"
import React from 'react';
import ToolCard from '@/components/market/ToolCard';
import { ChevronLeft, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import logo from '../../../../../public/images/icons/logo.svg'
import Image from 'next/image';
import ProtectedRoute from '@/components/ProtectedRoute';
const SpecificShopPage = () => {
    const router = useRouter();


    const tools = [
        {
            id: 1,
            name: 'Curette',
            price: '200',
            description: 'for deep cleaning',
            image: '/images/market/tool.svg'
        },
        {
            id: 2,
            name: 'Curette',
            price: '200',
            description: 'for deep cleaning',
            image: '/images/market/tool.svg'

        },
        {
            id: 3,
            name: 'Curette',
            price: '200',
            description: 'for deep cleaning',
            image: '/images/market/tool.svg'

        }
    ];

    return (
        <ProtectedRoute>
            <div className='pt-40'>
                <div className="py-12 bg-blue-50 ">
                    {/* Navigation header */}
                    <nav className=" flex items-center justify-between border-b">
                        <div className="flex items-center justify-between gap-4">
                            <button
                                onClick={() => router.back()}
                                className="p-2 hover:bg-gray-100 rounded-full"
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>

                        </div>
                        <h1 className="text-4xl font-semibold">Dentsply Sirona</h1>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <Image src={logo} width={100} height={100} alt="img" />
                        </button>
                    </nav>

                    <div className="container mx-auto py-10">
                        <div className="flex flex-wrap gap-6 justify-center">
                            {tools.map((tool) => (
                                <ToolCard
                                    key={tool.id}
                                    id={tool.id}
                                    image={tool.image}
                                    name={tool.name}
                                    price={tool.price}
                                    description={tool.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default SpecificShopPage;