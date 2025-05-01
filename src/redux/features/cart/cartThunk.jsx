import { createAsyncThunk } from "@reduxjs/toolkit";
export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (toolId, { getState, rejectWithValue }) => {
        try {
            const state = getState();
            const token = state.auth.token;

            const response = await fetch('http://localhost:3000/api/carts/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ toolId }),
            });

            if (!response.ok) {
                throw new Error('Failed to add item to cart');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const getCart = createAsyncThunk(
    'cart/getCart',
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = getState();
            const token = state.auth.token;

            const response = await fetch('http://localhost:3000/api/carts/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to add item to cart');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const incrementCartItem = createAsyncThunk(
    'cart/incrementCartItem',
    async (cartItemId, { getState, rejectWithValue }) => {
        try {
            const token = getState().auth.token;

            const response = await fetch(`http://localhost:3000/api/carts/increment/${cartItemId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to increment cart item');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const decrementCartItem = createAsyncThunk(
    'cart/decrementCartItem',
    async (cartItemId, { getState, rejectWithValue }) => {
        try {
            const token = getState().auth.token;

            const response = await fetch(`http://localhost:3000/api/carts/decrement/${cartItemId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to decrement cart item');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getSuggestedItems = createAsyncThunk(
    'cart/getSuggestedItems',
    async (_, { getState, rejectWithValue }) => {
        try {
            const token = getState().auth.token;

            const response = await fetch('http://localhost:3000/api/carts/suggested', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch suggested items');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const removeCartItem = createAsyncThunk(
    'cart/removeCartItem',
    async (cartItemId, { getState, rejectWithValue }) => {
        try {
            const token = getState().auth.token;

            const response = await fetch(`http://localhost:3000/api/carts/remove/${cartItemId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to remove cart item');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getOrderSummary = createAsyncThunk(
    'order/getOrderSummary',
    async (_, { getState, rejectWithValue }) => {
        try {
            const token = getState().auth.token;

            const response = await fetch('http://localhost:3000/api/orders/order-summary', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch order summary');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const getMyOrders = createAsyncThunk(
    'order/getMyOrders',
    async (_, { getState, rejectWithValue }) => {
        try {
            const token = getState().auth.token;

            const response = await fetch('http://localhost:3000/api/orders/my-orders', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch my orders');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);