from doctor.serializers import DoctorSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from doctor.models import Doctor
from rest_framework import status


class DoctorRegister(GenericAPIView):
    serializer_class = DoctorSerializer

    def post(self, request, format = None):
        serializer = DoctorSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Doctor Successfully Registered'
            },
        )
    
class DoctorView(APIView):
    def get(self, request, input = None, format = None):
        id = input
        if id is not None:
            if Doctor.objects.filter(doctor_id = id).count() >= 1:
                doctor = Doctor.objects.get(doctor_id = id)
                serializer = DoctorSerializer(doctor)
                return Response(
                    {
                        'status': status.HTTP_200_OK,
                        'message': "Doctor Data Retrieved Successfully",
                        'data': serializer.data
                    },
                )
            else:
                return Response(
                    {
                        'status': status.HTTP_400_BAD_REQUEST,
                        'message': "Invalid Doctor Id",
                    },
                ) 
        else:
            doctor = Doctor.objects.all()
            serializer = DoctorSerializer(doctor, many = True)
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Doctor Data Retrieved Successfully",
                    'data': serializer.data
                },
            )
    
class DoctorUpdate(APIView):
    def put(self, request, input, format = None):
        id = input
        if Doctor.objects.filter(doctor_id = id).count() >= 1:
            doctor = Doctor.objects.get(doctor_id = id)
            serializer = DoctorSerializer(doctor, data = request.data)
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
                    'message': "Invalid Doctor Id",
                },
            )
    
    def patch(self, request, input, format = None):
        id = input
        if Doctor.objects.filter(doctor_id = id).count() >= 1:
            doctor = Doctor.objects.get(doctor_id = id)
            serializer = DoctorSerializer(doctor, data = request.data, partial = True)
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
                    'message': "Invalid Doctor Id",
                },
            )
        
class DoctorDelete(APIView):
    def delete(self, request, input, format = None):
        id = input
        if Doctor.objects.filter(doctor_id = id).count() >= 1:
            doctor = Doctor.objects.get(doctor_id = id)
            doctor.delete()
            return Response(
                {
                    'status': status.HTTP_201_OK,
                    'message': "Doctor Data Deleted",
                },
            ) 
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': "Invalid Doctor Id",
                },
            )
