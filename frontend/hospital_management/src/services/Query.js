'use client'
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
      doctorUpdate: build.mutation({
         query: value => ({
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
         query: payload => ({
            url: 'employee/add/',
            method: 'POST',
            body: payload,
         }),
      }),
      // addEmployee: build.mutation({
      //    query: payload => ({
      //       url: 'user/login/',
      //       method: 'POST',
      //       body: {
      //          user_email: 'johndoe@gmail.com',
      //          user_password: 'johndoe@123',
      //          is_verify: true,
      //       },
      //    }),
      // }),
      addDiseases: build.mutation({
         query: payload => ({
            url: 'disease/add/',
            method: 'POST',
            body: payload,
         }),
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
         query: arg => ({
            url: `employee/view/?employee_role=Manager&pageNo=${arg.page}&pageSize=${arg.pageSize}`,
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
         query: prop => ({
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
         query: prop => ({
            url: `doctor/view/?disease_specialist=${prop.disease}&date=${prop.day}`,
            method: 'GET',
         }),
      }),
      getAllDiseases: build.query({
         query: () => ({
            url: 'disease/view/',
            method: 'GET',
         }),
         async onQueryStarted({ queryFulfilled }) {
            try {
               let result = await queryFulfilled
               console.log(result, 'resresres')
               toast.success(' Successfully')
            } catch (e) {
               toast.error(JSON.stringify(e))
            }
         },
      }),
      getAppointment: build.query({
         query: () => ({
            url: '/appointment/view/?patient_id=0f0885e1-c1aa-41a5-a27c-2978624b52fd',
            method: 'GET',
         }),
      }),
      getAppointPatientDoctorDate: build.query({
         query: () => ({
            url: 'appointment/appointmentCount/',
            method: 'GET',
         }),
      }),
      getViewDoctor: build.query({
         query: () => ({
            url: '/doctor/view/?pageSize=9',
            method: 'Get',
         }),
      }),
      getDoctorTimes: build.query({
         query: () => ({
            url: '/doctor/view/?doctor_id=0747267a-5a51-4831-9d31-3dfef1991ccf',
            method: 'Get',
         }),
      }),
      getAddAppointment: build.mutation({
         query: appointmentData => ({
            url: 'appointment/add/',
            method: 'POST',
            body: appointmentData,
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
   useGetAppointPatientDoctorDateQuery,
   useGetViewDoctorQuery,
   useGetDoctorTimesQuery,
   useGetAddAppointmentMutation,
} = queries
