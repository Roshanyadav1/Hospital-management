from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response 
from prescription_api.serializer import *


# Create your views here.




class AddPrescriptionView(APIView):
    def post(self, request,format=None):
        serializer = AddPrescriptionSerializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({'msg': 'SucessFully Added'})
    
    
class GetPrescriptionView(APIView):
    def get(self, request, pk=None,format = None):
        id = pk
        if id is not None:
            prescription = Prescription.objects.get(id = id)
            serializer = GetPresciptionSerializer(prescription)   
            return Response(serializer.data)
        else:
            prescription = Prescription.objects.all()
            serializer = GetPresciptionSerializer(prescription, many=True)   
            return Response(serializer.data)
    
            
    

class DeletePrescription(APIView):
    def delete(self, request,pk, format=None):
        id = pk
        prescripton = Prescription.objects.get(pk=id)
        prescripton.delete()
        return Response({'msg' :'successsfully deleted'}) 
    
class UpdatePrescription(APIView):
    def put(self,request,pk, format=None):
        id = pk
        prescription = Prescription.objects.get(pk = id) 
        serializer = AddPrescriptionSerializer(Prescription, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()  
        return Response({'msg': 'Sucessfully Update your data'})
         
    def patch(self,request,pk, format=None):
        id = pk
        prescription = Prescription.objects.get(pk = id) 
        serializer = AddPrescriptionSerializer(prescription, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()  
        return Response({'msg': 'Sucessfully Update your data'})  
     
    
