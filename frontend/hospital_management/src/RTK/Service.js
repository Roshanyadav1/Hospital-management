// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type {  } from './types'

// Define a service using a base URL and expected endpoints
export const Api = createApi({
  reducerPath: 'Service',
  baseQuery: fetchBaseQuery({ baseUrl: ' https://hospital-management-six-chi.vercel.app/api/hospital' }),
  endpoints: (builder) => ({
    PostData:  builder.mutation({
        query: (payload) => ({
          url: '/register/',
          method: 'POST',
          body: payload,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }),
        invalidatesTags: ['Post'],
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { usePostDataMutation} = Api