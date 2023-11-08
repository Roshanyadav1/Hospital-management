from patient.models import Patient
from patient.serializers import PatientSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets

from user.models import User


class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

    def list(self, request, *args, **kwargs):
        data = list(Patient.objects.all().values())
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': "Patients Data Retrieved Successfully",
                'data': data
            },
        )

    def retrieve(self, request, *args, **kwargs):
            data = list(Patient.objects.filter(patient_id = kwargs['pk']).values())
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Patient Data Retrieved Successfully",
                    'data': data
                },
            )
    
    def create(self, request, *args, **kwargs):
        product_serializer_data = PatientSerializer(data = request.data)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        patient = Patient.objects.get(patient_email = request.data.get('patient_email'))

        member_id = patient.patient_id
        user_name = patient.patient_name
        user_email = request.data.get('patient_email')
        user_password = request.data.get('patient_password')
        user_role = "Patient"
    
        user = User.objects.create_user(member_id, user_name, user_email, user_role, user_password)

        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Patient Registered Successfully'
            },
        )
    
    def destroy(self, request, *args, **kwargs):
        product_data = Patient.objects.filter(patient_id = kwargs['pk'])
        if product_data:
            product_data.delete()
            return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Patient Data Deleted'
            },
        )
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': 'Patient Data Not Found'
                },
            )

    def update(self, request, *args, **kwargs):
        product_details = Patient.objects.get(patient_id = kwargs['pk'])
        product_serializer_data = PatientSerializer(product_details, data=request.data, partial=True)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': 'Patient Data Updated Successefully'
            },
        )
        