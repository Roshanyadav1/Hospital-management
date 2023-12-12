'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { toast } from 'react-toastify'

export const apiAuth =  createApi({
   reducerpath: 'apiAuth',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://dev-wk502078emf2n02u.us.auth0.com',
   }),
   endpoints: (build) => ({
      registerAuth: build.mutation({
        query :(value) => ({
         url: 'Username-Password-Authentication/signup',
         method: 'POST',
         body: value,
        })
      })
   
   })
})
export const queries = createApi({
   reducerpath: 'queries',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://hospital-management-six-chi.vercel.app/api/',
   }),
   keepUnusedDataFor: 30,
   refetchOnReconnect: true,
   refetchOnFocus: true,
   tagTypes: ['EMP', 'LOGIN'],
   endpoints: (build) => ({
      registerHospital: build.mutation({
         query: (value) => ({
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
      doctorUpdate: build.mutation({
         query: (value) => ({
            url: 'doctor/update/',
            method: 'POST',
            body: value,
         }),
         async onQueryStarted({ queryFulfilled }) {
            try {
               await queryFulfilled
               toast.success('Doctor Updated Successfully')
            } catch (e) {
               toast.error(JSON.stringify(e))
            }
         },
      }),
      addEmployee: build.mutation({
         query: (payload) => ({
            url: 'employee/add/',
            method: 'POST',
            body: payload,
         }),
      }),
      loginUser: build.mutation({
         query: (prop) => ({
            url: 'user/login/',
            method: 'POST',
            body: {
               user_email: prop,
               user_password: 'hello',
               is_verify: true,
            },
         }),
      }),
      addDiseases: build.mutation({
         query: (payload) => ({
            url: 'disease/add/',
            method: 'POST',
            body: payload,
         }),
      }),
      deleteEmployee: build.mutation({
         query: (value) => ({
            url: 'employee/delete/' + value + '/',
            method: 'DELETE',
            // body:value
         }),
         invalidatesTags: ['EMP'],
      }),
      getEmployee: build.query({
         query: (arg) => ({
            url: `employee/view/?pageNo=${arg.page}&pageSize=${arg.pageSize}`,
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
            url: 'doctor/view/' + `?disease_specialist=${prop || ''}`,
            method: 'GET',
         }),
      }),
      getGraphAppointInfo: build.query({
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
      specialistDoctor: build.mutation({
         query: (prop) => ({
            url: `doctor/view/?disease_specialist=${prop.disease}&date=${prop.day}`,
            method: 'GET',
         }),
      }),
      getAllDiseases: build.query({
         query: () => ({
            url: 'disease/view/',
            method: 'GET',
         }),
      }),
      getAppointment: build.query({
         query: () => ({
            url: `/appointment/view/?patient_id=${localStorage.getItem('user_id')}`,
            method: 'GET',
         }),
      }),
      getAppointPatientDoctorDate: build.query({
         query: () => ({
            url: 'appointment/appointmentCount/',
            method: 'GET',
         }),
      }),
      // getViewDoctor: build.query({
      //    query: (prop) => ({
      //       url: `doctor/view/?pageSize=${10}&pageNo=${prop}`,
      //       method: 'Get',
      //    }),
      // }),
      getViewDoctor: build.query({
         query:() => ({
            url:'/doctor/view/?pageSize=9',
            method:'Get',
         })

      }),
      getDoctorTimes: build.query({
         query: (id) => ({
            url: `/doctor/view/${id}/`,
            method: 'Get',
         }),
      }),
      addAppointment: build.mutation({
         query: (appointmentData) => ({
            url: 'appointment/add/',
            method: 'POST',
            body: appointmentData,
         }),
      }),
      getAppointmentInfo: build.query({
         query: (appointment_id) => ({
            url: `/appointment/view/?appointment_id=${appointment_id}`,
            method: 'GET',
         }),
      }),
      getDoctorId: build.query({
         query: (doctor_id) => ({
            url: `/doctor/view/?doctor_id=${doctor_id}`,
            method: 'GET',
         }),
      }),
   }),
})
export const {
   useRegisterHospitalMutation,
   useDoctorUpdateMutation,
   useAddEmployeeMutation,
   useAddDiseasesMutation,
   useDeleteEmployeeMutation,
   useGetEmployeeQuery,
   useGetAllHospitalQuery,
   useGetAllDoctorsQuery,
   useGetAllPatientsQuery,
   useSpecialistDoctorMutation,
   useGetAllDiseasesQuery,
   useGetAppointmentQuery,
   useGetGraphAppointInfoQuery,
   useLoginUserMutation,
   useGetAppointPatientDoctorDateQuery,
   useGetViewDoctorQuery,
   useGetDoctorTimesQuery,
   useAddAppointmentMutation,
   useGetAppointmentInfoQuery,
} = queries

export const {
   useRegisterAuth,
} = apiAuth
