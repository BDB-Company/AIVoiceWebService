import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {actions as audioSetActions} from "../store/audioSet/audioSetSlice.ts";
import {actions as toggleDropdownActions} from "../store/dropdown/toggleDropdownSlice.ts";
import {actions as errorActions} from "../store/error/errorSlice.ts";

const rootActions = {
    ...audioSetActions,
    ...toggleDropdownActions,
    ...errorActions,
}

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch)
        ,[dispatch])
}

