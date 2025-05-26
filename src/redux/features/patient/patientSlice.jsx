import { createSlice } from "@reduxjs/toolkit";
import { fetchLatestPatients, fetchAllPatients, addPatient, fetchPatientsByTitle, fetchPatientById, toggleFavorite } from "./patientThunk";

const initialState = {
    patients: [],
    latestpatient:[],
    patient: null,
    loading: false,
    error: null,
    success: false,
    searchTerm: "",
};

const patientSlice = createSlice({
    name: "patient",
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllPatients.pending, (state) => {
                state.error = null;
                state.loading = true;
                state.patients = [];
            })
            .addCase(fetchAllPatients.fulfilled, (state, action) => {
                state.patients = action.payload;
                state.error = null;
                state.loading = false;
            })
            .addCase(fetchAllPatients.rejected, (state, action) => {
                state.error = action.payload;
                state.patients = [];
                state.loading = false;
            })
            .addCase(addPatient.pending, (state) => {
                state.error = null;
                state.loading = true;
                state.success = false;
            })
            .addCase(addPatient.fulfilled, (state) => {
                state.error = null;
                state.loading = false;
                state.success = true;
            })
            .addCase(addPatient.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(fetchPatientsByTitle.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(fetchPatientsByTitle.fulfilled, (state, action) => {
                state.patients = action.payload;
                state.error = null;
                state.loading = false;
            })
            .addCase(fetchPatientsByTitle.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            }).addCase(fetchPatientById.pending, (state) => {
                state.error = null;
                state.loading = true;
                state.patient = null;
            })
            .addCase(fetchPatientById.fulfilled, (state, action) => {
                state.patient = action.payload;
                state.error = null;
                state.loading = false;
            })
            .addCase(fetchPatientById.rejected, (state, action) => {
                state.error = action.payload;
                state.patient = null;
                state.loading = false;
            })
            .addCase(toggleFavorite.fulfilled, (state, action) => {
                state.error = null;
                state.loading = false;
                state.success = "Done";
                console.log(state.success);
            })
            .addCase(toggleFavorite.rejected, (state, action) => {
                state.error = action.payload.message;
            }).addCase(fetchLatestPatients.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLatestPatients.fulfilled, (state, action) => {
                state.loading = false;
                state.latestpatient = action.payload;
                state.error = null;
            })
            .addCase(fetchLatestPatients.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


    },
});

export const { setSearchTerm } = patientSlice.actions;
export default patientSlice.reducer;
