import { configureStore, createSlice } from "@reduxjs/toolkit";

const initCounterState = {
    counter: 0,
    showCounter: true
}

const initCAuthState = {
    isAuthenticated: false
}

const counterSlide = createSlice({
    name: 'counter',
    initialState: initCounterState,
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        },
        increase: (state, action) => {
            state.counter = state.counter + action.payload.amount
        },
        toggleCounter: (state) =>{
            state.showCounter = !state.showCounter;
        }
    }
})

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
})

const store = configureStore({
    reducer: {
        counters: counterSlide.reducer,
        auth: authSlide.reducer
    }
});

export const counterActions = counterSlide.actions;
export const authActions = authSlide.actions;

export default store;