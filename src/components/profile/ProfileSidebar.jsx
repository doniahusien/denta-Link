'use client';
import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


export const menuItems = [
    { title: 'My posts', icon: '/images/icons/profile/posts.svg', href: '/posts' },
    { title: 'All orders', icon: '/images/icons/profile/orders.svg', href: '/orders' },
    { title: 'Privacy Policy', icon: '/images/icons/profile/privacy.svg', href: '/privacy' },
    { title: 'Terms & conditions', icon: '/images/icons/profile/terms.svg', href: '/terms' },
    { title: 'Favourite', icon: '/images/icons/profile/favourite.svg', href: '/favourite' },
];

export default function ProfileSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-full max-w-sm md:w-80">
      <div className="rounded-xl bg-white p-6 shadow-md relative">
        {/* Settings Icon */}
        <div className="absolute top-4 left-4 text-gray-500">
          <Link href="/profile/settings">
            <Image 
              src="/images/icons/profile/settings.svg" 
              alt="Settings"
              width={24} 
              height={24} 
              className="cursor-pointer hover:opacity-80 transition"
            />
          </Link>
        </div>

        <Link 
          href="/edit" 
          className="absolute top-4 right-4"
        >
          <Image 
            src="/images/icons/profile/edit.svg" 
            alt="Edit Profile"
            width={20} 
            height={20} 
          />
        </Link>

        {/* Profile Section */}
        <div className="mb-4 text-center relative">
          <div className="mx-auto h-24 w-24 rounded-full overflow-hidden bg-blue-100 p-1">
            <Image
              src="/images/Profile/pfp.svg"
              alt="Profile"
              width={96}
              height={96}
              className="rounded-full object-cover"
            />
          </div>
          <h2 className="mt-4 text-xl font-semibold">Dr. Mahmoud</h2>
          <p className="text-sm text-gray-500">Ma@gmail.com</p>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between rounded-lg px-3 py-2 transition-colors ${
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Image 
                    src={item.icon} 
                    alt={item.title} 
                    width={20} 
                    height={20} 
                  />
                  <span>{item.title}</span>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
              </Link>
            );
          })}

          {/* Sign Out Button */}
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-red-600 hover:bg-red-50">
            <Image 
              src="/images/icons/profile/logout.svg" 
              alt="Sign Out"
              width={20} 
              height={20} 
            />
            <span>Sign Out</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
