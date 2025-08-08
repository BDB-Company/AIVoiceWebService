import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IAudioSetState} from "../../models/interfaces/IAudioSetState.ts";

const initialState: IAudioSetState = {
    language:'ru',
    gender:'male',
    volume:'0',
    speed:'1',
    format:'mp3',
    text:'',
}

export const audioSetSlice = createSlice({
    name: 'audioSet',
    initialState,
    reducers: {
        updateLg(state, action: PayloadAction<string>) { // {payload:lg}
            state.language = action.payload
        },
        updatePerson(state, action: PayloadAction<string>) { // {payload:person}
            state.gender = action.payload
        },
        updateSpeed(state, action: PayloadAction<string>) {
            state.speed = action.payload
        },
        updateVolume(state, action: PayloadAction<string>) {
            state.volume = action.payload
        },
        updateFormat(state, action: PayloadAction<string>) {
            state.format = action.payload
        },
        updateText(state, action: PayloadAction<string>) {
            state.text = action.payload
        }
    },
})

export const {actions, reducer} = audioSetSlice;