import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice';
import patientReducer from './features/patient/patientSlice';
import profileReducer from './features/profile/profileSlice'
import exchangeReducer from './features/exchange/exchangeSlice';
const store = configureStore({
    reducer: {
        auth: authReducer,
        patient: patientReducer,
        profile: profileReducer,
        exchange:exchangeReducer,
        
    }
});
export default store