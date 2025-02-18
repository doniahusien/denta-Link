'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { menuItems } from '../profile/ProfileSidebar';

const DropDown = () => {
    return (
        <div className="relative group">
            {/* Icon to hover on */}
            <div className="w-12 h-12 cursor-pointer">
                <Image 
                    src="/images/icons/profile.svg" 
                    alt="Profile" 
                    width={48} 
                    height={48} 
                    className="rounded-full"
                />
            </div>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out transform scale-95 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto z-10">
                <ul className="py-2">
                    {menuItems.map((item) => (
                        <li key={item.href} className="px-4 py-2 hover:bg-gray-100">
                            <Link href={item.href} className="flex items-center gap-2">
                                <Image 
                                    src={item.icon} 
                                    alt={item.title} 
                                    width={20} 
                                    height={20} 
                                />
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DropDown;
