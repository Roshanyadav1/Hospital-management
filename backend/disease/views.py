from disease.models import Disease
from disease.serializers import DiseaseSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets


class DiseaseViewSet(viewsets.ModelViewSet):
    queryset = Disease.objects.all()
    serializer_class = DiseaseSerializer

    def list(self, request, *args, **kwargs):
        data = list(Disease.objects.all().values())
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': "Disease Data Retrieved Successfully",
                'data': data
            },
        )

    def retrieve(self, request, *args, **kwargs):
            data = list(Disease.objects.filter(disease_id = kwargs['pk']).values())
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Disease Data Retrieved Successfully",
                    'data': data
                },
            )
    
    def create(self, request, *args, **kwargs):
        product_serializer_data = DiseaseSerializer(data = request.data)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Disease Added Successfully'
            },
        )
    
    def destroy(self, request, *args, **kwargs):
        product_data = Disease.objects.filter(disease_id = kwargs['pk'])
        if product_data:
            product_data.delete()
            status_code = status.HTTP_201_CREATED
            return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Disease Deleted Successfully'
            },
        )
        else:
            status_code = status.HTTP_400_BAD_REQUEST
            return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Disease Not Found'
            },
        )

    def update(self, request, *args, **kwargs):
        product_details = Disease.objects.get(disease_id = kwargs['pk'])
        product_serializer_data = DiseaseSerializer(product_details, data=request.data, partial=True)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        status_code = status.HTTP_201_CREATED
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Disease Data Updated Successefully'
            },
        )
        