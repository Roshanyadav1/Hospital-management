<<<<<<< HEAD
from rest_framework.response import Response
from employee.models import Employee
from rest_framework import viewsets
from rest_framework import status
=======
>>>>>>> 404572c91cef9095024bdf6c6fe733dd63e33511
from employee.serializers import EmployeeSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from employee.models import Employee
from rest_framework import status


class EmployeeAdd(GenericAPIView):
    serializer_class = EmployeeSerializer

    def post(self, request, format = None):
        if Employee.objects.filter(employee_email = request.data.get('employee_email')).count() >= 1:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': 'Employee Already Registered'
                },
            )
        else:    
            serializer = EmployeeSerializer(data = request.data)
            serializer.is_valid(raise_exception = True)
            serializer.save()
            return Response(
                {
                    'status': status.HTTP_201_CREATED,
                    'message': 'Employee Successfully Added'
                },
            )
    
class EmployeeView(APIView):
    def get(self, request, input = None, format = None):
        id = input
        if id is not None:
            employee = Employee.objects.get(employee_id =  id)    
            serializer = EmployeeSerializer(employee)
            return Response(
            {
               'status': status.HTTP_200_OK,
               'message': "Employee Data Retrieved Successfully",
               'data': serializer.data
            },
         )
        else:
            employee = Employee.objects.all()
            serializer = EmployeeSerializer(employee, many = True)
            return Response(
            {
               'status': status.HTTP_200_OK,
               'message': "Employees Data Retrieved Successfully",
               'data': serializer.data
            },
         )
        
class EmployeeDelete(APIView):
    def delete(self, request, input = None, format=None):
        id = input
        employee = Employee.objects.get(employee_id = id)
        employee.delete()
        return Response(
         {
            'status': status.HTTP_201_OK,
            'message': "Employee Data Deleted",
         },
      )    
        
class EmployeeUpdate(APIView):
    def put(self, request, input= None, format=None):
        id = input
        if Employee.objects.filter(patient_id = id).count() >= 1:
            doctor = Employee.objects.get(patient_id = id)
            serializer = EmployeeSerializer(doctor, data = request.data)
            serializer.is_valid(raise_exception = True)
            serializer.save()
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': 'Complete Data Updated',
                }, 
            )
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': 'Employee Is Not Registered', 
                },
            )
  
    def patch(self, request, input= None, format=None):
        id = input
        employee = Employee.objects.get(employee_id =  id)
        serializer = EmployeeSerializer.save(employee,data = request.data, partial= True)
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': 'Partial Data Updated',
            }, 
        )

<<<<<<< HEAD
    def update(self, request, *args, **kwargs):
        product_details = Employee.objects.get(appointment_id = kwargs['pk'])
        product_serializer_data = EmployeeSerializer(product_details, data=request.data, partial=True)
        product_serializer_data.is_valid(raise_exception = True)
        product_serializer_data.save()
        status_code = status.HTTP_201_CREATED
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Employee Data Updated Successfully'
            },
        )
=======
class EmployeeFilter(ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    filterset_fields = ['employee_role']
>>>>>>> 404572c91cef9095024bdf6c6fe733dd63e33511
