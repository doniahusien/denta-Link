"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import ContentBox from "@/components/UI/profile/ContentBox";
import ExchangeCard from "../../../../components/profile/ExchangeCard";

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ContentBox title="Exchange">
        <div className="flex flex-col justify-center">
          <ExchangeCard
            publisher="Dr Ahmed"
            name="Cannies"
            imageSrc="/images/Profile/mirror.svg"
            exchangeWith="Second molar"
            notes="The tooth has a cavity."
            contact="015080568"
            date="21/1/2025"
            isFavorite={false}
            onEdit={(updatedData) =>
              console.log("Updated Patient:", updatedData)
            }
          />
        </div>
      </ContentBox>
    </ProtectedRoute>
  );
}
