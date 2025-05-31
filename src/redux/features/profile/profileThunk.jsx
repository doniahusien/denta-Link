import { createAsyncThunk } from "@reduxjs/toolkit";

//patients
export const fetchPatientCases = createAsyncThunk(
    "profile/fetchPatientCases",
    async (_, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;

            const response = await fetch("https://backend-production-0555.up.railway.app/api/profile/patients/my-patients", {
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
export const updatePatient = createAsyncThunk(
    "profile/updatePatient",
    async ({ patientId, formData }, { dispatch, rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;

            const response = await fetch(`https://backend-production-0555.up.railway.app/api/profile/patients/${patientId}`, {
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
export const deletePatientCase = createAsyncThunk(
    "profile/deletePatientCase",
    async (patientId, { dispatch, rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;

            const response = await fetch(`https://backend-production-0555.up.railway.app/api/profile/patients/${patientId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to delete patient case.");
            }

            dispatch(fetchPatientCases());
            return patientId;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);




//exchange 
export const fetchMyExchanges = createAsyncThunk(
    "profile/fetchMyExchanges",
    async (_, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;

            const response = await fetch("https://backend-production-0555.up.railway.app/api/profile/exchanges/my-exchanges", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("API Error:", errorData);
                throw new Error(errorData.message || "Failed to fetch exchange tools");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Fetch Error:", error.message);
            return rejectWithValue(error.message);
        }
    }
);

export const updateExchange = createAsyncThunk(
    "profile/updateExchange",
    async ({ exchangeId, formData }, { dispatch, rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;
            const response = await fetch(`https://backend-production-0555.up.railway.app/api/exchanges/update/${exchangeId}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                let errorData;
                try {
                    errorData = await response.json();
                } catch (e) {
                    console.error("Failed to parse error JSON:", e);
                    errorData = null;
                }
                console.error("Update Error response:", errorData);
                return rejectWithValue(errorData?.message || "Failed to update exchange.");
            }

            const data = await response.json();
            dispatch(fetchMyExchanges());
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteExchange = createAsyncThunk(
    "profile/deleteExchange",
    async (exchangeId, { dispatch, rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;

            const response = await fetch(`https://backend-production-0555.up.railway.app/api/profile/exchanges/${exchangeId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("DELETE error:", errorData);
                throw new Error(errorData.message || "Failed to delete exchange tool.");
            }

            dispatch(fetchMyExchanges());
            return exchangeId;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);




// Fetch user's tools
export const fetchMyTools = createAsyncThunk(
    "profile/fetchMyTools",
    async (_, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;
            const response = await fetch("https://backend-production-0555.up.railway.app/api/profile/my-tools", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("API Error:", errorData);
                throw new Error(errorData.message || "Failed to fetch my tools");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Fetch Error:", error.message);
            return rejectWithValue(error.message);
        }
    }
);

export const updateTool = createAsyncThunk(
    "profile/updateTool",
    async ({ toolId, formData }, { dispatch, rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;
            const response = await fetch(`https://backend-production-0555.up.railway.app/api/profile/${toolId}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Update Error:", errorData);
                return rejectWithValue(errorData.message || "Failed to update tool.");
            }

            const data = await response.json();
            dispatch(fetchMyTools());
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteTool = createAsyncThunk(
    "profile/deleteTool",
    async (toolId, { dispatch, rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;

            const response = await fetch(`https://backend-production-0555.up.railway.app/api/profile/tools/${toolId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to delete tool.");
            }

            dispatch(fetchMyTools());
            return toolId;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);




export const fetchFav = createAsyncThunk(
    "profile/fetchToolFav",
    async (_, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;

            const response = await fetch("https://backend-production-0555.up.railway.app/api/profile/favorites", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("API Error:", errorData);
                throw new Error(errorData.message || "Failed to fetch favorite tools");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Fetch Error:", error.message);
            return rejectWithValue(error.message);
        }
    }
);
export const fetchOrders = createAsyncThunk(
    "profile/fetchOrders",
    async (_, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const token = state.auth.token;

            const response = await fetch("https://backend-production-0555.up.railway.app/api/profile/orders/my-orders", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("API Error:", errorData);
                throw new Error(errorData.message || "Failed to fetch orders");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Fetch Error:", error.message);
            return rejectWithValue(error.message);
        }
    }
);