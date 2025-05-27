
import { createSlice } from '@reduxjs/toolkit';
import { addToCart, getMyOrders, getOrderSummary, getCart, removeCartItem, getSuggestedItems } from './cartThunk';
const initialState = {
    items: [],
    productTotal: 0,
    deliveryFee: 0,
    discount: 0,
    total: 0,
    totalItems: 0,
    loading: false,
    error: null,
    success: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.loading = false,
                state.success = true;
            state.error = null;
        })
            .addCase(addToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.items;
                state.totalItems = 2;
                state.total = action.payload.totalPrice;
                state.error = null;
            })
            .addCase(getCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(removeCartItem.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(removeCartItem.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(removeCartItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            .addCase(getOrderSummary.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getOrderSummary.fulfilled, (state, action) => {
                state.loading = false;
                state.productTotal = action.payload.productTotal;
                state.deliveryFee = action.payload.deliveryFee;
                state.discount = action.payload.discount;
                state.total = action.payload.total;
            })
            .addCase(getOrderSummary.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            
    }
});
export default cartSlice.reducer;