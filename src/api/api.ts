import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {IAudioSetState} from "../models/interfaces/IAudioSetState.ts";
// import type {IAudioUpdateFormat} from "../models/interfaces/IAudioUpdateFormat.ts";

export const api = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost:5444/api',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAudioFile: builder.mutation<Blob, IAudioSetState>({
            query: (param) => ({
                url:'/getAudio',
                method: 'POST',
                body: param,
                responseHandler: (response) => response.blob(),
            }),

        }),
        updateAudioFormat: builder.mutation<Blob, Blob>({
            query: (blob) => ({
                url:'/updateFormat',
                method: 'POST',
                body: blob,
                headers: {
                    'Content-Type': 'audio/mpeg',
                },
                responseHandler: (response) => response.blob(),
            }),
        }),
    }),
});

export const { useGetAudioFileMutation, useUpdateAudioFormatMutation} = api;
