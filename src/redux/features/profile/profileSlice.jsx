import { createSlice } from "@reduxjs/toolkit";
import { fetchPatientCases, fetchPatientFav } from "@/redux/features/profile/profileThunk";

const initialState = {
    favouritePatients: [],
    mypatients: [],
    loading: false,
    error: null,
    success: false,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPatientCases.pending, (state) => {
            state.error = null;
            state.loading = true;
        }).addCase(fetchPatientCases.fulfilled, (state, action) => {
            state.mypatients = action.payload.data; 
            state.error = null;
            state.loading = false;
        })
        .addCase(fetchPatientCases.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(fetchPatientFav.fulfilled, (state, action) => {
            state.favouritePatients = action.payload; 
            state.error = null;
            state.loading = false;
        })
        .addCase(fetchPatientFav.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
    },
});

export default profileSlice.reducer;
