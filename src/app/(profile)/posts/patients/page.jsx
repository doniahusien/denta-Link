"use client";

import { useEffect, useState } from 'react';
import ContentBox from '@/components/UI/profile/ContentBox';
import ProtectedRoute from '@/components/ProtectedRoute';
import Card from '@/components/profile/ToolCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatientCases } from '@/redux/features/profile/profileThunk';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { mypatients, loading } = useSelector(state => state.profile);
  useEffect(() => {
    dispatch(fetchPatientCases());
  }, [dispatch]);


  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <ProtectedRoute>
      <ContentBox title="Patients">
        <div className="flex flex-col ">
          

          {mypatients.length > 0 ? (mypatients.map((patient) => (
            <Card
              key={patient._id}
              name={patient.name}
              type="patient"
              imageSrc={patient.images[0]}
              additionalFields={[
                { label: "Age",name:"age",  value: patient.age },
                { label: "Title",name:"title",  value: patient.title },
                { label: "Gender",name:"gender", value: patient.gender },
                { label: "Phone Number",name:"phone",  value: patient.phone },
                { label: "Category",name:"category",  value: patient.category },
                { label: "Description",name:"description",  value: patient.description }
              ]}
              patientId={patient._id}
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
