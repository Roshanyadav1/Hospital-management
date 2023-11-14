from employee.employee_pagination import EmployeePagination
from employee.serializers import EmployeeSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter
from rest_framework.response import Response
from rest_framework.views import APIView
from employee.models import Employee
from user.models import User
from rest_framework import status
from doctor.serializers import DoctorSerializer


class EmployeeAdd(GenericAPIView):
    serializer_class = EmployeeSerializer

    def post(self, request, format = None):
        if Employee.objects.filter(employee_email = request.data.get('employee_email')).count() >= 1:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': 'Employee Already Exists'
                },
            )
        else:    
            serializer = EmployeeSerializer(data = request.data)
            serializer.is_valid(raise_exception = True)
            serializer.save()
            doctor = None
            employee = Employee.objects.get(
            employee_email=request.data.get('employee_email'))
            if employee.employee_role == 'Doctor':
                doctor_data = {
                    'employee_id': employee.employee_id,
                    'doctor_type': employee.employee_type,
                    'disease_specialist': 'null'
                }
                doctor_serializer = DoctorSerializer(data = doctor_data)
                doctor_serializer.is_valid(raise_exception = True)
                doctor = doctor_serializer.save()
            member_id = doctor.doctor_id
            user_name = employee.employee_name
            user_email = request.data.get('employee_email')
            user_password = request.data.get('employee_password')
            user_role = employee.employee_role

            user = User.objects.create_user(
                member_id, user_name, user_email, user_role, user_password)
            return Response(
                {
                    'status': status.HTTP_201_CREATED,
                    'message': 'Employee Successfully Added'
                },
            )
    
class EmployeeView(ListAPIView):
    queryset = Employee.objects.all().order_by('created_at')
    serializer_class = EmployeeSerializer
    pagination_class  = EmployeePagination
    filter_backends = [SearchFilter]
    search_fields = ['employee_role']
    
    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        if request.GET.get('pageSize') != None:
            response.data['page_size'] = int(request.GET.get('pageSize'))
            
        return Response(
            {
            'status': status.HTTP_200_OK, 
            'message': "Employee Data Retrieved",
            'data': response.data, 
            }
        )

class EmployeeViewById(ListAPIView):
    def get(self, request, input = None, format = None):
        id = input
        if id is not None:
            if Employee.objects.filter(employee_id = id).count() >= 1:
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
                return Response(
                    {
                        'status': status.HTTP_400_BAD_REQUEST,
                        'message': "Invalid Employee Id",
                    },
                ) 

class EmployeeDelete(APIView):
    def delete(self, request, input = None, format=None):
        id = input
        if Employee.objects.filter(employee_id = id).count() >= 1:
            employee = Employee.objects.get(employee_id = id)
            employee.delete()
            return Response(
                {
                    'status': status.HTTP_201_OK,
                    'message': "Employee Data Deleted",
                },
            )    
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': "Invalid Employee Id",
                },
            ) 
        
class EmployeeUpdate(APIView):
    def put(self, request, input= None, format=None):
        id = input
        if Employee.objects.filter(employee_id = id).count() >= 1:
            doctor = Employee.objects.get(employee_id = id)
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
                    'message': 'Invalid Employee Id', 
                },
            )
  
    def patch(self, request, input= None, format=None):
        id = input
        if Employee.objects.filter(employee_id = id).count() >= 1:
            employee = Employee.objects.get(employee_id =  id)
            serializer = EmployeeSerializer.save(employee,data = request.data, partial= True)
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': 'Partial Data Updated',
                }, 
            )
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': 'Invalid Employee Id',
                }, 
            )

