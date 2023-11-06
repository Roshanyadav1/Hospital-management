from patient.models import Patient
from patient.serializers import PatientSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from rest_framework.filters import SearchFilter
from rest_framework.parsers import MultiPartParser, FormParser



class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    pagination_class  = PageNumberPagination
    filter_backends = [SearchFilter]
    search_fields = ['patient_name'] 
    parser_classes = (MultiPartParser, FormParser)


    def list(self, request, *args, **kwargs):

        data = (Patient.objects.all().values())
        filtered_data = self.filter_queryset(data)   
        paginated_data = self.paginate_queryset(filtered_data)
        serializer = PatientSerializer(paginated_data, many = True)
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
            status_code = status.HTTP_201_CREATED
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
        status_code = status.HTTP_201_CREATED
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Patient Data Updated Successefully'
            },
        )
        