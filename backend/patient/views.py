from patient.models import Patient
from patient.serializers import PatientSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from user.models import User
from rest_framework.generics import GenericAPIView
from user.serializers import UserRegisterSerializer


class PatientRegister(GenericAPIView):
    serializer_class = PatientSerializer

    def post(self, request, format = None):
        serializer = PatientSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        patient = Patient.objects.get(patient_email = request.data.get('patient_email'))
        
        member_id = patient.patient_id
        user_name = patient.patient_name
        user_email = request.data.get('patient_email')
        user_password = request.data.get('password')
        user_role = "Patient"

        user = User.objects.create_user(member_id, user_name, user_email, user_role, user_password)

        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Patient Successfully Registered'
            },
        )

class PatientView(APIView):
    def get(self, request, input = None, format = None):
        id = input
        if id is not None:
            if Patient.objects.filter(patient_id = id).count() >= 1:
                doctor = Patient.objects.get(patient_id = id)
                serializer = PatientSerializer(doctor)
                return Response(
                    {
                        'status': status.HTTP_200_OK,
                        'message': "Patient Data Retrieved Successfully",
                        'data': serializer.data
                    },
                )
            else:
                return Response(
                    {
                        'status': status.HTTP_400_BAD_REQUEST,
                        'message': "Patient Is Not Registered",
                    },
                ) 
        else:
            patient = Patient.objects.all()
            serializer = PatientSerializer(patient, many = True)
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Patients Data Retrieved Successfully",
                    'data': serializer.data
                },
            )
    
class PatientUpdate(APIView):
    def put(self, request, input, format = None):
        id = input
        if Patient.objects.filter(patient_id = id).count() >= 1:
            doctor = Patient.objects.get(patient_id = id)
            serializer = PatientSerializer(doctor, data = request.data)
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
                    'message': 'Doctor Is Not Registered', 
                },
            )
    
    def patch(self, request, input, format = None):
        id = input
        if Patient.objects.filter(patient_id = id).count() >= 1:
            doctor = Patient.objects.get(patient_id = id)
            serializer = PatientSerializer(doctor, data = request.data, partial = True)
            serializer.is_valid(raise_exception = True)
            serializer.save()
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': 'Partial Data Updated',
                }, 
            )
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': "Patient Is Not Registered",
                },
            )

class PatientDelete(APIView):
    def delete(self, request, input, format = None):
        id = input
        if Patient.objects.filter(patient_id = id).count() >= 1:
            doctor = Patient.objects.get(patient_id = id)
            doctor.delete()
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Patient Data Deleted",
                },
            )
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': "Patient Is Not Registered",
                },
            )
