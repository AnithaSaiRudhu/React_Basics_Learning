import  {createSlice} from "@reduxjs/toolkit";

const initalState = () =>{
    return{
        destinations :[
            {
                name: "Hong Kong",
                days:7,
                fact:"World's longest covered escalator"
            },

            {
                name: "Japan",
                days:10,
                fact:"Japan is mostly mountains",
            },

            {
                name: "New Zealand",
                days:14,
                fact:"Last Country in the world to be inhabitated by humans",
            }
        ]
    }
};

export const destinationSlice = createSlice({
    name : "destinationStore",
    initialState : initalState,
    reducers:{}
})

export const destinationReducer = destinationSlice.reducer;