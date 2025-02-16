"use client";

import { useEffect } from "react";
import ContentBox from "@/components/UI/profile/ContentBox";
import ProtectedRoute from "@/components/ProtectedRoute";
import Card from "@/components/profile/ToolCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatientFav } from "@/redux/features/profile/profileThunk";

export default function FavPage() {
    const dispatch = useDispatch();
    const { loading, favouritePatients, error } = useSelector((state) => state.profile); // ✅ FIXED useSelector

    useEffect(() => {
        dispatch(fetchPatientFav());
    }, [dispatch]);

    useEffect(() => {
        console.log("Redux State (favouritePatients):", favouritePatients);
    }, [favouritePatients]);

    if (loading) return <p className="text-gray-500">Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <ProtectedRoute>
            <ContentBox title="Favorite Patients">
                <div className="flex flex-col">
                    {favouritePatients.length > 0 ? (
                        favouritePatients.map((patient) => (
                            <Card
                                key={patient._id}
                                patientId={patient._id}
                                name={patient.name}
                                imageSrc={patient.file || "/images/patient.svg"}
                                additionalFields={[
                                    { label: "Age", value: patient.age },
                                    { label: "Title", value: patient.title },
                                    { label: "Gender", value: patient.gender },
                                    { label: "Phone number", value: patient.phone },
                                    { label: "Category", value: patient.category }
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