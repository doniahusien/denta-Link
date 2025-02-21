import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPatientCases = createAsyncThunk(
    "profile/fetchPatientCases",
    async (_, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;

            const response = await fetch("http://localhost:3000/api/profile/my-patients", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("API Error:", errorData);
                throw new Error(errorData.message || "Failed to fetch patient cases");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Fetch Error:", error.message);
            return rejectWithValue(error.message);
        }
    }
);

export const fetchPatientFav = createAsyncThunk(
    "profile/fetchPatientFav",
    async (_, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;
            const response = await fetch("http://localhost:3000/api/profile/favorites", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("API Error:", errorData);
                throw new Error(errorData.message || "Failed to fetch patient favourits");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Fetch Error:", error.message);
            return rejectWithValue(error.message);
        }
    }
);


export const updatePatient = createAsyncThunk(
    "profile/updatePatient",
    async ({ patientId, formData }, { dispatch, rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;

            const response = await fetch(`http://localhost:3000/api/profile/${patientId}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to update patient.");
            }

            const data = await response.json();
            dispatch(fetchPatientCases()); 
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);