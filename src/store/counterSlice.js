import { createSlice } from "@reduxjs/toolkit";

 export const counterSlice=createSlice({
    name:"count",
    initialState:{count:0},
    reducers:{
        increase:(state,action)=>{
            state.count+=action.payload;
           
        },
        decrease:(state,action)=>{
          state.count-=action.payload;

        }
    }
});

export const counterReducer=counterSlice.reducer;
export const counterAction=counterSlice.actions;