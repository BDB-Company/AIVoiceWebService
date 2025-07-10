import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type IErrorData from "../../models/interfaces/IErrorData.ts";

const initialState:IErrorData = {
    error: ''
}

export const ErrorSlice = createSlice({
    name: "Error",
    initialState,
    reducers: {
        setError: (state, action:PayloadAction<string>) => {
            state.error = action.payload;
        }
    }
})

export const {actions, reducer} = ErrorSlice;