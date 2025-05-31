"use client";
import { useEffect } from "react";
import ContentBox from "@/components/UI/profile/ContentBox";
import ProtectedRoute from "@/components/ProtectedRoute";
import Card from "@/components/profile/ToolCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchFav } from "@/redux/features/profile/profileThunk";
export default function ToolFavPage() {
    const dispatch = useDispatch();
    const { loading, favouriteTools, error } = useSelector((state) => state.profile);

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

    if (error) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="text-red-500">{error}</div>
            </div>
        );
    }

    return (
        <ProtectedRoute>
            <ContentBox title="Favorite Tools">
                <div className="flex flex-col pt-5 gap-4">
                    {favouriteTools.length > 0 ? (
                        favouriteTools.map((tool) => (
                            <Card 
                                key={tool._id}
                                type="tool"
                                name={tool.toolName}
                                imageSrc={tool.images?.[0] || "/default-tool-image.png"}
                                toolId={tool._id}
                                additionalFields={[
                                    { label: "Price", value: tool.price },
                                    { label: "Category", value: tool.category },
                                    { label: "Description", value: tool.description },
                                ]}
                                isFavorite={true}
                            />
                        ))
                    ) : (
                        <p className="text-gray-500 text-center py-10">No favorite tools found.</p>
                    )}
                </div>
            </ContentBox>
        </ProtectedRoute>
    );
}