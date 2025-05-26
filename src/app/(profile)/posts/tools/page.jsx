
"use client";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTool, fetchMyTools } from '@/redux/features/profile/profileThunk';
import ProtectedRoute from '@/components/ProtectedRoute';
import ContentBox from '@/components/UI/profile/ContentBox';
import Card from '@/components/profile/ToolCard';
export default function ProfilePage() {

  const dispatch = useDispatch();

  const { myTools, loading } = useSelector(state => state.profile);
  useEffect(() => {
    dispatch(fetchMyTools());
  }, [dispatch]);
  return (
    <ProtectedRoute>
      <ContentBox title="Tools">
        <div className="flex flex-col">
          {myTools.length > 0 ? (myTools.map((tool) => (
            <Card
              key={tool._id}
              type="tool"
              name={tool.toolName}
              toolId={tool._id}
              imageSrc={tool.images[0]}
              additionalFields={[
                { label: "Price", name: "price", value: tool.price },
                { label: "Category", name: "category", value: tool.category },
                { label: "Description", name: "description", value: tool.description },
              ]}
              onEdit={(updatedData) => console.log("Updated Tool:", updatedData)}
              onDelete={() => dispatch(deleteTool(tool._id))} />
          ))) : (
            <p className="text-gray-500">No tools found</p>
          )}
        </div>
      </ContentBox>
    </ProtectedRoute>
  );
}