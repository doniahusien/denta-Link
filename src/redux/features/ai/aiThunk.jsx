import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const analyzeAIMessage = createAsyncThunk(
    'aiTool/analyzeAIMessage',
    async ({ message, image, chatId }, thunkAPI) => {
        try {
            const formData = new FormData();
            if (message) formData.append('message', message);
            if (image) formData.append('image', image);
            if (chatId) formData.append('chatId', chatId);

            const response = await axios.post('/ai-tool/analyze', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            return response.data.data; 
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || 'Error analyzing message'
            );
        }
    }
);

export const fetchAllChats = createAsyncThunk(
    'aiTool/fetchAllChats',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/ai-tool/chats');
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || 'Error fetching chats'
            );
        }
    }
);

export const fetchChatMessages = createAsyncThunk(
    'aiTool/fetchChatMessages',
    async (chatId, thunkAPI) => {
        try {
            const response = await axios.get(`/ai-tool/chats/${chatId}`);
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || 'Error fetching chat messages'
            );
        }
    }
);

export const deleteChat = createAsyncThunk(
    'aiTool/deleteChat',
    async (chatId, thunkAPI) => {
        try {
            await axios.delete(`/ai-tool/chats/${chatId}`);
            return chatId;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || 'Error deleting chat'
            );
        }
    }
);
