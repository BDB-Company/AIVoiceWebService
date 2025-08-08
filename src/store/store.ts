import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {reducer as audioSetReducer} from '../store/audioSet/audioSetSlice.ts'
import {reducer as DropdownReducer} from "./dropdown/toggleDropdownSlice.ts";
import {reducer as errorReducer} from "./error/errorSlice.ts";
import {reducer as LoadingReducer} from "./modalOpen/loadingSlice.ts";
import {reducer as changeParametersReducer} from "./changeParametrs/changeParametersSlice.ts";
import {api} from "../api/api.ts";

const reducers = combineReducers({
    audioSet: audioSetReducer,
    dropdown: DropdownReducer,
    error:errorReducer,
    loading:LoadingReducer,
    changeParameters: changeParametersReducer,
    [api.reducerPath]: api.reducer,
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }).concat(api.middleware),

})

export type RootState = ReturnType<typeof store.getState>;
