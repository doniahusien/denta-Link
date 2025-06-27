import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const analyzeAIMessage = createAsyncThunk(
    'aiTool/analyzeAIMessage',
    async ({ message, image, chatId }, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const token = auth.token;

            const formData = new FormData();
            if (message) formData.append('message', message);
            if (image) formData.append('image', image);
            if (chatId) formData.append('chatId', chatId);

            const response = await fetch('https://backend-production-4059.up.railway.app/api/ai-tool/analyze', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error analyzing message');
            }

            const data = await response.json();
            return data.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchAllChats = createAsyncThunk(
    'aiTool/fetchAllChats',
    async (_, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const token = auth.token;

            const response = await fetch('https://backend-production-4059.up.railway.app/api/ai-tool/chats', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error fetching chats');
            }

            const data = await response.json();
            return data.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchChatMessages = createAsyncThunk(
    'aiTool/fetchChatMessages',
    async (chatId, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const token = auth.token;

            const response = await fetch(`https://backend-production-4059.up.railway.app/api/ai-tool/chats/${chatId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error fetching chat messages');
            }

            const data = await response.json();
            return data.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteChat = createAsyncThunk(
    'aiTool/deleteChat',
    async (chatId, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const token = auth.token;

            const response = await fetch(`https://backend-production-4059.up.railway.app/api/ai-tool/chats/${chatId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error deleting chat');
            }

            return chatId;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
