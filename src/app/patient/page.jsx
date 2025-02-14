import React from 'react'
import HeaderSection from '@/components/UI/HeaderSection'
import SearchInput from '@/components/UI/SearchInput'
import PatientList from '@/components/patient/PatientList'
import ProtectedRoute from '@/components/ProtectedRoute'
const patientPage = () => {
  return (
    <>
      <ProtectedRoute>
        <div className="relative pb-5">
          <HeaderSection imgURL="/images/patient/patientHeader.svg" textDir="left" title="patient " subtitle="Let’s Find Appropriate" />
          <SearchInput href="/patient/add-patient" title="Add Patient" placeholder="search patient" />

        </div>
        <div className='pt-10'>
          <PatientList />
        </div>
      </ProtectedRoute>
    </>
  )
}

export default patientPage