from django.shortcuts import render
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework.views import APIView

# Doctor Profile Registration API View
class DoctorRegistrationView(APIView):
    def post(self, request, format=None):
        email = request.data.get('email')
        contact_number = request.data.get('contact_number')

        if Doctor.objects.all().filter(email=email).exists():        
            return Response({'msg':'Email Is Already Registered'}, status = status.HTTP_400_BAD_REQUEST)
        if Doctor.objects.all().filter(contact_number=contact_number).exists(): 
            return Response({'msg':'Contact Is Already Registered'}, status = status.HTTP_400_BAD_REQUEST)
        else:
            serializer = DoctorSerializer(data=request.data)
            serializer.is_valid(raise_exception = True)
            serializer.save()
            return Response({'msg':'Data Inserted !'}, status = status.HTTP_201_CREATED)

# Doctor Profile Update API View 
class DoctorProfileUpdateView(APIView):
    def put(self, request, pk, format=None):
        id = pk
        if Doctor.objects.all().filter(id=id).exists():
            doctor = Doctor.objects.get(pk=id)
            serializer = DoctorSerializer(doctor, data = request.data)
    
            serializer.is_valid(raise_exception = True)
            serializer.save()
            return Response({'msg': 'Complete Data Updated !'}, status = status.HTTP_200_OK)
        return Response({'msg': 'Doctor Is Not Registered'}, status = status.HTTP_400_BAD_REQUEST)
        
    
    def patch(self, request, pk, format=None):
        id = pk
        if Doctor.objects.all().filter(id=id).exists():
            doctor = Doctor.objects.get(pk=id)
            serializer = DoctorSerializer(doctor, data = request.data, partial=True)

            serializer.is_valid(raise_exception = True)
            serializer.save()
            return Response({'msg': 'Patial Data Updated !'})
        return Response({'msg': 'Doctor Is Not Registered'}, status = status.HTTP_400_BAD_REQUEST)
    

# Doctor Profile View API View
class DoctorProfileView(APIView):
    def get(self, request, pk=None, format=None):
        id = pk

        if id is not None:
            if Doctor.objects.all().filter(id=id).exists():
                doctor = Doctor.objects.get(id=id)
                serializer = DoctorSerializer(doctor)
                return Response(serializer.data)
            return Response({'msg': 'Doctor Is Not Registered'}, status = status.HTTP_400_BAD_REQUEST)
            
        doctor = Doctor.objects.all()
        serializer = DoctorSerializer(doctor, many=True)
        return Response(serializer.data)


# Doctor Profile Delete API View
class DoctorProfileDeleteView(APIView):
    def delete(self, request, pk, format=None):
        id = pk
        if Doctor.objects.all().filter(id=id).exists():
            doctor = Doctor.objects.get(pk=id)
            doctor.delete()
            return Response({'msg':'Data Deleted !'}) 
        return Response({'msg': 'Doctor Is Not Registered'}, status = status.HTTP_400_BAD_REQUEST)
    

# Doctor Profile Login API View
class DoctorProfileLoginView(APIView):
    def post(self, request, format=None):
            serializer = DoctorLoginSerializer(data = request.data)
            serializer.is_valid(raise_exception=True)
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            doctor = authenticate(email=email, password=password)
            if doctor is not None:
                # token = get_tokens_for_user(user)
                return Response({'msg':'Successfully Logged In'}, status = status.HTTP_200_OK)
            else:
                return Response({'errors':{'non_field_errors':['Email or Password is not valid']}}, status = status.HTTP_404_NOT_FOUND)
        