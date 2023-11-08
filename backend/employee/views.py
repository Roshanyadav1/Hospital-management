from rest_framework.response import Response
from employee.models import Employee
from rest_framework import viewsets
from rest_framework import status
from employee.serializers import EmployeeSerializer


# Create your views here.
class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

    def list(self, request, *args, **kwargs):
        data = list(Employee.objects.all().values())
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': "Employees Data Retrieved Successfully",
                'data': data
            },
        )

    def retrieve(self, request, *args, **kwargs):
            data = list(Employee.objects.filter(appointment_id = kwargs['pk']).values())
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Employee Data Retrieved Successfully",
                    'data': data
                },
            )
    
    def create(self, request, *args, **kwargs):
        product_serializer_data = EmployeeSerializer(data = request.data)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Employee Registered Successfully'
            },
        )
    
    def destroy(self, request, *args, **kwargs):
        product_data = Employee.objects.filter(appintment_id = kwargs['pk'])
        if product_data:
            product_data.delete()
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': 'Employee Removed Successfully'
                },
            )
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': 'Employee Data Not Found'
                },
            )

    def update(self, request, *args, **kwargs):
        product_details = Employee.objects.get(appointment_id = kwargs['pk'])
        product_serializer_data = EmployeeSerializer(product_details, data=request.data, partial=True)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': 'Employee Data Updated Successfully'
            },
        )
