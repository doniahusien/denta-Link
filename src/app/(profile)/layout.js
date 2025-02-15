'use client';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import { useState } from 'react';

export default function ProfileLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 mt-[120px]">
     
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Menu
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div 
          className={`fixed inset-0 z-50 bg-white p-4 transition-transform transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:static md:translate-x-0 md:w-auto`}
        >
          <ProfileSidebar />
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
          >
            Close
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
