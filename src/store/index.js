import { configureStore } from "@reduxjs/toolkit";
import authSlide from './auth'
import counterSlide from './counter'

const store = configureStore({
    reducer: {
        counters: counterSlide,
        auth: authSlide
    }
});


export default store;