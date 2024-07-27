import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterReducer";

export let store=configureStore(
    {
        reducer:{
            counterSlice:counterReducer
        }
    }
)