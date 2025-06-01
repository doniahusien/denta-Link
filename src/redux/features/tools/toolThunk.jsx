import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllTools = createAsyncThunk(
    "tool/fetchAllTools",
    async (_, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;
            const response = await fetch("https://backend-production-0555.up.railway.app/api/tools", {
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
    "tool/toggleFavorite",
    async (toolId, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;

            const response = await fetch("https://backend-production-0555.up.railway.app/api/tools/toggle", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ toolId }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to toggle favorite status");
            }

            const data = await response.json();
            return { toolId, message: data.message };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchToolByName = createAsyncThunk(
    "tool/fetchToolByName",
    async (tool, { rejectWithValue ,getState}) => {
        try {
            const state = getState();
            const token = state.auth.token;
            const response = await fetch(`https://backend-production-0555.up.railway.app/api/tools/search?query=${tool}`, {
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

export const addTool = createAsyncThunk(
    "tool/addTool",
    async (toolData, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;

            const response = await fetch("https://backend-production-0555.up.railway.app/api/tools/add", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: toolData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error response:", errorData);
                throw new Error(errorData.message || "Failed to add tool");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            // Log the error to debug further
            console.error("Error in addTool:", error.message);
            return rejectWithValue(error.message);
        }
    }
);

export const fetchToolById = createAsyncThunk(
    "tool/fetchToolById",
    async (id, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;
            const response = await fetch(`https://backend-production-0555.up.railway.app/api/tools/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to fetch tool by ID");
            }
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);