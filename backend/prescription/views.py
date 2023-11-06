from rest_framework.views import APIView
from rest_framework.response import Response 
from prescription.serializer import PrescriptionSerializer
from prescription.models import Prescription
from rest_framework import status
from rest_framework.generics import GenericAPIView


class PrescriptionAdd(GenericAPIView):
    serializer_class = PrescriptionSerializer

    def post(self, request, format = None):
        serializer = PrescriptionSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Prescription Successfully Registered'
            },
        )
    
class PrescriptionView(APIView):
    def get(self, request, input = None, format = None):
        id = input
        if id is not None:
            prescription = Prescription.objects.get(prescription_id = id)
            serializer = PrescriptionSerializer(prescription)   
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Prescription Data Retrieved Successfully",
                    'data': serializer.data
                },
            )
        else:
            prescription = Prescription.objects.all()
            serializer = PrescriptionSerializer(prescription, many = True)   
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Prescriptions Data Retrieved Successfully",
                    'data': serializer.data
                },
            )
        
class PrescriptionUpdate(APIView):
    def put(self, request, input, format = None):
        id = input
        prescription = Prescription.objects.get(prescription_id = id) 
        serializer = PrescriptionSerializer(prescription, data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()  
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': 'Complete Data Updated',
            }, 
        )
    
    def patch(self, request ,input, format = None):
        id = input
        prescription = Prescription.objects.get(prescription_id = id) 
        serializer = PrescriptionSerializer(prescription, data = request.data, partial = True)
        serializer.is_valid(raise_exception = True)
        serializer.save()  
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': 'Partial Data Updated',
            }, 
        )

class PrescriptionDelete(APIView):
    def delete(self, request, input, format = None):
        id = input
        prescripton = Prescription.objects.get(prescription_id = id)
        prescripton.delete()
        return Response(
            {
                'status': status.HTTP_400_BAD_REQUEST,
                'message': "Prescription Data Deleted",
            },
        )    
