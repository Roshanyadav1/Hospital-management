from appointment.models import Appointment
from appointment.serializers import AppointmentSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from hospital_management.email import send_email_to_client


class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def list(self, request, *args, **kwargs):
        data = list(Appointment.objects.all().values())
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': "Appointments Data Retrieved Successfully",
                'data': data
            },
        )

    def retrieve(self, request, *args, **kwargs):
            data = list(Appointment.objects.filter(appointment_id = kwargs['pk']).values())
            if data == []:
                return Response(
                    {
                        'status': status.HTTP_200_OK,
                        'message': "Invalid Appointment Id",
                    },
                )    
            else: 
                return Response(
                    {
                        'status': status.HTTP_200_OK,
                        'message': "Appointment Data Retrieved Successfully",
                        'data': data
                    },
                )
    
    def create(self, request, *args, **kwargs):
        product_serializer_data = AppointmentSerializer(data = request.data)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        # send_email_to_client(request.data)
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Appointment Booked Successfully'
            },
        )
    
    def destroy(self, request, *args, **kwargs):
        product_data = Appointment.objects.filter(appointment_id = kwargs['pk'])
        if product_data:
            product_data.delete()
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Appointments Deleted Successfully",
                },
            )
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': "Invalid Appointment Id",
                },
            )

    def update(self, request, *args, **kwargs):
        product_details = Appointment.objects.get(appointment_id = kwargs['pk'])
        if product_details:
            product_serializer_data = AppointmentSerializer(product_details, data = request.data, partial=True)
            product_serializer_data.is_valid(raise_exception = True)
            product_serializer_data.save()
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Appointments Updated Successfully",
                },
            )
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': "Invalid Appointment Id",
                },
            )