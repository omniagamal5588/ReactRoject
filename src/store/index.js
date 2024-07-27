import { configureStore } from "@reduxjs/toolkit";
import {counterReducer,counterAction} from './counterSlice'

export const storeToolKit=configureStore({
    reducer:{
        slice:counterReducer,
        action:counterAction
    }
})