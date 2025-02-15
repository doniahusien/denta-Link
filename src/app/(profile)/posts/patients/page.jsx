"use client";

import { useEffect, useState } from 'react';
import ContentBox from '@/components/UI/profile/ContentBox';
import ProtectedRoute from '@/components/ProtectedRoute';
import Card from '@/components/profile/ToolCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatientCases } from '@/redux/features/patient/patientThunk';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { mypatients, loading } = useSelector(state => state.patient);

  useEffect(() => {
    dispatch(fetchPatientCases());
  }, [dispatch]);

  useEffect(() => {
    console.log("Redux State (mypatients):", mypatients);
  }, [mypatients]);

  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <ProtectedRoute>
      <ContentBox title="Patients">
        <div className="flex flex-col ">
          {mypatients.length > 0 ? (mypatients.map((patient) => (
           <Card
           key={patient._id}
           name={patient.name}
           imageSrc={patient.file}
           additionalFields={[
             { label: "Name", value: patient.name },
             { label: "Age", value: patient.age },
             { label: "Title", value: patient.title },
             { label: "Gender", value: patient.gender },
             { label: "Phone Number", value: patient.phone },
             { label: "Category", value: patient.category },
             { label: "Description", value: patient.description }
           ]}
           description={patient.description}
           onEdit={(updatedData) => console.log("Updated Patient:", updatedData)}
         />
         
          ))) : (<>
              <p>Not found</p>
          </>)}
        </div>
      </ContentBox>
    </ProtectedRoute>
  );
}
