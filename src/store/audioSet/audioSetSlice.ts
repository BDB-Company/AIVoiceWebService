import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IAudioSetState} from "../../models/interfaces/IAudioSetState.ts";

const initialState: IAudioSetState = {
    lg:'Русский',
    person:'Мужчина',
    speed:'1',
    volume:'10',
    format:'mp3',
}

export const audioSetSlice = createSlice({
    name: 'audioSet',
    initialState,
    reducers: {
        updateLg(state, action: PayloadAction<string>) { // {payload:lg}
            state.lg = action.payload
        },
        updatePerson(state, action: PayloadAction<string>) { // {payload:person}
            state.person = action.payload
        },
        updateSpeed(state, action: PayloadAction<string>) {
            state.speed = action.payload
        },
        updateVolume(state, action: PayloadAction<string>) {
            state.volume = action.payload
        },
        updateFormat(state, action: PayloadAction<string>) {
            state.format = action.payload
        }
    },
})

export const {actions, reducer} = audioSetSlice;