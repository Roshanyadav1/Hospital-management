from rest_framework.views import APIView
from rest_framework.response import Response 
from prescription.serializer import PrescriptionSerializer
from prescription.models import Prescription
from rest_framework import status
from rest_framework.generics import GenericAPIView
from error.models import Error


class PrescriptionAdd(GenericAPIView):
    serializer_class = PrescriptionSerializer

    def post(self, request, format = None):
        serializer = PrescriptionSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        error = Error.objects.get(error_title = 'REGISTERED_SUCCESS')
        response_message = error.error_message
        response_code = error.error_code
        Response.status_code = error.error_code
        return Response(
            {
                'status': response_code,
                'message': 'Prescription ' + response_message
            },
        )
    
class PrescriptionView(APIView):
    def get(self, request, input = None, format = None):
        id = input
        if id is not None:
            if Prescription.objects.filter(prescription_id = id).count() >= 1:
                prescription = Prescription.objects.get(prescription_id = id)
                serializer = PrescriptionSerializer(prescription)   
                error = Error.objects.get(error_title = 'RETRIEVED_SUCCESS')
                response_message = error.error_message
                response_code = error.error_code
                Response.status_code = error.error_code
                return Response(
                    {
                        'status': response_code,
                        'message': "Prescription " + response_message,
                        'data': serializer.data
                    },
                )
            else:
                error = Error.objects.get(error_title = 'INVALID_ID')
                response_message = error.error_message
                response_code = error.error_code
                Response.status_code = error.error_code
                return Response(
                    {
                        'status': response_code,
                        'message': response_message,
                    },
                ) 
        else:
            prescription = Prescription.objects.all()
            serializer = PrescriptionSerializer(prescription, many = True)  
            error = Error.objects.get(error_title = 'RETRIEVED_SUCCESS')
            response_message = error.error_message
            response_code = error.error_code
            Response.status_code = error.error_code 
            return Response(
                {
                    'status': response_code,
                    'message': "Prescriptions " + response_message,
                    'data': serializer.data
                },
            )
        
class PrescriptionUpdate(APIView):
    def put(self, request, input, format = None):
        id = input
        if Prescription.objects.filter(prescription_id = id).count() >= 1:
            prescription = Prescription.objects.get(prescription_id = id) 
            serializer = PrescriptionSerializer(prescription, data = request.data)
            serializer.is_valid(raise_exception = True)
            serializer.save()  
            error = Error.objects.get(error_title = 'UPDATE_SUCCESS')
            response_message = error.error_message
            response_code = error.error_code
            Response.status_code = error.error_code 
            return Response(
                {
                    'status': response_code,
                    'message': 'Prescription ' + response_message,
                }, 
            )
        else:
            error = Error.objects.get(error_title = 'INVALID_ID')
            response_message = error.error_message
            response_code = error.error_code
            Response.status_code = error.error_code 
            return Response(
                {
                    'status': response_code,
                    'message': response_message,
                },
            ) 
    
    def patch(self, request ,input, format = None):
        id = input
        if Prescription.objects.filter(prescription_id = id).count() >= 1:
            prescription = Prescription.objects.get(prescription_id = id) 
            serializer = PrescriptionSerializer(prescription, data = request.data, partial = True)
            serializer.is_valid(raise_exception = True)
            serializer.save()  
            error = Error.objects.get(error_title = 'UPDATE_SUCCESS')
            response_message = error.error_message
            response_code = error.error_code
            Response.status_code = error.error_code 
            return Response(
                {
                    'status': response_code,
                    'message': 'Prescription ' + response_message,
                }, 
            )
        else:
            error = Error.objects.get(error_title = 'INVALID_ID')
            response_message = error.error_message
            response_code = error.error_code
            Response.status_code = error.error_code 
            return Response(
                {
                    'status': response_code,
                    'message': response_message,
                },
            ) 

class PrescriptionDelete(APIView):
    def delete(self, request, input, format = None):
        id = input
        if Prescription.objects.filter(prescription_id = id).count() >= 1:
            prescripton = Prescription.objects.get(prescription_id = id)
            prescripton.delete()
            error = Error.objects.get(error_title = 'DELETE_SUCCESS')
            response_message = error.error_message
            response_code = error.error_code
            Response.status_code = error.error_code 
            return Response(
                {
                    'status': response_code,
                    'message': "Prescription " + response_message,
                },
            )   
        else:
            error = Error.objects.get(error_title = 'INVALID_ID')
            response_message = error.error_message
            response_code = error.error_code
            Response.status_code = error.error_code 
            return Response(
                {
                    'status': response_code,
                    'message': response_message,
                },
            )  
