from prescription.models import Prescription
from prescription.serializers import PrescriptionSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets


class PrescriptionViewSet(viewsets.ModelViewSet):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer

    def list(self, request, *args, **kwargs):
        data = list(Prescription.objects.all().values())
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': "Prescriptions Data Retrieved Successfully",
                'data': data
            },
        )

    def retrieve(self, request, *args, **kwargs):
            data = list(Prescription.objects.filter(prescription_id = kwargs['pk']).values())
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Prescription Data Retrieved Successfully",
                    'data': data
                },
            )
    
    def create(self, request, *args, **kwargs):
        product_serializer_data = PrescriptionSerializer(data = request.data)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Prescription Added Successfully'
            },
        )
    
    def destroy(self, request, *args, **kwargs):
        product_data = Prescription.objects.filter(prescription_id = kwargs['pk'])
        if product_data:
            product_data.delete()
            return Response(
                {
                    'status': status.HTTP_201_CREATED,
                    'message': 'Prescription Data Deleted Successfully'
                },
            )
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': 'Prescription Data Deleted Successfully'
                },
            )

    def update(self, request, *args, **kwargs):
        product_details = Prescription.objects.get(prescription_id = kwargs['pk'])
        product_serializer_data = PrescriptionSerializer(product_details, data=request.data, partial=True)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': 'Prescription Data Deleted Successfully'
            },
        )
        