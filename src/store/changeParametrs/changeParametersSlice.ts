import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type IChange from "../../models/interfaces/IChange.ts";

const initialState:IChange = {
    change: false,
    changeFormat: false,
}

export const changeParametersSlice = createSlice({
    name: "changeParameters",
    initialState,
    reducers: {
        setChange: (state, action:PayloadAction<boolean>) => {
            state.change = action.payload;
        },
        setChangeFormat: (state, action:PayloadAction<boolean>) => {
            state.changeFormat = action.payload;
        }
    }
})

export const {actions, reducer} = changeParametersSlice;