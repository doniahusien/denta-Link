import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllPatients = createAsyncThunk(
    "patient/fetchAllPatients",
    async (_, { rejectWithValue ,getState}) => {
        try {
            const state = getState();
            const token = state.auth.token;
            const response = await fetch("http://localhost:3000/api/patient", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to fetch patients");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addPatient = createAsyncThunk(
    "patient/addPatient",
    async (patientData, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;

            const response = await fetch("http://localhost:3000/api/patient/add", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: patientData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to add patient");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);



export const fetchPatientsByTitle = createAsyncThunk(
    "patient/fetchPatientsByTitle",
    async (title, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:3000/api/patient/search?title=${title}`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to fetch patients by title");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const fetchPatientById = createAsyncThunk(
    "patient/fetchPatientById",
    async (id, { rejectWithValue,getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;
            const response = await fetch(`http://localhost:3000/api/patient/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to fetch patient by ID");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const toggleFavorite = createAsyncThunk(
    "patient/toggleFavorite",
    async (patientId, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;

            const response = await fetch("http://localhost:3000/api/patient/toggle", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ patientId }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to toggle favorite status");
            }

            const data = await response.json();
            return { patientId, message: data.message };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
