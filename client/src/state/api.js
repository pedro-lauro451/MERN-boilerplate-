import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }), //Connects to backend running on env variable URL | env.local
    reducerPath: "mainApi",
    tagTypes: ["Users"],
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => "main/users",
            providesTags: ["Users"]
        })
    })
});

export const {
    useGetUsersQuery
} = api;