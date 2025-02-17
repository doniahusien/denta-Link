"use client";

import { useEffect } from "react";
import ContentBox from "@/components/UI/profile/ContentBox";
import ProtectedRoute from "@/components/ProtectedRoute";
import Card from "@/components/profile/ToolCard";

export default function FavPage() {
 
    return (
        <ProtectedRoute>
            <ContentBox title="Favorite Tools">
                <div className="flex flex-col pt-5">
                    <Card
                        type="tool"
                        name="Dental Drill"
                        imageSrc="/images/Profile/mirror.svg"
                        additionalFields={[
                            { label: "Price", name: "price", value: "$120" },
                            { label: "Category", name: "category", value: "Endodontics" },
                            { label: "Description", name: "description", value: "Used for orthodontic treatments." }
                        ]}
                        isFavorite={true}
                        patientId="255"

                    />
            
                </div>
            </ContentBox>
        </ProtectedRoute>
    );
}