import { createSlice } from "@reduxjs/toolkit";

const initailState = {
    value: 0,
    amount: 1
}

export const counterSlice = createSlice({
    initialState: initailState,
    name: "counterSlice",
    reducers: {
        increament: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        increamentByAmout: (state, action) => {
            const { payload } = action;
            state.value = +state.value + +payload
        },
        handleAmount: (state, action) => {
            const { payload } = action
            state.amount = payload
        }
    }
})


export const { decrement, increament, increamentByAmout, handleAmount } = counterSlice.actions;

export default counterSlice.reducer;