"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ContentBox from "@/components/UI/profile/ContentBox";
import ProtectedRoute from "@/components/ProtectedRoute";
import Card from "@/components/profile/ToolCard";
import { fetchFav } from "@/redux/features/profile/profileThunk";
export default function FavPage() {
    const dispatch = useDispatch();
    const { loading, favouriteTools, error } = useSelector((state) => state.profile);
    useEffect(() => {
        dispatch(fetchFav());
    }, [dispatch]);
    return (
        <ProtectedRoute>
            <ContentBox title="Favorite Tools">
                <div className="flex flex-col pt-5">
                    {Array.isArray(favouriteTools) && favouriteTools.length > 0 ? (
                        favouriteTools.map((tool) => (
                            <Card key={tool._id}
                                type="tool"
                                name={tool.toolName}
                                imageSrc={tool.images?.[0] || "/default-tool-image.png"}
                                toolId={tool._id}
                                additionalFields={[
                                    { label: "Price", name: "price", value:tool.price },
                                    { label: "Category", name: "category", value: tool.category },
                                    { label: "Description", name: "description", value: tool.description },
                                ]}
                                isFavorite={true}
                                patientId="255"
                            />
                ))) : (
                <p className="text-gray-500">No favorite tools found.</p>
                    )}
   </div>
            </ContentBox>
        </ProtectedRoute>
    );
}