import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducers/auth.reducer";

export default configureStore({
    reducer: {
        auth: authSlice.reducer
    }
});