import { createSlice } from "@reduxjs/toolkit";
import { fetchAllExchanges, toggleFavorite, fetchExchangeByName, addExchange } from "./exchangeThunk";
const initialState = {
    exchangeTools: [],
    loading: false,
    error: null,
    success: false,
    searchTool: "",
}
const exchangeSlice = createSlice({
    name: "exchange",
    initialState,
    reducers: {
        setSearchTool: (state, action) => {
            state.searchTool = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllExchanges.pending, (state) => {
            state.error = null;
            state.loading = true;
            state.exchangeTools = [];
        }).addCase(fetchAllExchanges.fulfilled, (state, action) => {
            state.error = null;
            state.loading = false;
            state.exchangeTools = action.payload;
        }).addCase(fetchAllExchanges.rejected, (state, action) => {
            state.error = action.payload;
            state.exchangeTools = [];
            state.loading = false;
        }).addCase(toggleFavorite.fulfilled, (state, action) => {
            state.error = null;
            state.loading = false;
            state.success = "Done";
            console.log(state.success);
        })
            .addCase(toggleFavorite.rejected, (state, action) => {
                state.error = action.payload.message;
            })
            .addCase(fetchExchangeByName.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(fetchExchangeByName.fulfilled, (state, action) => {
                state.exchangeTools = action.payload;
                state.error = null;
                state.loading = false;
            })
            .addCase(fetchExchangeByName.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            }).addCase(addExchange.pending, (state) => {
                state.error = null;
                state.loading = true;
                state.success = false;
            })
            .addCase(addExchange.fulfilled, (state) => {
                state.error = null;
                state.loading = false;
                state.success = true;
            })
            .addCase(addExchange.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
    }
})
export const { setSearchTool } = exchangeSlice.actions;
export default exchangeSlice.reducer;