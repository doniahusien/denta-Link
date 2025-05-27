import { createSlice } from "@reduxjs/toolkit";
import {fetchOrders, fetchMyTools, fetchFav, fetchPatientCases, updatePatient, fetchMyExchanges, updateExchange, updateTool, deleteExchange, deletePatientCase, deleteTool } from "@/redux/features/profile/profileThunk";

const initialState = {
    favouritePatients: [],
    favouriteExchanges: [],
    favouriteTools: [],
    mypatients: [],
    myExchanges: [],
    myTools: [],
    myOrders: [],
    loading: false,
    error: null,
    success: false,
    msgUpdate: ""
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        clearUpdateMessage: (state) => {
            state.msgUpdate = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPatientCases.pending, (state) => {
            state.error = null;
            state.loading = true;
        }).addCase(fetchPatientCases.fulfilled, (state, action) => {
            state.mypatients = action.payload;
            state.error = null;
            state.loading = false;
        })
            .addCase(fetchPatientCases.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

            .addCase(updatePatient.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.message == "Patient updated successfully") {
                    state.msgUpdate = "Patient updated successfully"
                }
            })
            .addCase(fetchMyExchanges.pending, (state) => {
                state.error = null;
                state.loading = true;
            }).addCase(fetchMyExchanges.fulfilled, (state, action) => {
                state.myExchanges = action.payload;
                state.error = null;
                state.loading = false;
            })
            .addCase(fetchMyExchanges.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            }).addCase(updateExchange.pending, (state) => {
                state.loading = true;
            }).addCase(updateExchange.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.message == "Exchange updated successfully!") {
                    state.msgUpdate = "Exchange updated successfully!"
                }
            })

        builder.addCase(fetchMyTools.pending, (state) => {
            state.error = null;
            state.loading = true;
        }).addCase(fetchMyTools.fulfilled, (state, action) => {
            state.myTools = action.payload;
            state.error = null;
            state.loading = false;
        })
            .addCase(fetchMyTools.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

            .addCase(updateTool.pending, (state) => {
                state.loading = true;
            }).addCase(updateTool.fulfilled, (state, action) => {
                state.loading = false;
                state.msgUpdate = "Tool updated successfully!"

            })
            .addCase(fetchFav.pending, (state) => {
                state.error = null;
                state.loading = true;
            }).addCase(fetchFav.fulfilled, (state, action) => {
                state.favouritePatients = action.payload.favoritePatients;
                state.favouriteExchanges = action.payload.favoriteExchanges;
                state.favouriteTools = action.payload.favoriteTools;
                state.error = null;
                state.loading = false;
            })
            .addCase(fetchFav.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(deletePatientCase.fulfilled, (state, action) => {
                state.mypatients = state.mypatients.filter(patient => patient.id !== action.payload);
                state.loading = false;
            })
            .addCase(deletePatientCase.pending, (state) => {
                state.loading = true;
            })
            .addCase(deletePatientCase.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(deleteExchange.fulfilled, (state, action) => {
                state.myExchanges = state.myExchanges.filter(exchange => exchange._id !== action.payload);
            })
            .addCase(deleteExchange.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(deleteTool.fulfilled, (state, action) => {
                state.myTools = state.myTools.filter(tool => tool.id !== action.payload);
                state.loading = false;
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.myOrders = action.payload.data;
                state.error = null;
            })
            .addCase(fetchOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export const { clearUpdateMessage } = profileSlice.actions;
export default profileSlice.reducer;
