import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        username: null,
        token: null
    },
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
            state.token = action.payload.token;
        },
        logout: (state, action) => {
            state.username = null;
            state.token = null;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice;