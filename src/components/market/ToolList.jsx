import React from 'react';
import ToolCard from './ToolCard';

const ToolList = () => {
    const products = [{
        id: 1,
        image: "/images/market/tool.svg",
        name: "Curette",
        price: 200,
        description: "for deep cleaning...",
    },
    {
        id: 2,
        image: "/images/market/tool.svg",
        name: "Scaler",
        price: 150,
        description: "for plaque removal...",
    },
    {
        id: 3,
        image: "/images/market/tool.svg",
        name: "Explorer",
        price: 100,
        description: "for cavity detection...",
    },
    {
        id: 89,
        image: "/images/market/tool.svg",
        name: "Explorer",
        price: 100,
        description: "for cavity detection...",
    },
    {
        id: 60,
        image: "/images/market/tool.svg",
        name: "Explorer",
        price: 100,
        description: "for cavity detection...",
    },
    {
        id: 70,
        image: "/images/market/tool.svg",
        name: "Explorer",
        price: 100,
        description: "for cavity detection...",
    },
    {
        id: 55,
        image: "/images/market/tool.svg",
        name: "Explorer",
        price: 100,
        description: "for cavity detection...",
    },
    {
        id: 40,
        image: "/images/market/tool.svg",
        name: "Explorer",
        price: 100,
        description: "for cavity detection...",
    },
    {
        id: 30,
        image: "/images/market/tool.svg",
        name: "Explorer",
        price: 100,
        description: "for cavity detection...",
    },
    {
        id: 10,
        image: "/images/market/tool.svg",
        name: "Explorer",
        price: 100,
        description: "for cavity detection...",
    },
    {
        id: 11,
        image: "/images/market/tool.svg",
        name: "Explorer",
        price: 100,
        description: "for cavity detection...",
    },
    ];

    return (
        <div className="min-h-screen px-5 py-10 ">
            <h1 className="text-4xl my-12 sm:pl-10 md:pl-20">Tools</h1>
            <div className="flex flex-row flex-wrap justify-center gap-4 sm:px-20 md:px-0">
                {products.map((product, index) => (
                    <ToolCard
                        key={index}
                        image={product.image}
                        name={product.name}
                        id={product.id}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ToolList;
