from rest_framework.response import Response
from .serializers import HospitalSerializer
from rest_framework import status
from user.serializers import UserRegisterSerializer
from rest_framework.views import APIView
from .models import Hospital
from user.models import User
from rest_framework.generics import GenericAPIView
from hospital_management.responses import ResponseMessage
from error.models import Error

class HospitalRegister(GenericAPIView):
   serializer_class = HospitalSerializer

   def post(self, request, format = None):
      if Hospital.objects.filter(hospital_email = request.data.get('hospital_email')).count() >= 1:
            error = Error.objects.get(error_title = 'ALREADY_REGISTERED')
            response_message = error.error_message
            return Response(
               {
                  'status': status.HTTP_400_BAD_REQUEST,
                  'message': 'Hospital ' + response_message
               },
            )
      else:
         serializer = HospitalSerializer(data = request.data)
         serializer.is_valid(raise_exception = True)
         serializer.save()
         hospital = Hospital.objects.get(hospital_email = request.data.get('hospital_email'))

         member_id = hospital.hospital_id
         user_name = hospital.username
         user_email = request.data.get('hospital_owner_email')
         user_password = request.data.get('password')
         user_role = "Admin"

         user = User.objects.create_superuser(member_id, user_name, user_email, user_role, user_password)
         error = Error.objects.get(error_title = 'REGISTRATION_SUCCESS')
         response_message = error.error_message
         return Response(
            {
               'status': status.HTTP_201_CREATED,
               'message': 'Hospital ' + response_message
            },
         )
   
class HospitalView(APIView):
   def get(self, request, input = None, format = None):
      id = input
      print(id)
      if id is not None :
         if Hospital.objects.filter(hospital_id = id).count() >= 1:
            hospital = Hospital.objects.get(hospital_id = id)
            serializer = HospitalSerializer(hospital)
            error = Error.objects.get(error_title = 'RETRIEVED_SUCCESS')
            response_message = error.error_message
            return Response(
               {
                  'status': status.HTTP_200_OK,
                  'message': 'Hospital ' + response_message,
                  'data': serializer.data
               },
            )
         else:  
            error = Error.objects.get(error_title = 'INVALID_ID')
            response_message = error.error_message
            return Response(
               {
                  'status': status.HTTP_400_BAD_REQUEST,
                  'message': response_message,
               },
            )  
      else:
         hospital = Hospital.objects.all()
         serializer = HospitalSerializer(hospital, many = True)
         error = Error.objects.get(error_title = 'RETRIEVED_SUCCESS')
         response_message = error.error_message
         return Response(
            {
               'status': status.HTTP_200_OK,
               'message': 'Hospital ' + response_message,
               'data': serializer.data
            },
         )
      
class HospitalUpdate(APIView):
   def patch(self, request, input, format = None):
      id = input
      if Hospital.objects.filter(hospital_id = id).count() >= 1:
         hospital = Hospital.objects.get(hospital_id = id)
         serializer = HospitalSerializer(hospital, data = request.data, partial = True)
         serializer.is_valid(raise_exception = True)
         serializer.save() 
         error = Error.objects.get(error_title = 'UPDATE_SUCCESS')
         response_message = error.error_message
         return Response(
            {
               'status': status.HTTP_200_OK,
               'message': 'Hospital ' + response_message,
            }, 
         )
      else:
         error = Error.objects.get(error_title = 'INVALID_ID')
         response_message = error.error_message
         return Response(
            {
               'status': status.HTTP_400_BAD_REQUEST,
               'message': response_message,
            },
         )  
   
class HospitalDelete(APIView):
   def delete(self, request, input, format = None):
      id = input
      if Hospital.objects.filter(hospital_id = id).count() >= 1:
         hospital=Hospital.objects.get(hospital_id = id)
         hospital.delete()
         error = Error.objects.get(error_title = 'DELETE_SUCCESS')
         response_message = error.error_message
         return Response(
            {
               'status': status.HTTP_200_OK,
               'message': 'Hospital ' + response_message,
            },
         )  
      else:  
         error = Error.objects.get(error_title = 'INVALID_ID')
         response_message = error.error_message
         return Response(
            {
               'status': status.HTTP_400_BAD_REQUEST,
               'message': response_message,
            },
         )  