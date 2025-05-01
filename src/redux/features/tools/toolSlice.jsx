import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTools, fetchToolByName, toggleFavorite, addTool, fetchToolById } from "./toolThunk";
const initialState = {
    tools: [],
    tool: null,
    loading: false,
    error: null,
    success: false,
    searchTool: "",
}
const toolSlice = createSlice({
    name: "tool",
    initialState,
    reducers: {
        setSearchTool: (state, action) => {
            state.searchTool = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllTools.pending, (state) => {
            state.error = null;
            state.loading = true;
            state.tools = [];
        }).addCase(fetchAllTools.fulfilled, (state, action) => {
            state.error = null;
            state.loading = false;
            state.tools = action.payload;
        }).addCase(fetchAllTools.rejected, (state, action) => {
            state.error = action.payload;
            state.tools = [];
            state.loading = false;
        }).addCase(toggleFavorite.fulfilled, (state, action) => {
            state.error = null;
            state.loading = false;
            state.success = "Done";
        })
            .addCase(toggleFavorite.rejected, (state, action) => {
                state.error = action.payload.message;
            })
            .addCase(fetchToolByName.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(fetchToolByName.fulfilled, (state, action) => {
                state.tools = action.payload;
                state.error = null;
                state.loading = false;
            })
            .addCase(fetchToolByName.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            }).addCase(addTool.pending, (state) => {
                state.error = null;
                state.loading = true;
                state.success = false;
            })
            .addCase(addTool.fulfilled, (state) => {
                state.error = null;
                state.loading = false;
                state.success = true;
            })
            .addCase(addTool.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(fetchToolById.fulfilled, (state, action) => {
                state.tool = action.payload;
                state.error = null;
                state.loading = false;
                console.log(state.tool);

            })
            .addCase(fetchToolById.pending, (state) => {
                state.error = null;
                state.loading = true;
                state.tool = null;
            })
            .addCase(fetchToolById.rejected, (state, action) => {
                state.error = action.payload;
                state.tool = null;
                state.loading = true;
            })
    }
})
export const { setSearchTool } = toolSlice.actions;
export default toolSlice.reducer;