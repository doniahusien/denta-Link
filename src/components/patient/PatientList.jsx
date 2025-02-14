"use client";
import React, { useEffect } from "react";
import PatientCard from "./PatientCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPatients } from "@/redux/features/patient/patientThunk";

const PatientList = () => {
    const { error, loading, patients, searchTerm } = useSelector((state) => state.patient);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!searchTerm) {
            dispatch(fetchAllPatients());
        }
    }, [dispatch, searchTerm]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="min-h-screen px-5 py-10">
            <h1 className="text-4xl my-12 sm:pl-10 md:pl-20">Patients</h1>
            <div className="flex flex-row flex-wrap justify-center gap-4 sm:px-20 md:px-0">
                {patients.length > 0 ? (
                    patients.map((patient, index) => (
                        <PatientCard
                            key={index}
                            image={patient.file}
                            name={patient.name}
                            id={patient._id}
                            location={patient.category} 
                            title={patient.title}
                            fav={patient.isFav}
                        />
                    ))
                ) : (
                    <p>No patients found.</p>
                )}
            </div>
        </div>
    );
};

export default PatientList;
