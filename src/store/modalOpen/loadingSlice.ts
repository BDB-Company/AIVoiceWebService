import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ILoading} from "../../models/interfaces/ILoading.ts";

const initialState:ILoading = {
    load: false,
    isOpenInfo: false,
}

export const LoadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoading: (state, action:PayloadAction<boolean>) => {
            state.load = action.payload;
        },
        setOpenModalInfo: (state, action:PayloadAction<boolean>) => {
            state.isOpenInfo = action.payload;
        }
    }
})

export const {actions, reducer} = LoadingSlice;