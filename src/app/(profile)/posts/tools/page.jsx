
"use client";
import ProtectedRoute from '@/components/ProtectedRoute';
import ContentBox from '@/components/UI/profile/ContentBox';
import Card from '@/components/profile/ToolCard';
export default function ProfilePage() {

  return (
    <ProtectedRoute>
      <ContentBox title="Tools">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">


          <Card
            title="Tool Name"
            imageSrc="/images/Profile/mirror.svg"
            additionalFields={[
              { label: "Name", name: "name", value: "Dental Drill" },
              { label: "Price", name: "price", value: "$120" },
              { label: "Category", name: "category", value: "Endodontics" },
              { label: "Description", name: "description", value: "Used for orthodontic treatments." }
            ]}
            onEdit={(updatedData) => console.log("Updated Tool:", updatedData)}
          />


        </div>
      </ContentBox>
    </ProtectedRoute>
  );
}