import { createSlice } from '@reduxjs/toolkit';
import { analyzeAIMessage, fetchAllChats, fetchChatMessages, deleteChat } from './aiThunk';

const initialState = {
    chats: [],
    messages: [],
    currentChatId: null,
    geminiResponse: '',
    imageUrl: '',
    loadingChats: false,      
    loadingMessages: false,   
    error: null,             
    sending: false,         
    sendError: null         
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
            state.sending = false;
            state.sendError = null;
        }
    },
    extraReducers: (builder) => {
        // Analyze Message/Image (message send)
        builder
            .addCase(analyzeAIMessage.pending, (state) => {
                state.sending = true;
                state.sendError = null;
            })
            .addCase(analyzeAIMessage.fulfilled, (state, action) => {
                state.sending = false;
                state.geminiResponse = action.payload.geminiResponse;
                state.imageUrl = action.payload.imageUrl;
                state.currentChatId = action.payload.chatId;

                // Optionally append new message directly if available
                if (action.payload.message) {
                    state.messages.push(action.payload.message);
                }
            })
            .addCase(analyzeAIMessage.rejected, (state, action) => {
                state.sending = false;
                state.sendError = action.payload || 'Failed to send message';
            });

        // Fetch All Chats
        builder
            .addCase(fetchAllChats.pending, (state) => {
                state.loadingChats = true;
                state.error = null;
            })
            .addCase(fetchAllChats.fulfilled, (state, action) => {
                state.loadingChats = false;
                state.chats = action.payload;
            })
            .addCase(fetchAllChats.rejected, (state, action) => {
                state.loadingChats = false;
                state.error = action.payload;
            });

        // Fetch Chat Messages
        builder
            .addCase(fetchChatMessages.pending, (state) => {
                state.loadingMessages = true;
                state.error = null;
            })
            .addCase(fetchChatMessages.fulfilled, (state, action) => {
                state.loadingMessages = false;
                state.messages = action.payload;
            })
            .addCase(fetchChatMessages.rejected, (state, action) => {
                state.loadingMessages = false;
                state.error = action.payload;
            });

        // Delete Chat
        builder
            .addCase(deleteChat.pending, (state) => {
                state.loadingChats = true;
                state.error = null;
            })
            .addCase(deleteChat.fulfilled, (state, action) => {
                state.loadingChats = false;
                state.chats = state.chats.filter(chat => chat._id !== action.payload);
                if (state.currentChatId === action.payload) {
                    state.currentChatId = null;
                    state.messages = [];
                    state.geminiResponse = '';
                    state.imageUrl = '';
                }
            })
            .addCase(deleteChat.rejected, (state, action) => {
                state.loadingChats = false;
                state.error = action.payload;
            });
    }
});

export const { clearAIState } = aiSlice.actions;
export default aiSlice.reducer;
