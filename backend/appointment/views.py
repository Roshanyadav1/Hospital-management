from rest_framework.pagination import PageNumberPagination
from appointment.serializers import *
from rest_framework.generics import GenericAPIView
from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter
from rest_framework.response import Response
from appointment.models import Appointment
from rest_framework.views import APIView
from rest_framework import status
from error.models import Error
from hospital_management.email import send_email_to_client
from hospital_management.responses import ResponseMessage

class AppointmentAdd(GenericAPIView):
    serializer_class = AppointmentAddSerializer

    def post(self, request, format = None):
        serializer = AppointmentAddSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        appointment = serializer.save()
        
        send_email_to_client(appointment)
        response_message = ""
        response_code = ""
        try:
         error = Error.objects.get(error_title = 'BOOKED_SUCCESS')
         response_message = error.error_message
         response_code = error.error_code
        except:
            response_message  = ResponseMessage.BOOKED_SUCCESS
            response_code = status.HTTP_201_CREATED
        return Response(
            {
                'status': response_code,
                'message': 'Appointment ' + response_message
            },
        )

class AppointmentView(ListAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    filterset_fields = ['appointment_date', 'appointment_time', 'patient_id', 'doctor_id',]
    pagination_class  = PageNumberPagination
    filter_backends = [SearchFilter]
    search_fields = ['appointment_date', 'appointment_time', 'patient_id', 'doctor_id',]

class AppointmentViewById(APIView):
    def get(self, request, input = None, format = None):
        id = input
        if id is not None:
            if Appointment.objects.filter(appointment_id = id).count() >= 1:
                appointment = Appointment.objects.get(appointment_id = id)
                serializer = AppointmentSerializer(appointment)
                response_message = ""
                response_code = ""
                try:
                 error = Error.objects.get(error_title = 'RETRIEVED_SUCCESS')
                 response_message = error.error_message
                 response_code = error.error_code
                except: 
                    response_message = ResponseMessage.RETRIEVED_SUCCESS
                    response_code = status.HTTP_200_OK
                return Response(
                    {
                        'status': 'Appointment ' + response_code,
                        'message': response_message,
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
                except:
                    response_message = ResponseMessage.INVALID_ID
                    response_code = status.HTTP_400_BAD_REQUEST
                return Response(
                    {
                        'status': response_code,
                        'message': response_message,
                    },
                ) 

class AppointmentUpdate(APIView):
    
    
    def patch(self, request, input, format = None):
        id = input
        if request.data == {}:
            response_message = ""
            response_code = ""
            try:

             error = Error.objects.get(error_title = 'EMPTY_REQUEST')
             response_message = error.error_message
             response_code = error.error_code
            except:
                response_message = ResponseMessage.EMPTY_REQUEST
                response_code = status.HTTP_400_BAD_REQUEST
            return Response(
                {
                    'status': response_code,
                    'message': response_message, 
                },
            )
        else:
            if Appointment.objects.filter(appointment_id = id).count() >= 1:
                appointment = Appointment.objects.get(appointment_id = id)
                serializer = AppointmentSerializer(appointment, data = request.data, partial = True)
                serializer.is_valid(raise_exception = True)
                serializer.save()
                response_message = ""
                response_code = ""
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
                        'message': 'Appointment ' + response_message,
                    }, 
                )
            else:
                response_message = ""
                response_code = ""
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

class AppointmentDelete(APIView):
    def delete(self, request, input, format = None):
        id = input
        if Appointment.objects.filter(appointment_id = id).count() >= 1:
            appointment = Appointment.objects.get(appointment_id = id)
            appointment.delete()
            response_message = ""
            response_code = ""
            try:
             error = Error.objects.get(error_title = 'DELETE_SUCESS')
             response_message = error.error_message
             response_code = error.error_code
            except:
               response_message = ResponseMessage.DELETE_SUCCESS
               response_code = status.HTTP_200_OK
            return Response(
                {
                    'status': response_code,
                    'message':'Appointment ' + response_message
                },
            ) 
        else:
            response_message = ""
            response_code = ""
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
