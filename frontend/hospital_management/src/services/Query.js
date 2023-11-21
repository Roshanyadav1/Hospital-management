import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { showToastMessage } from './ResponseHandler'

export const queries = createApi({
   reducerpath: 'queries',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://hospital-management-six-chi.vercel.app/api/hospital',
      // prepareHeaders: (headers, { getState }) => {
      //    const token = getState().rootReducer.companyDetails.token
      //    // If we have a token set in state, let's assume that we should be passing it.
      //    if (token) {
      //       headers.set('token', `${token}`)
      //    }
      //    return headers
      // },
   }),

   keepUnusedDataFor: 30,
   refetchOnReconnect: true,
   refetchOnFocus: true,
   tagTypes: ["LOGIN"],
   endpoints: build => ({
      registerHospital: build.mutation({
         query: (value) => ({
            url: '/register/',
            method: 'POST',
            body:value
         }),
         async onQueryStarted(
            arg,
            {
              dispatch,
              getState,
              extra,
              requestId,
              queryFulfilled,
              getCacheEntry,
              updateCachedData,
            }
          ) {
            showToastMessage('success' , "hospital added successfully")

          },
      }),
   }),
})

export const {
   useRegisterHospitalMutation
} = queries
