import  {createSlice} from "@reduxjs/toolkit";

const initalState = { count : 10};

export const counterSlice = createSlice({
    name:"counterStore",
    initialState: initalState,
    reducers:{
        increment: (state) =>{
            state.count += 1;
        },

        decrement: (state) => {
            if(state.count > 0)
            state.count -= 1;
        },

        decrementMultiplier : (state,action) =>{
            state.count -= Number(action.payload);
        },


     incrementMultiplier : (state,action) =>{
            state.count += Number(action.payload);
        }
    }
})

export const {increment,decrement,decrementMultiplier,incrementMultiplier} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;