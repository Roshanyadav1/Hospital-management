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
from error.models import Error
from employee.custom_orderings import CustomOrderingFilter
from hospital_management.custom_paginations import CustomPagination
from hospital_management.responses import ResponseMessage

class EmployeeAdd(GenericAPIView):
    serializer_class = EmployeeSerializer

    def post(self, request, format = None):
        if Employee.objects.filter(employee_email = request.data.get('employee_email')).count() >= 1:
            response_message = ""
            response_code=""
            try:
             error = Error.objects.get(error_title = 'ALREADY_REGISTERED')
             response_message = error.error_message
             response_code = error.error_code
            except:
                response_message = ResponseMessage.ALREADY_REGISTERED
                response_code = status.HTTP_400_BAD_REQUEST
            return Response(
                {
                    'status': response_code,
                    'message': 'Employee ' + response_message
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
            member = doctor.doctor_id
            user_name = employee.employee_name
            user_email = request.data.get('employee_email')
            user_password = request.data.get('employee_password')
            user_role = employee.employee_role

            user = User.objects.create_user(
                member, user_name, user_email, user_role, user_password)
            response_message = ""
            response_code=""
            try:
             error = Error.objects.get(error_title = 'ADD_SUCCESS')
             response_message = error.error_message
             response_code = error.error_code
            except:
                response_message = ResponseMessage.ADD_SUCCESS
                response_code = status.HTTP_200_OK
            return Response(
                {
                    'status': response_code,
                    'message': 'Employee ' + response_message
                },
            )
    
class EmployeeView(ListAPIView):
    queryset = Employee.objects.all().order_by('created_at')
    serializer_class = EmployeeSerializer
    pagination_class  = CustomPagination
    filter_backends = [SearchFilter, CustomOrderingFilter]
    search_fields = ['employee_name', 'employee_role']
    
    def list(self, request, *args, **kwargs):
         response_message = ""
         response_code=""
         response = super().list(request, *args, **kwargs)
         if request.GET.get('pageSize') != None:
            response.data['page_size'] = int(request.GET.get('pageSize'))
         try:
          error = Error.objects.get(error_title = 'RETRIEVED_SUCCESS')
          response_message = error.error_message
          response_code = error.error_code    
         except:
                response_message = ResponseMessage.RETRIEVED_SUCCESS
                response_code = status.HTTP_200_OK
            
         return Response(
            {
                'status': response_code, 
                'message': "Employee " + response_message,
                'data': response.data, 
            }
         )

class EmployeeViewById(APIView):
    def get(self, request, input = None, format = None):
        id = input
        if id is not None:
            if Employee.objects.filter(employee_id = id).count() >= 1:
                employee = Employee.objects.get(employee_id =  id)    
                serializer = EmployeeSerializer(employee)
                response_message = ""
                response_code=""
                try:
                 error = Error.objects.get(error_title = 'RETRIEVED_SUCCESS')
                 response_message = error.error_message
                 response_code = error.error_code    
                except:
                    response_message = ResponseMessage.RETRIEVED_SUCCESS
                    response_code = status.HTTP_200_OK
                return Response(
                    {
                       'status': response_code,
                       'message': "Employee " + response_message,
                       'data': serializer.data
                    },
                )
            else:
                try:
                 response_message = ""
                 response_code=""
                 error = Error.objects.get(error_title = 'INVALID_ID')
                 response_message = error.error_message
                 response_code = error.error_code
                except:
                    response_message = ResponseMessage.INVALID_ID
                    response_code = status.HTTP_400_BAD_REQUEST
                return Response(
                    {
                        'status': response_code,
                        'message': response_message,
                    },
                ) 

class EmployeeDelete(APIView):
    def delete(self, request, input = None, format=None):
        id = input
        if Employee.objects.filter(employee_id = id).count() >= 1:
            employee = Employee.objects.get(employee_id = id)
            employee.delete()
            response_message = ""
            response_code=""
            try:
             error = Error.objects.get(error_title = 'DELETE_SUCCESS')
             response_message = error.error_message
             response_code = error.error_code
            except: 
                response_message = ResponseMessage.DELETE_SUCCESS
                response_code = status.HTTP_200_OK
            return Response(
                {
                    'status': response_code,
                    'message': "Employee " + response_message,
                },
            )    
        else:
             response_message = ""
             response_code=""
             try:
              error = Error.objects.get(error_title = 'INVALID_ID')
              response_message = error.error_message
              response_code = error.error_code
             except: 
                response_message = ResponseMessage.INVALID_ID
                response_code = status.HTTP_400_BAD_REQUEST
             return Response(
                {
                    'status': response_code,
                    'message': "Employee " + response_message,
                },
             )    
class EmployeeUpdate(APIView):
    
    def patch(self, request, input= None, format=None):
        id = input
        if Employee.objects.filter(employee_id = id).count() >= 1:
            employee = Employee.objects.get(employee_id =  id)
            serializer = EmployeeSerializer.save(employee,data = request.data, partial= True)
            response_message = ""
            response_code=""
            try:
             error = Error.objects.get(error_title = 'UPDATE_SUCCESS')
             response_message = error.error_message
             response_code = error.error_code   
            except:
               response_message = ResponseMessage.UPDATE_SUCCESS
               response_code = status.HTTP_200_OK
            return Response(
                {
                    'status': response_code,
                    'message': 'Employee ' + response_message,
                }, 
            )
        else:
            response_message = ""
            response_code=""
            try:
             error = Error.objects.get(error_title = 'INVALID_ID')
             response_message = error.error_message
             response_code = error.error_code   
            except:
               response_message = ResponseMessage.INVALID_ID
               response_code = status.HTTP_400_BAD_REQUEST
            return Response(
                {
                    'status': response_code,
                    'message': response_message,
                }, 
            )

