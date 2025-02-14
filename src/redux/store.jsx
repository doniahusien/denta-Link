import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice';
import patientReducer from './features/patient/patientSlice';
const store = configureStore({
    reducer: {
        auth: authReducer,
        patient: patientReducer,
        
    }
});
export default store