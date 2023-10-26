from django.shortcuts import render
from rest_framework.response import Response
from .serializers import HospitalSerializer
from rest_framework import status
from rest_framework.views import APIView
from .models import Hospital

class HospitalRegisterView(APIView):
   def post(self, request,format=None):
      serializer = HospitalSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response({"msg":"data inserted"}, status=status.HTTP_201_CREATED)

class HospitalInformationView(APIView):
   def get(self, request,uid = None,format=None):
      iid = uid
      if iid is not None :
         hospital = hospital.objects.get(uid = iid)
         serializer = HospitalSerializer(hospital)
         return Response(serializer.data)
      hospital = Hospital.objects.all()
      serializer = HospitalSerializer(hospital,many=True)
      return Response(serializer.data) 
      

class UpdateInformationView(APIView):
   def patch(self, request,uid,format=None):
      iid = uid
      hospital=Hospital.objects.get(uid = uid)
      serializer = HospitalSerializer(hospital,data=request.data,partial=True)
      if serializer.is_valid():
         serializer.save() 
         return Response({'msg':"Update Information"})
      return Response(serializer.errors)
   

class DeleteInformationView(APIView):
   def delete(self, request,uid,format=None):
      iid = uid
      hospital=Hospital.objects.get(uid = uid)
      hospital.delete()
      return Response({'msg':"Delete Information"})