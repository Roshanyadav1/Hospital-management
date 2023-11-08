from hospital.models import Hospital
from hospital.serializers import HospitalSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from user.models import User


class HospitalViewSet(viewsets.ModelViewSet):
    queryset = Hospital.objects.all()
    serializer_class = HospitalSerializer

    def list(self, request, *args, **kwargs):
        data = list(Hospital.objects.all().values())
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': "Hospital Data Retrieved Successfully",
                'data': data
            },
        )

    def retrieve(self, request, *args, **kwargs):
            data = list(Hospital.objects.filter(hospital_id = kwargs['pk']).values())
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Hospital Data Retrieved Successfully",
                    'data': data
                },
            )
    
    def create(self, request, *args, **kwargs):
        product_serializer_data = HospitalSerializer(data = request.data)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        hospital = Hospital.objects.get(hospital_email = request.data.get('hospital_email'))

        member_id = hospital.hospital_id
        user_name = hospital.username
        user_email = request.data.get('hospital_owner_email')
        user_password = request.data.get('password')
        user_role = "Admin"
    
        user = User.objects.create_superuser(member_id, user_name, user_email, user_role, user_password)
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Hospital Added Successfully'
            },
        )
    
    def destroy(self, request, *args, **kwargs):
        product_data = Hospital.objects.filter(hospital_id = kwargs['pk'])
        if product_data:
            product_data.delete()
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': 'Hospital Deleted Successfully'
                },
            )
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': 'Hospital Data Not Found'
                },
            )

    def update(self, request, *args, **kwargs):
        product_details = Hospital.objects.get(hospital_id = kwargs['pk'])
        product_serializer_data = HospitalSerializer(product_details, data=request.data, partial=True)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': 'Hospital Data Updated Successfully'
            },
        )
        