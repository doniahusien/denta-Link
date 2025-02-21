import { createSlice } from "@reduxjs/toolkit";
import { fetchPatientCases, fetchPatientFav,updatePatient ,fetchExchangeFav} from "@/redux/features/profile/profileThunk";

const initialState = {
    favouritePatients: [],
    favouriteExchanges:[],
    mypatients: [],
    myExchanges:[],
    loading: false,
    error: null,
    success: false,
    msgUpdate:""
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
        }).addCase(updatePatient.pending, (state) => {
            state.loading = true;
        }).addCase(updatePatient.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload.message == "Patient updated successfully") {
                state.msgUpdate="Patient updated successfully"
            }
        })
        .addCase(fetchExchangeFav.pending, (state) => {
            state.error = null;
            state.loading = true;
        })
        .addCase(fetchExchangeFav.fulfilled, (state, action) => {
            state.favouriteExchanges = action.payload; 
            state.error = null;
            state.loading = false;
        })
        .addCase(fetchExchangeFav.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
    },
});

export default profileSlice.reducer;
