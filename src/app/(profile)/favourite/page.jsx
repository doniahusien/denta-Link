"use client";

import ContentBox from '@/components/UI/profile/ContentBox';
import ProtectedRoute from '@/components/ProtectedRoute';
export default function ProfilePage() {

  return (
    <ProtectedRoute>
      <ContentBox title="Favorite">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        </div>
      </ContentBox>
    </ProtectedRoute>
  );
}