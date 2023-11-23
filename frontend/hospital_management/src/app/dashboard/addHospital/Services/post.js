 import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";

 export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://hospital-management-six-chi.vercel.app/api/hospital',
    }),

    endpoints:(builder)=>({
      getAllPost: builder.query({
        query: ()=>({
            url: 'posts',
            method: 'POST'
        })
      })
    })
 })

 export const {useGetAllPostQuery} = postApi