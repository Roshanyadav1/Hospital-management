import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { toast } from 'react-toastify'

export const queries = createApi({
   reducerpath: 'queries',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://hospital-management-six-chi.vercel.app/api/',
     
   }),

   keepUnusedDataFor: 30,
   refetchOnReconnect: true,
   refetchOnFocus: true,
   tagTypes: ['EMP', 'LOGIN'],
   endpoints: build => ({
      registerHospital: build.mutation({
         query: value => ({
            url: 'hospital/register/',
            method: 'POST',
            body: value,
         }),
         async onQueryStarted({ queryFulfilled }) {
            try {
               await queryFulfilled
               toast.success('Hospital Registered Successfully')
            } catch (e) {
               toast.error(JSON.stringify(e))
            }
         },
      }),
      addEmployee: build.mutation({
         query: payload => ({
            url: 'employee/add/',
            method: 'POST',
            body: payload,
         }),
         async onQueryStarted({ queryFulfilled }) {
            try {
               await queryFulfilled
               toast.success('Employee Added Successfully')
            } catch (e) {
               toast.error(JSON.stringify(e))
            }
         },
      }),
      addDiseases: build.mutation({
         query: payload => ({
            url: 'disease/add/',
            method: 'POST',
            body: payload,
         }),
         async onQueryStarted({ queryFulfilled }) {
            try {
               await queryFulfilled
               toast.success('Disease Added Successfully')
            } catch (e) {
               toast.error(JSON.stringify(e))
            }
         },
      }),
      deleteEmployee: build.mutation({
         query: value => ({
            url: 'employee/delete/' + value + '/',
            method: 'DELETE',
            // body:value
         }),
         invalidatesTags: ['EMP'],
      }),
      getEmployee: build.query({
         query: () => ({
            url: 'employee/view/',
            method: 'GET',
         }),
         providesTags: ['EMP'],
      }),
      getAllHospital: build.query({
         query: () => ({
            url: 'hospital/view/',
            method: 'GET',
         }),
      }),
      getAllDoctors: build.query({
         query: (prop) => ({
            url: 'doctor/view/'+`?disease_specialist=${prop || ''}`,
            method: 'GET',
         }),
      }),
      
      getGraphAppointInfo : build.query({
         query: () => ({
            url: 'appointment/view/',
            method: 'GET',
         }),
      }),
      getAllPatients: build.query({
         query: () => ({
            url: 'patient/view/',
            method: 'GET',
         }),
      }),
    
      getSpecialistDoctor: build.mutation({
         mutation: prop => ({
            url: `doctor/view/?disease_specialist=${prop.disease}&search=${prop.day}`,
            method: 'GET',
         }),
      }),
      getAllDiseases : build.query({
         query: () => ({
            url: 'disease/view/',
            method: 'GET',
         }),
      }),
      getAppointment: build.query({
         query: () => ({
            url: '/appointment/view/?patient_id=0f0885e1-c1aa-41a5-a27c-2978624b52fd',
            method: 'GET',
         }),
      }),
        getAppointPatientDoctorDate : build.query({
         query: () => ({
            url: 'appointment/appointmentCount/',
            method: 'GET',
         }),
      }),
      getViewDoctor: build.query({
         query:() => ({
            url:'/doctor/view/?pageSize=9',
            method:'Get',
         })
      }),
      getDoctorTimes: build.query({
         query:()=>({
               url:'/doctor/view/?doctor_id= ae8baecf-7a36-4498-b505-6a942f8a0cd7',
               method:'Get',
            })
         })
   }),
})

export const {
   useRegisterHospitalMutation,
   useAddEmployeeMutation,
   useAddDiseasesMutation,
   useDeleteEmployeeMutation,
   useGetEmployeeQuery,
   useGetAllHospitalQuery,
   useGetAllDoctorsQuery,
   useGetAllPatientsQuery,
   useGetSpecialistDoctorMutation,
   useGetAllDiseasesQuery,
   useGetAppointmentQuery,
   useGetGraphAppointInfoQuery,
   useGetAppointPatientDoctorDateQuery,
   useGetViewDoctorQuery,
   useGetDoctorTimesQuery
} = queries
