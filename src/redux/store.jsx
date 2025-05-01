import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice';
import patientReducer from './features/patient/patientSlice';
import profileReducer from './features/profile/profileSlice'
import exchangeReducer from './features/exchange/exchangeSlice';
import cartReducer from './features/cart/cartSlice';
import toolReducer from './features/tools/toolSlice';
const store = configureStore({
    reducer: {
        auth: authReducer,
        patient: patientReducer,
        profile: profileReducer,
        exchange:exchangeReducer,
        tool:toolReducer,
        cart:cartReducer
    }
});
export default store