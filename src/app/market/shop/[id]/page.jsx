'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import DetailImage from '@/components/UI/DetailImage';
import DetailInfo from '@/components/UI/DetailInfo';
import PublisherInfo from '@/components/market/PublisherInfo';
import Reviews from '@/components/market/Reviews';
import RelatedProducts from '@/components/market/RelatedProducts';
import Fav from '@/components/UI/Fav';
import ProtectedRoute from '@/components/ProtectedRoute';
import { addToCart } from '@/redux/features/cart/cartThunk';
import { fetchToolById } from '@/redux/features/tools/toolThunk';

const ToolDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { tool, loading, error } = useSelector((state) => state.tool);
    const handleAddToCart = () => { 
        if (id) {
            dispatch(addToCart(id));
        } else {
            console.error('Tool ID is undefined');
        }
    }
    useEffect(() => {
        if (id) {
            dispatch(fetchToolById(id));
        } else {
            console.error('Tool ID is undefined');
        }
    }, [dispatch, id]);

    if (loading) return <p className="text-center py-20">Loading tool details...</p>;
    if (error) return <p className="text-center py-20 text-red-500">Error: {error}</p>;
    if (!tool) return <p className="text-center py-20">No tool found.</p>;

    const publisher = {
        name: 'Dentsply Sirona',
        description:
            'One of the largest manufacturers of dental equipment and supplies. They produce everything from hand instruments to imaging systems.',
    };

    const reviews = [
        {
            user: 'Roaa',
            date: '12/10/2023',
            comment: 'Excellent Quality and Precision – A Must-Have for Dental Professionals!',
        },
    ];

    const relatedProducts = [
        {
            id: 1,
            name: 'Curette',
            price: '200',
            description: 'for deep cleaning',
            image: '/images/market/tool.svg',
        },
        {
            id: 2,
            name: 'Curette',
            price: '200',
            description: 'for deep cleaning',
            image: '/images/market/tool.svg',
        },
    ];

    return (
        <ProtectedRoute>
            <div className="max-w-7xl mx-auto py-44 px-4">
                <div className="space-y-12">
                    <h2 className="text-3xl font-semibold">Product Details</h2>

                    {/* Row 1: Image & Info */}
                    <div className="flex flex-col lg:flex-row gap-10 shadow-lg p-4 rounded-lg bg-white">
                        <div className="relative h-96 w-full lg:w-1/2">
                            <DetailImage
                                image={
                                    tool?.images
                                }
                                alt={tool?.toolName || "Tool image"}
                                tool
                            />
                            <Fav fav={tool.isFavoriteTool} toolId={id} />
                        </div>

                        <DetailInfo
                            name={tool.toolName}
                            price={tool.price}
                            description={tool.description}
                            category={tool.category}
                            publisher={tool.createdBy?.name}
                        />
                    </div>


                    <div className="flex flex-col lg:flex-row gap-10 justify-between">
                        <PublisherInfo
                            publisher={publisher}
                            address="123 Elm Street, Apt 4B, Springfield, IL 62704, USA"
                            contact="+999585106845"
                        />
                        <div className="space-y-8 p-10 shadow-md">
                            <Reviews reviews={reviews} />
                            <button onClick={handleAddToCart} className="w-full text-xl bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors">
                                Add to cart
                            </button>
                        </div>
                    </div>

                    {/* Row 3: Related Products */}
                    <div>
                        <RelatedProducts products={relatedProducts} />
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default ToolDetails;
