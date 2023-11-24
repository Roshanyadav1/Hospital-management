import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { toast } from 'react-toastify'

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
   keepUnusedDataFor: 30,
   refetchOnReconnect: true,
   refetchOnFocus: true,
   tagTypes: ["LOGIN"],
   endpoints: build => ({
      registerHospital: build.mutation({
         query: (value) => ({
            url: 'hospital/register/',
            method: 'POST',
            body:value
         }),
         async onQueryStarted({ queryFulfilled }) {
            try {
               await queryFulfilled
               toast.success('Hospital Registered Successfully')
            } catch (e) {
               toast.error(JSON.stringify(e))
            }
         }
      }),
      addEmployee: build.mutation({
         query:(payload)=>({
            url:'employee/add/',
            method:'POST',
            body:payload
         }),
      }),
      addDiseases: build.mutation({
         query:(payload)=>({
            url:'disease/add/',
            method:'POST',
            body:payload
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
   useAddEmployeeMutation,
   useAddDiseasesMutation,
   useGetEmployeeQuery
} = queries

