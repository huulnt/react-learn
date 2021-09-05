import { createSlice } from "@reduxjs/toolkit";

const initCounterState = {
    counter: 0,
    showCounter: true
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
});

export const counterActions = counterSlide.actions;
export default counterSlide.reducer;