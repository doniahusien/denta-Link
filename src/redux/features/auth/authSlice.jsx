import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signupUser, resetPassword, forgetPassword, verifyOtp, logoutUser } from "./authThunk";


const initialState = {
    token: null,
    loading: false,
    error: {},
    loginError: null,
    signupSuccess: null,
    successMsg: null,
    forgetError: null,
    verifyError: null,
    resetError: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.loginError = null;
        })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.accessToken;
                if (typeof window !== 'undefined') {
                    localStorage.setItem('token', action.payload.accessToken);
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loginError = action.payload;
                state.loading = false;
            })

            //signup
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
                state.error = {};
                state.signupSuccess = null;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false;
                state.signupSuccess = action.payload.message;
                state.token = action.payload.token;
                if (typeof window !== 'undefined') {
                    localStorage.setItem('token', action.payload.accessToken);
                }
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })


            //logout
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false;
                state.token = null;
                if (typeof window !== 'undefined') {
                    localStorage.removeItem('token');
                }
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //forget
            .addCase(forgetPassword.pending, (state) => {
                state.loading = true;
                state.forgetError = null;
                state.successMsg = null;
            })
            .addCase(forgetPassword.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.message === "Reset code sent successfully") {
                    state.successMsg = "Reset code sent successfully.";
                } else if (action.payload.message === "Student not found") {
                    state.forgetError = "Student not found. Please check the email.";
                } else {
                    state.forgetError = "Unexpected response.";
                }
            })
            .addCase(forgetPassword.rejected, (state, action) => {
                state.loading = false;
                state.successMsg = null;
                state.forgetError = action.payload.message || "An error occurred.";
            })

            //otp verify 
            .addCase(verifyOtp.pending, (state) => {
                state.loading = true;
                state.verifyError = null;
            })
            .addCase(verifyOtp.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.message == "OTP verified successfully") {
                    state.successMsg = action.payload.message;
                } else if (action.payload.message == "Invalid or expired OTP") {
                    state.verifyError = action.payload.message;
                }

            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.loading = false;
                state.verifyError = action.payload.message;
            })

            //reset reducers
            .addCase(resetPassword.pending, (state) => {
                state.loading = true;
                state.resetError = null;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.accessToken;
                state.successMsg = action.payload.message;
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.loading = false;
                state.resetError = action.payload;
            });
    }
})

export const { setToken } = authSlice.actions;
export default authSlice.reducer;