"use client";

import React from 'react'
import LeftImg from '@/components/UI/LeftImg'
import PatientForm from '@/components/patient/PatientForm'
import imgsrc from '../../../../public/images/patient/doctor.svg'
import ProtectedRoute from '@/components/ProtectedRoute'
const addPatientPage = () => {
  return (
    <ProtectedRoute>
      <div className="flex flex-col md:flex-row py-10 shadow-lg sm:w-full md:w-full lg:w-3/4 mx-auto bg-blue-50 my-40">
        <LeftImg imgSrc={imgsrc} header="Let’s add the patient you found" />
        <PatientForm />
      </div>
    </ProtectedRoute>
  )
}

export default addPatientPage