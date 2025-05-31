"use client";

import { useEffect } from "react";
import ContentBox from "@/components/UI/profile/ContentBox";
import ProtectedRoute from "@/components/ProtectedRoute";
import Card from "@/components/profile/ToolCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchFav } from "@/redux/features/profile/profileThunk";
export default function FavPage() {
    const dispatch = useDispatch();
    const { loading, favouritePatients, error } = useSelector((state) => state.profile);

    useEffect(() => {
        dispatch(fetchFav());
    }, [dispatch]);

 if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }   
    return (
        <ProtectedRoute>
            <ContentBox title="Favorite Patients">
                <div className="flex flex-col">
                    {Array.isArray(favouritePatients) && favouritePatients.length > 0 ? (
                        favouritePatients.map((patient) => (
                            <Card
                                type="Patient"
                                key={patient._id}
                                patientId={patient._id}
                                name={patient.name}
                                imageSrc={patient.images?.[0] || "/default-image.png"}
                                additionalFields={[
                                    { label: "Age", value: patient.age },
                                    { label: "Title", value: patient.title },
                                    { label: "Gender", value: patient.gender },
                                    { label: "Phone number", value: patient.phone },
                                    { label: "Category", value: patient.category },
                                    { label: "Location", value: patient.location },
                                ]}
                                description={patient.description}
                                isFavorite={true}
                            />
                        ))
                    ) : (
                        <p className="text-gray-500">No favorite patients found.</p>
                    )}

                </div>
            </ContentBox>
        </ProtectedRoute>
    );
}