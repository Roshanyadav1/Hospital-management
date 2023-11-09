from rest_framework.response import Response
from .serializers import HospitalSerializer
from rest_framework import status
from user.serializers import UserRegisterSerializer
from rest_framework.views import APIView
from .models import Hospital
from user.models import User
from rest_framework.generics import GenericAPIView


class HospitalRegister(GenericAPIView):
   serializer_class = HospitalSerializer

   def post(self, request, format = None):
      if Hospital.objects.filter(hospital_email = request.data.get('hospital_email')).count() >= 1:
            return Response(
               {
                  'status': status.HTTP_400_BAD_REQUEST,
                  'message': 'Hospital Already Exists'
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
         return Response(
            {
               'status': status.HTTP_201_CREATED,
               'message': 'Hospital Successfully Registered'
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
            return Response(
               {
                  'status': status.HTTP_200_OK,
                  'message': "Hospital Data Retrieved Successfully",
                  'data': serializer.data
               },
            )
         else:  
            return Response(
               {
                  'status': status.HTTP_400_BAD_REQUEST,
                  'message': "Invalid Hospital Id",
               },
            )  
      else:
         hospital = Hospital.objects.all()
         serializer = HospitalSerializer(hospital, many = True)
         return Response(
            {
               'status': status.HTTP_200_OK,
               'message': "Hospital Data Retrieved Successfully",
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
               'message': "Invalid Hospital Id",
            },
         )  
   
class HospitalDelete(APIView):
   def delete(self, request, input, format = None):
      id = input
      if Hospital.objects.filter(hospital_id = id).count() >= 1:
         hospital=Hospital.objects.get(hospital_id = id)
         hospital.delete()
         return Response(
            {
               'status': status.HTTP_200_OK,
               'message': "Hospital Data Deleted",
            },
         )  
      else:  
         return Response(
            {
               'status': status.HTTP_400_BAD_REQUEST,
               'message': "Invalid Hospital Id",
            },
         )  