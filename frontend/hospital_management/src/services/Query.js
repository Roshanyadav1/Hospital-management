import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const queries = createApi({
   reducerpath: 'queries',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://hospital-management-six-chi.vercel.app/api/',
      // prepareHeaders: (headers, { getState }) => {
      //    const token = getState().rootReducer.companyDetails.token
      //    // If we have a token set in state, let's assume that we should be passing it.
      //    if (token) {
      //       headers.set('token', `${token}`)
      //    }
      //    return headers
      // },
   }),

   keepUnusedDataFor: 30000000,
   // refetchOnReconnect: true,
   // refetchOnFocus: true,
   tagTypes: ["LOGIN"],
   endpoints: build => ({
      registerHospital: build.mutation({
         query: (value) => ({
            url: 'hospital/register/',
            method: 'POST',
            body:value
         }),
      }),
      deleteEmployee: build.mutation({
         query: (value) => ({
            url: 'employee/delete/'+value+"/",
            method: 'DELETE',
            // body:value
         }),
      }),

      getEmployee: build.query({
         query: () => ({
            url: 'employee/view/',
            method: 'GET',
         }),
      }),
   }),
})

export const {
   useRegisterHospitalMutation,
   useDeleteEmployeeMutation,
   useGetEmployeeQuery
} = queries
