import { createSlice } from "@reduxjs/toolkit";

const initCAuthState = {
    isAuthenticated: false
}

const authSlide = createSlice({
    name: 'authentication',
    initialState: initCAuthState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },
        logOut: (state) => {
            state.isAuthenticated = false;
        }
    }
});


export const authActions = authSlide.actions;
export default authSlide.reducer;
