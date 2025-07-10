import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type IDropdownState from "../../models/interfaces/IDropdownState.ts";

const initialState: IDropdownState = {
    activeId: 0,
}



export const DropdownSlice = createSlice({
    name: 'Dropdown',
    initialState,
    reducers: {
        toggleDropdown(state, action: PayloadAction<number>) {
            if (action.payload === 0){
                state.activeId = 0
                return
            }

            if(state.activeId === action.payload){
                state.activeId = 0;
            }
            else {
                state.activeId = action.payload;
            }
        },
    },
})

export const {actions, reducer} = DropdownSlice;