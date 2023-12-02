from doctor.serializers import *
from rest_framework.generics import GenericAPIView
from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter
from rest_framework.response import Response
from rest_framework.views import APIView
from doctor.models import Doctor
from rest_framework import status
from error.models import Error
from doctor.custom_orderings import CustomOrderingFilter
from hospital_management.custom_paginations import CustomPagination
from hospital_management.responses import ResponseMessage
from django_filters.rest_framework import DjangoFilterBackend
from leave.models import Leave
import json

class DoctorRegister(GenericAPIView):
    serializer_class = DoctorSerializer

    def post(self, request, format = None):
        serializer = DoctorSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        response_message = ""
        response_code = ""
        try:
         error = Error.objects.get(error_title = 'REGISTER_SUCCESS')
         response_message = error.error_message
         response_code = error.error_code
         Response.status_code = error.error_code
        except:
            response_message = ResponseMessage.REGISTRATION_SUCCESS
            response_code = status.HTTP_201_CREATED
        return Response(
            {
                'status': response_code,
                'message': 'Doctor ' + response_message
            },
        )

class DoctorCount(ListAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorViewSerializer

    def list(self, request, *args, **kwargs):
         response = super().list(request, *args, **kwargs)
         response_data = response.data


         response_message = ""
         response_code = ""

         try:
          error = Error.objects.get(error_title = 'RETRIEVED_SUCCESS')
          response_message = error.error_message
          response_code = error.error_code
          Response.status_code = error.error_code
         except:
             response_message = ResponseMessage.RETRIEVED_SUCCESS
             response_code = status.HTTP_200_OK
         return Response(
            {
                'status': response_code, 
                'message': "Doctor " + response_message,
                'count' : len(response_data),
            }
         )

       
           
    
class DoctorView(ListAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorViewSerializer
    filter_backends = [SearchFilter, CustomOrderingFilter]
    pagination_class  = CustomPagination
    # filterset_fields = ['disease_specialist','day']
    # search_fields = ['disease_specialist', 'day']
    
    def list(self, request, *args, **kwargs):
         response = super().list(request, *args, **kwargs)
         response_data = ""
         if request.GET.get('pageSize') != None:
            response.data['page_size'] = int(request.GET.get('pageSize'))
            response_data = response.data['results']
         else:
            response_data = response.data
         disease_specialist = request.GET.get('disease_specialist')
         print(disease_specialist)

         for data in response_data:
            times_data = json.loads(data.get('times'))
            times_tuple_data = tuple(map(tuple, times_data))

            disease_data = json.loads(data.get('disease_specialist'))
            disease_tuple_data = tuple(disease_data)

            if disease_specialist is not None:
               if disease_specialist in disease_tuple_data:
                    pass
               else:
                    response_data.remove(data)

         response_message = ""
         response_code = ""

         try:
          error = Error.objects.get(error_title = 'RETRIEVED_SUCCESS')
          response_message = error.error_message
          response_code = error.error_code
          Response.status_code = error.error_code
         except:
             response_message = ResponseMessage.RETRIEVED_SUCCESS
             response_code = status.HTTP_200_OK
         return Response(
            {
                'status': response_code, 
                'message': "Doctor " + response_message,
                'count' : len(response_data),
                'data': response.data, 
            }
         )

class DoctorViewById(APIView):
    def get(self, request, input = None, format = None):
        id = input
        if id is not None:
            if Doctor.objects.filter(doctor_id = id).count() >= 1:
                doctor = Doctor.objects.get(doctor_id = id)
                inputDate = request.GET.get('date')
                leave = Leave.objects.get(doctor = id)
                
                if inputDate is not None:
                    if str(leave.date) == str(inputDate):
                       doctor.status = "Unvailable"
                       print(doctor.status)
                    else:
                       doctor.status = "Available"
                
                serializer = DoctorSerializer(doctor)
                response_message = ""
                response_code = ""
                try:
                 error = Error.objects.get(error_title = 'RETRIEVED_SUCCESS')
                 response_message = error.error_message
                 response_code = error.error_code
                 Response.status_code = error.error_code
                except:
                    response_message = ResponseMessage.RETRIEVED_SUCCESS
                    response_code = status.HTTP_200_OK
                return Response(
                    {
                        'status': response_code,
                        'message': "Doctor " + response_message,
                        'data': serializer.data
                    },
                )
            else:
                response_message = ""
                response_code = ""
                try:
                  error = Error.objects.get(error_title = 'INVALID_ID')
                  response_message = error.error_message
                  response_code = error.error_code
                  Response.status_code = error.error_code
                except:
                    response_message = ResponseMessage.INVALID_ID
                    response_code = status.HTTP_400_BAD_REQUEST
                return Response(
                    {
                        'status': response_code,
                        'message': response_message,
                    },
                ) 
    
class DoctorUpdate(GenericAPIView):
    serializer_class = DoctorUpdateSerializer

    
    def patch(self, request, input, format = None):
        id = input
        if Doctor.objects.filter(doctor_id = id).count() >= 1:
            doctor = Doctor.objects.get(doctor_id = id)
            serializer = DoctorSerializer(doctor, data = request.data, partial = True)
            serializer.is_valid(raise_exception = True)
            serializer.save()
            response_message = ""
            response_code = ""
            try:
             error = Error.objects.get(error_title = 'UPDATE_SUCCESS')
             response_message = error.error_message
             response_code = error.error_code
             Response.status_code = error.error_code
            except:
               response_message = ResponseMessage.UPDATE_SUCCESS
               response_code = status.HTTP_200_OK
            return Response(
                {
                    'status': response_code,
                    'message': 'Doctor ' + response_message,
                }, 
            )
        else:
            response_message = ""
            response_code = ""
            try:
             error = Error.objects.get(error_title = 'INVALID_ID')
             response_message = error.error_message
             response_code = error.error_code
             Response.status_code = error.error_code
            except:
               response_message = ResponseMessage.INVALID_ID
               response_code = status.HTTP_400_BAD_REQUEST
            return Response(
                {
                    'status': response_code,
                    'message': response_message,
                },
            )
        
class DoctorDelete(APIView):
    def delete(self, request, input, format = None):
        id = input
        if Doctor.objects.filter(doctor_id = id).count() >= 1:
            doctor = Doctor.objects.get(doctor_id = id)
            doctor.delete()
            response_message = ""
            response_code = ""
            try:
              error = Error.objects.get(error_title = 'DELETE_SUCCESS')
              response_message = error.error_message
              response_code = error.error_code
              Response.status_code = error.error_code
            except:
               response_message = ResponseMessage.DELETE_SUCCESS
               response_code = status.HTTP_200_OK
            return Response(
                {
                    'status': response_code,
                    'message': "Doctor " + response_message,
                },
            ) 
        else:
            response_message = ""
            response_code = ""
            try:
              error = Error.objects.get(error_title = 'INVALID_ID')
              response_message = error.error_message
              response_code = error.error_code
              Response.status_code = error.error_code
            except:
               response_message = ResponseMessage.INVALID_ID
               response_code = status.HTTP_400_BAD_REQUEST
            return Response(
                {
                    'status': response_code,
                    'message': response_message,
                },
            )
