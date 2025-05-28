import { createSlice } from '@reduxjs/toolkit';
import {
    analyzeAIMessage,
    fetchAllChats,
    fetchChatMessages,
    deleteChat
} from './aiThunks';

const initialState = {
    chats: [],
    messages: [],
    currentChatId: null,
    geminiResponse: '',
    imageUrl: '',
    loading: false,
    error: null
};

const aiSlice = createSlice({
    name: 'aiTool',
    initialState,
    reducers: {
        clearAIState: (state) => {
            state.geminiResponse = '';
            state.imageUrl = '';
            state.messages = [];
            state.currentChatId = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        // Analyze Message/Image
        builder
            .addCase(analyzeAIMessage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(analyzeAIMessage.fulfilled, (state, action) => {
                state.loading = false;
                state.geminiResponse = action.payload.geminiResponse;
                state.imageUrl = action.payload.imageUrl;
                state.currentChatId = action.payload.chatId;
            })
            .addCase(analyzeAIMessage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        // Fetch All Chats
        builder
            .addCase(fetchAllChats.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllChats.fulfilled, (state, action) => {
                state.loading = false;
                state.chats = action.payload;
            })
            .addCase(fetchAllChats.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        // Fetch Chat Messages
        builder
            .addCase(fetchChatMessages.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChatMessages.fulfilled, (state, action) => {
                state.loading = false;
                state.messages = action.payload;
            })
            .addCase(fetchChatMessages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        // Delete Chat
        builder
            .addCase(deleteChat.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteChat.fulfilled, (state, action) => {
                state.loading = false;
                state.chats = state.chats.filter(chat => chat._id !== action.payload);
                if (state.currentChatId === action.payload) {
                    state.currentChatId = null;
                    state.messages = [];
                    state.geminiResponse = '';
                    state.imageUrl = '';
                }
            })
            .addCase(deleteChat.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { clearAIState } = aiSlice.actions;
export default aiSlice.reducer;
