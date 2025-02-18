'use client';
import React from 'react';
import Link from 'next/link';
const PublisherInfo = ({ publisher, address, contact }) => {
    return (
        <div className="shadow-md p-10 lg:w-2/3">
            <div className="space-y-4">
                <p className="text-lg text-gray-500">About publisher:</p>
                <div>
                    <Link href="/market/shop/specificShop">
                        <span className="font-semibold">{publisher.name}: </span>
                    </Link>
                    <span className="text-gray-600 text-sm">{publisher.description}</span>
                </div>
                <p className="text-sm">
                    <span className="text-gray-600">Address: </span>
                    {address}
                </p>
                <p className="text-sm">
                    <span className="text-gray-600">Contact info: </span>
                    {contact}
                </p>
            </div>
        </div>
    );
};

export default PublisherInfo;
