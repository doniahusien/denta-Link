"use client";
import React, { useEffect } from "react";
import PatientCard from "./PatientCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPatients } from "@/redux/features/patient/patientThunk";
import Loader from "../UI/Loader/Loader";

const PatientList = () => {
    const { error, loading, patients, searchTerm } = useSelector((state) => state.patient);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!searchTerm) {
            dispatch(fetchAllPatients());
        }
    }, [dispatch, searchTerm]);

    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <div className="min-h-screen px-5 py-10">
            <h1 className="text-4xl my-12 sm:pl-10 md:pl-20">Patients</h1>
            <div className="flex flex-row flex-wrap justify-center gap-4 sm:px-20 md:px-0">
                {loading ? (
                    <Loader />
                ) : patients.length > 0 ? (
                    patients.map((patient) => (
                        <PatientCard
                            key={patient._id} 
                            image={patient.images}
                            name={patient.name}
                            id={patient._id}
                            location={patient.location} 
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
