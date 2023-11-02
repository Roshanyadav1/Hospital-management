from user.models import User
from user.serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def list(self, request, *args, **kwargs):
        data = list(User.objects.all().values())
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': "Appointments Data Retrieved Successfully",
                'data': data
            },
        )

    def retrieve(self, request, *args, **kwargs):
            data = list(User.objects.filter(user_id = kwargs['pk']).values())
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Appointment Data Retrieved Successfully",
                    'data': data
                },
            )
    
    def create(self, request, *args, **kwargs):
        product_serializer_data = UserSerializer(data = request.data)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Appointment Booked Successfully'
            },
        )
    
    def destroy(self, request, *args, **kwargs):
        product_data = User.objects.filter(user_id = kwargs['pk'])
        if product_data:
            product_data.delete()
            return Response(
                {
                    'status': status.HTTP_201_CREATED,
                    'message': 'User Data Deleted Successfully'
                },
            )
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': 'User Data Not Found'
                },
            )

    def update(self, request, *args, **kwargs):
        product_details = User.objects.get(user_id = kwargs['pk'])
        product_serializer_data = UserSerializer(product_details, data=request.data, partial=True)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'User Data Updated Successfully'
            },
        )
        