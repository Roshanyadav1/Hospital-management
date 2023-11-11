<<<<<<< HEAD
from appointment.models import Appointment
from rest_framework.generics import GenericAPIView
from appointment.serializers import AppointmentSerializer
from rest_framework.response import Response
=======
from rest_framework.pagination import PageNumberPagination
from appointment.serializers import *
from rest_framework.generics import GenericAPIView
from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter
from rest_framework.response import Response
from appointment.models import Appointment
>>>>>>> 79599d2cde0f0f9c3ae17efbe816d69b234c1eb3
from rest_framework.views import APIView
from rest_framework import status


class AppointmentAdd(GenericAPIView):
<<<<<<< HEAD
    serializer_class = AppointmentSerializer

    def post(self, request, format = None):
        serializer = AppointmentSerializer(data = request.data)
=======
    serializer_class = AppointmentAddSerializer

    def post(self, request, format = None):
        serializer = AppointmentAddSerializer(data = request.data)
>>>>>>> 79599d2cde0f0f9c3ae17efbe816d69b234c1eb3
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Appointment Booked Successfully'
            },
        )
<<<<<<< HEAD

class AppointmentView(APIView):
    def get(self, request, input = None, format = None):
        id = input
        if id is not None:
            if Appointment.objects.filter(appointment_id = id).count() >= 1:
                appointment = Appointment.objects.get(appointment_id = id)
                serializer = AppointmentSerializer(appointment)
                return Response(
                    {
                        'status': status.HTTP_200_OK,
                        'message': "Appointment Data Retrieved Successfully",
                        'data': serializer.data
                    },
                )
            else:
                return Response(
                    {
                        'status': status.HTTP_400_BAD_REQUEST,
                        'message': "Appointment Is Not Booked",
                    },
                ) 
        else:
            appointment = Appointment.objects.all()
            serializer = AppointmentSerializer(appointment, many = True)
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Appointments Data Retrieved Successfully",
                    'data': serializer.data
                },
            )

=======

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
                return Response(
                    {
                        'status': status.HTTP_200_OK,
                        'message': "Appointment Data Retrieved Successfully",
                        'data': serializer.data
                    },
                )
            else:
                return Response(
                    {
                        'status': status.HTTP_400_BAD_REQUEST,
                        'message': "Appointment Is Not Booked",
                    },
                ) 

>>>>>>> 79599d2cde0f0f9c3ae17efbe816d69b234c1eb3
class AppointmentUpdate(APIView):
    def put(self, request, input, format = None):
        id = input
        if Appointment.objects.filter(appointment_id = id).count() >= 1:
            appointment = Appointment.objects.get(appointment_id = id)
            serializer = AppointmentSerializer(appointment, data = request.data)
            serializer.is_valid(raise_exception = True)
            serializer.save()
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': 'Complete Data Updated',
                }, 
            )
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': 'Invalid Appointment Id', 
                },
            )
    
    def patch(self, request, input, format = None):
        id = input
        if request.data == {}:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': 'No Data Provided', 
                },
            )
        else:
            if Appointment.objects.filter(appointment_id = id).count() >= 1:
                appointment = Appointment.objects.get(appointment_id = id)
                serializer = AppointmentSerializer(appointment, data = request.data, partial = True)
                serializer.is_valid(raise_exception = True)
                serializer.save()
                return Response(
                    {
                        'status': status.HTTP_200_OK,
                        'message': 'Complete Data Updated',
                    }, 
                )
            else:
                return Response(
                    {
                        'status': status.HTTP_400_BAD_REQUEST,
                        'message': "Invalid Appointment Id",
                    },
                )

class AppointmentDelete(APIView):
    def delete(self, request, input, format = None):
        id = input
        if Appointment.objects.filter(appointment_id = id).count() >= 1:
            appointment = Appointment.objects.get(appointment_id = id)
            appointment.delete()
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message':'Appointment Deleted Successfully'
                },
            ) 
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': "Invalid Appointment Id",
                },
            )    
