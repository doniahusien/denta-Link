import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllExchanges = createAsyncThunk(
    "exchange/fetchAllExchanges",
    async (_, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;
            const response = await fetch("https://backend-production-4059.up.railway.app/api/exchanges", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            if (!response.ok) {
                const errorData = await response.json();
                console.log(errorData.message);
                
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const toggleFavorite = createAsyncThunk(
    "exchange/toggleFavorite",
    async (exchangeId, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;

            const response = await fetch("https://backend-production-4059.up.railway.app/api/exchanges/toggle", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ exchangeId }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to toggle favorite status");
            }

            const data = await response.json();
            return { exchangeId, message: data.message };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchExchangeByName = createAsyncThunk(
    "exchange/fetchExchangeByName",
    async (name, { rejectWithValue ,getState}) => {
        try {
            const state = getState();
            const token = state.auth.token;
            const response = await fetch(`https://backend-production-4059.up.railway.app/api/exchanges/search?query=${name}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
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

export const addExchange = createAsyncThunk(
    "exchange/addExchange",
    async (exchangeData, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;

            const response = await fetch("https://backend-production-4059.up.railway.app/api/exchanges/add", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: exchangeData,
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
