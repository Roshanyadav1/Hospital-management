from doctor.models import Doctor
from doctor.serializers import DoctorSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from rest_framework.filters import SearchFilter


class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    pagination_class  = PageNumberPagination
    filter_backends = [SearchFilter]
    search_fields = ['disease_specialist']

    def list(self, request, *args, **kwargs):
        data = (Doctor.objects.all().values())
        filtered_data = self.filter_queryset(data)   
        paginated_data = self.paginate_queryset(filtered_data)
        serializer = DoctorSerializer(paginated_data, many = True)
        print(serializer.data)
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': "Doctors Data Retrieved Successfully",
                'data': serializer.data
            },
        )

    def retrieve(self, request, *args, **kwargs):
            data = list(Doctor.objects.filter(appointment_id = kwargs['pk']).values())
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Doctor Data Retrieved Successfully",
                    'data': data
                },
            )
    
    def create(self, request, *args, **kwargs):
        product_serializer_data = DoctorSerializer(data = request.data)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Doctor Registered Successfully'
            },
        )
    
    def destroy(self, request, *args, **kwargs):
        product_data = Doctor.objects.filter(appintment_id = kwargs['pk'])
        if product_data:
            product_data.delete()
            status_code = status.HTTP_201_CREATED
            return Response(
            {
                'status': status.HTTP_200_OK,
                'message': "Doctor Data Deleted Successfully",
            },
        )
        else:
            status_code = status.HTTP_400_BAD_REQUEST
            return Response(
            {
                'status': status.HTTP_400_BAD_REQUEST,
                'message': "Doctor Data Not Found",
            },
        )

    def update(self, request, *args, **kwargs):
        product_details = Doctor.objects.get(appointment_id = kwargs['pk'])
        product_serializer_data = DoctorSerializer(product_details, data=request.data, partial=True)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': "Doctor Data Updated Successfully",
            },
        )
        