import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPatientCases = createAsyncThunk(
    "profile/fetchPatientCases",
    async (_, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token; 

            const response = await fetch("http://localhost:3000/api/patient/my-patients", {
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

            const response = await fetch("http://localhost:3000/api/patient/favorites", {
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
