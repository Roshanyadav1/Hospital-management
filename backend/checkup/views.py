from checkup.models import CheckUp
from checkup.serializers import CheckUpSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets


class CheckUpViewSet(viewsets.ModelViewSet):
    queryset = CheckUp.objects.all()
    serializer_class = CheckUpSerializer

    def list(self, request, *args, **kwargs):
        data = list(CheckUp.objects.all().values())
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': "Checkup Data Retrieved Successfully",
                'data': data
            },
        )

    def retrieve(self, request, *args, **kwargs):
            data = list(CheckUp.objects.filter(checkup_id = kwargs['pk']).values())
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Checkup Data Retrieved Successfully",
                    'data': data
                },
            )
    
    def create(self, request, *args, **kwargs):
        product_serializer_data = CheckUpSerializer(data = request.data)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Checkup Added Successfully'
            },
        )
    
    def destroy(self, request, *args, **kwargs):
        product_data = CheckUp.objects.filter(checkup_id = kwargs['pk'])
        if product_data:
            product_data.delete()
            return Response(
                {
                    'status': status.HTTP_201_CREATED,
                    'message': 'Checkup Deleted Successfully'
                },
            )
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': 'Checkup Data Not Found'
                },
            )

    def update(self, request, *args, **kwargs):
        product_details = CheckUp.objects.get(checkup_id = kwargs['pk'])
        product_serializer_data = CheckUpSerializer(product_details, data=request.data, partial=True)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Checkup Data Updated Successfully'
            },
        )
        