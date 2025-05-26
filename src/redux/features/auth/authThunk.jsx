import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, thunkAPI) => {
        try {
            const response = await fetch("https://backend-production-0555.up.railway.app/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error("Incorrect password or email");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const signupUser = createAsyncThunk(
    "auth/signupUser",
    async (formData, thunkAPI) => {
        try {
            const response = await fetch(
                "https://backend-production-0555.up.railway.app/api/users/signup",
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (!response.ok) {
                const data = await response.json();
                const fieldErrors = {};
                if (data.errors) {
                    data.errors.forEach((error) => {
                        if (!fieldErrors[error.path]) {
                            fieldErrors[error.path] = error.msg;
                        }
                    });
                }
                return thunkAPI.rejectWithValue(fieldErrors);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Signup Error:", error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async (token, thunkAPI) => {
        try {
            const response = await fetch("https://backend-production-0555.up.railway.app/api/users/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to logout");
            }

            return "Logout successful";
        } catch (error) {
            console.error("Logout error:", error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const forgetPassword = createAsyncThunk(
    "auth/forgetPassword",
    async ({ email }, thunkAPI) => {
        try {
            const response = await fetch("https://backend-production-0555.up.railway.app/api/users/forget-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || "Failed to send reset code.");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const verifyOtp = createAsyncThunk(
    "auth/verifyOtp",
    async ({ email, OTP }, thunkAPI) => {
        try {
            const response = await fetch("https://backend-production-0555.up.railway.app/api/users/verify-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, OTP }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || "Invalid code.");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const resetPassword = createAsyncThunk(
    "auth/resetPassword",
    async ({ email, newPassword }, thunkAPI) => {
        try {
            const response = await fetch("https://backend-production-0555.up.railway.app/api/users/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, newPassword }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || "Failed to reset password.");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

