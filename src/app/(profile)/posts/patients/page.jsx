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

  useEffect(() => {
    console.log("Redux State (mypatients):", mypatients);
  }, [mypatients]);

  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <ProtectedRoute>
      <ContentBox title="Patients">
        <div className="flex flex-col ">
          <Card
            type="patient"
            name="John Doe"
            imageSrc="/images/patient/patient.svg"
            additionalFields={[
              { label: "Age", name: "age", value: "25" },
              { label: "Title", value: "Econi" },
              { label: "Gender", name: "gender", value: "Male" },
              { label: "Phone Number", name: "phone", value: "+123456789" },
              { label: "Category",name: "category", value: "gyii" },
              { label: "Location", name: "location",value: "Mansoura" },
              { label: "Description",name: "description", value: "jfesdvxc efsdvbjkxn ihj" }
            ]}
            patientId="123"
            onEdit={(updatedData) => console.log("Updated Patient:", updatedData)}
          />

          {/*mypatients.length > 0 ? (mypatients.map((patient) => (
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
          </>)*/}
        </div>
      </ContentBox>
    </ProtectedRoute>
  );
}
