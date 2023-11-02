from hospital.models import Hospital
from hospital.serializers import HospitalSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets


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
            status_code = status.HTTP_201_CREATED
            return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Hospital Deleted Successfully'
            },
        )
        else:
            status_code = status.HTTP_400_BAD_REQUEST
            return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Hospital Data Not Found'
            },
        )

    def update(self, request, *args, **kwargs):
        product_details = Hospital.objects.get(hospital_id = kwargs['pk'])
        product_serializer_data = HospitalSerializer(product_details, data=request.data, partial=True)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        status_code = status.HTTP_201_CREATED
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Hospital Data Updated Successfully'
            },
        )
        