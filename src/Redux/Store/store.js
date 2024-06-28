import { configureStore } from "@reduxjs/toolkit";


//  Import All the Reducer Here;
import counterReducers from "../slices/counterSlice"


export const store = configureStore({
    reducer: {
        counter: counterReducers
    },
})



