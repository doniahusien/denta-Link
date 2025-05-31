"use client";

import { useEffect } from 'react';
import ContentBox from '@/components/UI/profile/ContentBox';
import ProtectedRoute from '@/components/ProtectedRoute';
import Card from '@/components/profile/ToolCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatientCases, deletePatientCase } from '@/redux/features/profile/profileThunk';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { mypatients, loading } = useSelector(state => state.profile);

  useEffect(() => {
    dispatch(fetchPatientCases());
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
      <ContentBox title="Patients">
        <div className="flex flex-col gap-4">
          {mypatients.length > 0 ? (
            mypatients.map((patient) => (
              <Card
                key={patient._id}
                name={patient.name}
                type="patient"
                imageSrc={patient.images[0]}
                additionalFields={[
                  { label: "Age", name: "age", value: patient.age },
                  { label: "Title", name: "title", value: patient.title },
                  { label: "Gender", name: "gender", value: patient.gender },
                  { label: "Phone Number", name: "phone", value: patient.phone },
                  { label: "Category", name: "category", value: patient.category },
                  { label: "Description", name: "description", value: patient.description }
                ]}
                patientId={patient._id}
                onEdit={(updatedData) => console.log("Updated Patient:", updatedData)}
                onDelete={() => dispatch(deletePatientCase(patient._id))} 
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <svg 
                className="w-16 h-16 text-gray-400 mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <h3 className="text-xl font-medium text-gray-700 mb-2">No Patients Found</h3>
              <p className="text-gray-500 max-w-md">
                You currently don't have any patients registered. Add a new patient to get started.
              </p>
             
            </div>
          )}
        </div>
      </ContentBox>
    </ProtectedRoute>
  );
}