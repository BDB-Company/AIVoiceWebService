import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {actions as audioSetActions} from "../store/audioSet/audioSetSlice.ts";
import {actions as toggleDropdownActions} from "../store/dropdown/toggleDropdownSlice.ts";
import {actions as errorActions} from "../store/error/errorSlice.ts";
import {actions as loadingActions} from "../store/modalOpen/loadingSlice.ts";
import {actions as changeParametersActions} from "../store/changeParametrs/changeParametersSlice.ts";
const rootActions = {
    ...audioSetActions,
    ...toggleDropdownActions,
    ...errorActions,
    ...loadingActions,
    ...changeParametersActions,

}

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch)
        ,[dispatch])
}

