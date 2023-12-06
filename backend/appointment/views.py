from appointment.serializers import *
from rest_framework.generics import GenericAPIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from appointment.models import Appointment
from rest_framework.views import APIView
from rest_framework import status
from error.models import Error
from hospital_management.email import send_appointment_email
from hospital_management.responses import ResponseMessage
from hospital_management.custom_paginations import CustomPagination
from datetime import timedelta
from django.utils import timezone
from django.db.models import Count
from rest_framework.permissions import IsAuthenticated
from user.models import User
import jwt


class AppointmentAdd(GenericAPIView):
    serializer_class = AppointmentAddSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        serializer = AppointmentAddSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        appointment = serializer.save()

        send_appointment_email(appointment)
        response_message = ""
        response_code = ""
        try:
            error = Error.objects.get(error_title='BOOKED_SUCCESS')
            response_message = error.error_message
            response_code = error.error_code
            Response.status_code = error.error_code
        except:
            response_message = ResponseMessage.BOOKED_SUCCESS
            response_code = status.HTTP_201_CREATED
            Response.status_code = status.HTTP_201_CREATED
        return Response(
            {
                'status': response_code,
                'message': 'Appointment ' + response_message
            },
        )


class AppointmentView(ListAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentViewSerializer
    filterset_fields = ['doctor_id', 'appointment_time', 'patient_id',]
    pagination_class = CustomPagination
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        response_message = ""
        response_code = ""
        end_date = timezone.now().date()
        start_date = end_date - timedelta(days=6)

        header_value = request.headers['Authorization']
        token = header_value.split(' ')[1]
        payload = jwt.decode(token, "secret", algorithms=['HS256'])
        user_id = payload['user_id']
        user = User.objects.get(user_id=user_id)
        user_role = user.user_role

        if user_role == "Patient":
            if request.GET.get('patient_id') is None:
                Response.status_code = status.HTTP_401_UNAUTHORIZED
                return Response(
                    {
                        'status': status.HTTP_401_UNAUTHORIZED,
                        'message': "Unauthorized Access",
                    }
                )
        if user_role == "Doctor":
            if request.GET.get('doctor_id') is None:
                Response.status_code = status.HTTP_401_UNAUTHORIZED
                return Response(
                    {
                        'status': status.HTTP_401_UNAUTHORIZED,
                        'message': "Unauthorized Access",
                    }
                )

        appointments_in_week = self.queryset.filter(
            appointment_date__range=[start_date, end_date])
        appointments_per_day = appointments_in_week.values('appointment_date').annotate(appointment_count=Count(
            'appointment_date'), doctor_count=Count('doctor', distnict=True), patient_count=Count('patient')).order_by('appointment_date')
        patient_count_per_day = appointments_in_week.values('appointment_date').annotate(
            patient_count=Count('patient')).order_by('appointment_date')
        doctor_count_per_day = appointments_in_week.values('appointment_date').annotate(
            doctor_count=Count('doctor')).order_by('appointment_date')

        # for entry in appointments_per_day:
        #     print(f"Date: {entry['appointment_date']}, Appointments: {entry['appointment_count']}, Doctor: {entry['doctor_count']}")

        # # Print the patient count for each day (for debugging purposes)
        # for entry in patient_count_per_day:
        #     print(f"Date: {entry['appointment_date']}, Patient Count: {entry['patient_count']}")

        # for entry in doctor_count_per_day:
        #   print(f"Date: {entry['appointment_date']}, Doctor Count: {entry['doctor_count']}")

        if request.GET.get('pageSize') != None:
            response.data['page_size'] = int(request.GET.get('pageSize'))
        try:
            error = Error.objects.get(error_title='RETRIEVED_SUCCESS')
            response_message = error.error_message
            response_code = error.error_code
            Response.status_code = error.error_code
        except:
            response_message = ResponseMessage.RETRIEVED_SUCCESS
            response_code = status.HTTP_200_OK
            Response.status_code = status.HTTP_200_OK
        return Response(
            {
                'status': response_code,
                'message': "Appointment " + response_message,
                'appointment_per_week': list(appointments_per_day),
                'data': response.data,
            }
        )


class AppointmentViewById(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, input=None, format=None):
        id = input
        if id is not None:
            if Appointment.objects.filter(appointment_id=id).count() >= 1:
                appointment = Appointment.objects.get(appointment_id=id)
                serializer = AppointmentSerializer(appointment)
                response_message = ""
                response_code = ""
                try:
                    error = Error.objects.get(error_title='RETRIEVED_SUCCESS')
                    response_message = error.error_message
                    response_code = error.error_code
                    Response.status_code = error.error_code
                except:
                    response_message = ResponseMessage.RETRIEVED_SUCCESS
                    response_code = status.HTTP_200_OK
                    Response.status_code = status.HTTP_200_OK
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
                    error = Error.objects.get(error_title='INVALID_ID')
                    response_message = error.error_message
                    response_code = error.error_code
                    Response.status_code = error.error_code
                except:
                    response_message = ResponseMessage.INVALID_ID
                    response_code = status.HTTP_400_BAD_REQUEST
                    Response.status_code = status.HTTP_400_BAD_REQUEST
                return Response(
                    {
                        'status': response_code,
                        'message': response_message,
                    },
                )


class AppointmentUpdate(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request, input, format=None):
        id = input
        if request.data == {}:
            response_message = ""
            response_code = ""
            try:
                error = Error.objects.get(error_title='EMPTY_REQUEST')
                response_message = error.error_message
                response_code = error.error_code
                Response.status_code = error.error_code
            except:
                response_message = ResponseMessage.EMPTY_REQUEST
                response_code = status.HTTP_400_BAD_REQUEST
                Response.status_code = status.HTTP_400_BAD_REQUEST
            return Response(
                {
                    'status': response_code,
                    'message': response_message,
                },
            )
        else:
            if Appointment.objects.filter(appointment_id=id).count() >= 1:
                appointment = Appointment.objects.get(appointment_id=id)
                serializer = AppointmentSerializer(
                    appointment, data=request.data, partial=True)
                serializer.is_valid(raise_exception=True)
                serializer.save()
                response_message = ""
                response_code = ""
                try:
                    error = Error.objects.get(error_title='UPDATE_SUCCESS')
                    response_message = error.error_message
                    response_code = error.error_code
                    Response.status_code = error.error_code
                except:
                    response_message = ResponseMessage.UPDATE_SUCCESS
                    response_code = status.HTTP_200_OK
                    Response.status_code = status.HTTP_200_OK
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
                    error = Error.objects.get(error_title='INVALID_ID')
                    response_message = error.error_message
                    response_code = error.error_code
                    Response.status_code = error.error_code
                except:
                    response_message = ResponseMessage.INVALID_ID
                    response_code = status.HTTP_400_BAD_REQUEST
                    Response.status_code = status.HTTP_400_BAD_REQUEST
                return Response(
                    {
                        'status': response_code,
                        'message': response_message,
                    },
                )


class AppointmentDelete(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, input, format=None):
        id = input
        if Appointment.objects.filter(appointment_id=id).count() >= 1:
            appointment = Appointment.objects.get(appointment_id=id)
            appointment.delete()
            response_message = ""
            response_code = ""
            try:
                error = Error.objects.get(error_title='DELETE_SUCCESS')
                response_message = error.error_message
                response_code = error.error_code
                Response.status_code = error.error_code
            except:
                response_message = ResponseMessage.DELETE_SUCCESS
                response_code = status.HTTP_200_OK
                Response.status_code = status.HTTP_200_OK
            return Response(
                {
                    'status': response_code,
                    'message': 'Appointment ' + response_message
                },
            )
        else:
            response_message = ""
            response_code = ""
            try:
                error = Error.objects.get(error_title='INVALID_ID')
                response_message = error.error_message
                response_code = error.error_code
                Response.status_code = error.error_code
            except:
                response_message = ResponseMessage.INVALID_ID
                response_code = status.HTTP_400_BAD_REQUEST
                Response.status_code = status.HTTP_400_BAD_REQUEST
            return Response(
                {
                    'status': response_code,
                    'message': response_message,
                },
            )
