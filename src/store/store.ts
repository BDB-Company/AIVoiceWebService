import {configureStore} from '@reduxjs/toolkit';
import {reducer as audioSetReducer} from '../store/audioSet/audioSetSlice.ts'
import {reducer as DropdownReducer} from "./dropdown/toggleDropdownSlice.ts";
import {reducer as errorReducer} from "./error/errorSlice.ts";

export const store = configureStore({
    reducer: {
        audioSet: audioSetReducer,
        dropdown: DropdownReducer,
        error:errorReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
