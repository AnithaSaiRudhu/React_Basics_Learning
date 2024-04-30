import {configureStore} from "@reduxjs/toolkit";
import { counterReducer } from "./Slice/counterSlice";
import {destinationReducer} from "./Slice/destinationSlice"

export const store = configureStore({
    reducer:{
        counterStore:counterReducer,
        destinationStore:destinationReducer
        // fill with later approach
    }
});

console.log(store.getState());

