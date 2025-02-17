'use client';
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatientById } from '@/redux/features/patient/patientThunk';

import DetailImage from '@/components/UI/DetailImage';
import DetailInfo from '@/components/UI/DetailInfo';
import CaseDetails from '@/components/patient/CaseDetails';
import ProtectedRoute from '@/components/ProtectedRoute';
const PatientDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { patient, loading, error } = useSelector((state) => state.patient);

  useEffect(() => {
    if (id) {
      dispatch(fetchPatientById(id));
    } else {
      console.error('Patient ID is undefined');
    }
  }, [dispatch, id]);


  if (loading) return <p>Loading patient details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!patient) return <p>No patient found.</p>;

  return (
    <ProtectedRoute>
      <div className="max-w-5xl mx-auto py-40 space-y-5">
        <h2 className="text-3xl font-semibold border-b pb-2">Patient details</h2>

        {/* Patient Details (Row 1) */}
        <div className="flex flex-col lg:flex-row gap-10 p-8 bg-white shadow-lg rounded-lg">
          <DetailImage image={patient.file[0]} alt={patient.name} fav={patient.isFav} patientId={id} />
          <DetailInfo
            patientname={patient.name}
            publisher={patient.createdBy.name}
            age={patient.age}
            location={patient.title}
            gender={patient.gender}
          />
        </div>

        {/* Case Details (Row 2) */}
        <CaseDetails patient={patient} />
      </div>
    </ProtectedRoute>
  );
};

export default PatientDetails;
