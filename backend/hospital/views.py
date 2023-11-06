from rest_framework.response import Response
from .serializers import HospitalSerializer
from rest_framework import status
from user.serializers import UserRegisterSerializer
from rest_framework.views import APIView
from .models import Hospital
from rest_framework.generics import GenericAPIView


class HospitalRegister(GenericAPIView):
   serializer_class = HospitalSerializer

   def post(self, request, format = None):
      serializer = HospitalSerializer(data = request.data)
      serializer.is_valid(raise_exception = True)
      serializer.save()
      hospital = Hospital.objects.get(hospital_email = request.data.get('hospital_email'))
      data = {
         "member_id": hospital.hospital_id,
         "user_name": hospital.hospital_owner_name,
         "user_email": request.data.get('hospital_owner_email'),
         "user_password": request.data.get('password'),
         "user_role": "Admin",
      }
      user = UserRegisterSerializer(data = data)
      user.is_valid()
      user.save()
      return Response(
         {
            'status': status.HTTP_201_CREATED,
            'message': 'Hospital Successfully Registered'
         },
      )
   
class HospitalView(APIView):
   def get(self, request, input = None, format = None):
      id = input
      if id is not None :
         hospital = hospital.objects.get(hospital_id = id)
         serializer = HospitalSerializer(hospital)
         return Response(
            {
               'status': status.HTTP_200_OK,
               'message': "Hospital Data Retrieved Successfully",
               'data': serializer.data
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
   
class HospitalDelete(APIView):
   def delete(self, request, input, format = None):
      id = input
      hospital=Hospital.objects.get(hospital_id = id)
      hospital.delete()
      return Response(
         {
            'status': status.HTTP_200_OK,
            'message': "Hospital Data Deleted",
         },
      )    
