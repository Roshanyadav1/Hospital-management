from patient.models import Patient
from patient.serializers import PatientSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework import status
from rest_framework.filters import SearchFilter
from user.models import User
from rest_framework.generics import GenericAPIView
from patient.custom_orderings import CustomOrderingFilter
from hospital_management.custom_paginations import CustomPagination
from error.models import Error
from hospital_management.responses import ResponseMessage
class PatientRegister(GenericAPIView):
    serializer_class = PatientSerializer

    def post(self, request, format=None):
        if Patient.objects.filter(patient_email=request.data.get('patient_email')).count() >= 1:
            response_message = ''
            response_code = ''
            try : 
                error = Error.objects.get(error_title = 'ALREADY_REGISTERED')
                response_message = error.error_message
                response_code = error.error_code
            except:
                response_message = ResponseMessage.REGISTRATION_SUCCESS
                response_code = status.HTTP_201_CREATED
            return Response(
                {
                'status': response_code,
                'message': 'Patient ' + response_message
                },
              )
        else:
            serializer = PatientSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            patient = Patient.objects.get(
                patient_email=request.data.get('patient_email'))

            member_id = patient.patient_id
            user_name = patient.patient_name
            user_email = request.data.get('patient_email')
            user_password = request.data.get('password')
            user_role = "Patient"

            user = User.objects.create_user(
                member_id, user_name, user_email, user_role, user_password)
            response_message = ''
            response_code = ''
            try : 
                error = Error.objects.get(error_title = 'REGISTRATION_SUCCESS')
                response_message = error.error_message
                response_code = error.error_code
            except:
                response_message = ResponseMessage.REGISTRATION_SUCCESS
                response_code = status.HTTP_201_CREATED
            return Response(
                {
                'status': response_code,
                'message': 'Patient ' + response_message
                },
              )
          



class PatientView(ListAPIView):
    queryset = Patient.objects.all().order_by('created_at')
    serializer_class = PatientSerializer
    filter_backends = [SearchFilter, CustomOrderingFilter]
    search_fields = ['patient_name']
    pagination_class  = CustomPagination

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        response_message = ""
        response_code=""
        if request.GET.get('pageSize') != None:
            response.data['page_size'] = int(request.GET.get('pageSize'))
        try:
         error = Error.objects.get(error_title = 'RETRIEVED_SUCCESS')
         response_message = error.error_message
         response_code = error.error_code
       
        except:
            response_message=ResponseMessage.RETRIEVED_SUCCESS
            response_code=status.HTTP_200_OK
        return Response(
            {
                'status': response_code, 
                'message': "Patient " + response_message,
                'data': response.data, 
            }
        )

class PatientViewById(APIView):
    def get(self, request, input=None, format=None):
        id = input
        if id is not None:
            if Patient.objects.filter(patient_id=id).count() >= 1:
                doctor = Patient.objects.get(patient_id=id)
                serializer = PatientSerializer(doctor)
                response_message = ""
                response_code=""
                try:
                 error = Error.objects.get(error_title = 'RETRIEVED_SUCCESS')
                 response_message = error.error_message
                 response_code = error.error_code
                except:
                       response_message = ResponseMessage.RETRIEVED_SUCCESS
                       response_code=status.HTTP_200_OK

                return Response(
                    {
                        'status': response_code,
                        'message': "Patient " + response_message,
                        'data': serializer.data
                    },
                )
            else:
                response_message = ""
                response_code=""
                try:
                 error = Error.objects.get(error_title = 'INVALID_ID')
                 response_message = error.error_message
                 response_code = error.error_code
                except:
                       response_message=ResponseMessage.INVALID_ID
                       response_code = status.HTTP_400_BAD_REQUEST
                return Response(
                    {
                        'status': response_code,
                        'message': response_message,
                    },
                )
            
class PatientUpdate(APIView):
   
    def patch(self, request, input, format=None):
        id = input
        if Patient.objects.filter(patient_id=id).count() >= 1:
            doctor = Patient.objects.get(patient_id=id)
            serializer = PatientSerializer(
                doctor, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            response_message = ""
            response_code=""
            try:
             error = Error.objects.get(error_title = 'UPDATE_SUCCESS')
             response_message = error.error_message
             response_code = error.error_code
            except:
                response_message = ResponseMessage.UPDATE_SUCCESS
                response_code = status.HTTP_200_OK
            return Response(
                {
                    'status': response_code,
                    'message': 'Patient ' + response_message,
                },
            )
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': "Invalid Patient Id",
                },
            )


class PatientDelete(APIView):
    def delete(self, request, input, format=None):
        id = input
        if Patient.objects.filter(patient_id=id).count() >= 1:
            doctor = Patient.objects.get(patient_id=id)
            doctor.delete()
            response_message = ""
            response_code=""
            try:
             error = Error.objects.get(error_title = 'DELETE_SUCCESS')
             response_message = error.error_message
             response_code = error.error_code
            except:
                response_message = ResponseMessage.DELETE_SUCCESS
                response_code  = status.HTTP_200_OK
            return Response(
                {
                    'status': response_code,
                    'message': "Patient " + response_message,
                },
            )
        else:
            response_message = ""
            response_code=""
            try:
             error = Error.objects.get(error_title = 'INVALID_ID')
             response_message = error.error_message
             response_code = error.error_code
            except:
                response_message = ResponseMessage.INVALID_ID
                response_code = status.HTTP_400_BAD_REQUEST
            return Response(
                {
                    'status': response_code,
                    'message': response_message,
                },
            )
