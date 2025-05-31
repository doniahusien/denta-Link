"use client";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTool, fetchMyTools } from '@/redux/features/profile/profileThunk';
import ProtectedRoute from '@/components/ProtectedRoute';
import ContentBox from '@/components/UI/profile/ContentBox';
import Card from '@/components/profile/ToolCard';

export default function ToolsProfilePage() {
  const dispatch = useDispatch();
  const { myTools, loading, error } = useSelector(state => state.profile);

  useEffect(() => {
    dispatch(fetchMyTools());
  }, [dispatch]);

  const handleDeleteTool = (toolId) => {
    if (confirm('Are you sure you want to delete this tool?')) {
      dispatch(deleteTool(toolId));
    }
  };

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
        <div className="text-center p-6 max-w-md bg-red-50 rounded-lg">
          <svg
            className="w-12 h-12 mx-auto text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-red-800">Error Loading Tools</h3>
          <p className="mt-2 text-red-600">{error}</p>
          <button
            onClick={() => dispatch(fetchMyTools())}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <ContentBox title="My Tools">
        <div className="space-y-4">
          {myTools.length > 0 ? (
            myTools.map((tool) => (
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
                onDelete={() => handleDeleteTool(tool._id)}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <svg
                className="w-16 h-16 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <h3 className="text-xl font-medium text-gray-700 mb-2">No Tools Found</h3>
              <p className="text-gray-500 max-w-md">
                You haven't listed any tools yet. Add your first tool to get started.
              </p>

              </div>  
    
          )}
        </div>
      </ContentBox>
    </ProtectedRoute>
  );
}