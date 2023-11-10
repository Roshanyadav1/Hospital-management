// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     userData: {},
//     loading: true,
//     error: null,
// };

// const user = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         setUserData: (state, action) => {
//             state.userData = action.payload;
//             state.loading = false;
//             state.error = null;
//         },
//         setLoading: (state, action) => {
//             state.loading = action.payload;
//         },
//         setError: (state, action) => {
//             state.loading = false;
//             state.error = action.payload;
//         },
//     },
// });

// export const { setUserData, setLoading, setError } = user.actions;
// export default user.reducer;


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://hospital-management-six-chi.vercel.app/api" }),
    
    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => 'employee/view/'
        }),
        // getAllPostById: builder.query({
        //     query: (id) => `users/${id}`
        // }),
        // createPost:builder.mutation({
        //     query:(data)=>({
        //         url:'users',
        //         method:'post',
        //         body:data
        //     })
        // })
    }),
})

export const { useGetAllPostQuery,useGetAllPostByIdQuery,useCreatePostMutation } = postApi;