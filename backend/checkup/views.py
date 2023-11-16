from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from checkup.models import CheckUp
from rest_framework import status
from checkup.serializers import CheckupSerializer
from error.models import Error

class CheckUpAdd(GenericAPIView):
    serializer_class = CheckupSerializer
    
    def post(self, request, format = None):
        serializer =  CheckupSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        error = Error.objects.get(error_title = 'ADD_SUCCESS')
        response_message = error.error_message
        response_code = error.error_code
        return Response(
            {
                'status': response_code,
                'message': 'Checkup ' + response_message
            },
        )

class CheckUpDelete(APIView):
    def delete(self, request, input = None, format = None):
        id = input
        if CheckUp.objects.filter(checkup_id = id).count() >= 1:
            checkup = CheckUp.objects.get(checkup_id =  id)
            checkup.delete()
            error = Error.objects.get(error_title = 'DELETE_SUCCESS')
            response_message = error.error_message
            response_code = error.error_code
            return Response(
                {
                    'status': response_code,
                    'message': "Checkup " + response_message,
                },
            )
        else:
            error = Error.objects.get(error_title = 'INVALID_ID')
            response_message = error.error_message
            response_code = error.error_code
            return Response(
                {
                    'status': response_code,
                    'message': response_message,
                },
            )    

class CheckUpUpdate(APIView):
    def put(self, request, input = None, format = None):
        id = input
        if CheckUp.objects.filter(checkup_id = id).count() >= 1:
            checkup = CheckUp.objects.get(checkup_id = id)
            serializer =  CheckupSerializer.save(checkup, data = request.data)
            error = Error.objects.get(error_title = 'UPDATE_SUCCESS')
            response_message = error.error_message
            response_code = error.error_code
            return Response(
                {
                    'status': response_code,
                    'message': 'Checkup ' + response_message,
                }, 
            )
        else:
            error = Error.objects.get(error_title = 'INVALID_ID')
            response_message = error.error_message
            response_code = error.error_code
            return Response(
                {
                    'status': response_code,
                    'message': response_message,
                },
            ) 
        
    def patch(self, request, input = None, format = None):
        id = input
        if CheckUp.objects.filter(checkup_id = id).count() >= 1:
            checkup = CheckUp.objects.get(checkup_id =  id)
            serializer = CheckupSerializer.save(checkup, data = request.data, partial = True)
            error = Error.objects.get(error_title = 'UPDATE_SUCCESS')
            response_message = error.error_message
            response_code = error.error_code
            return Response(
                {
                    'status': response_code,
                    'message': 'Checkup ' + response_message,
                }, 
            )
        else:
            error = Error.objects.get(error_title = 'INVALID_ID')
            response_message = error.error_message
            response_code = error.error_code
            return Response(
                {
                    'status': response_code,
                    'message': response_message,
                },
            ) 
    
class CheckUpView(APIView):
    def get(self, request, input = None, format = None):
        id = input
        if id is not None:
            if CheckUp.objects.filter(checkup_id = id).count() >= 1:
                checkup = CheckUp.objects.get(checkup_id =  id) 
                serializer = CheckupSerializer(checkup)
                error = Error.objects.get(error_title = 'RETRIEVED_SUCCESS')
                response_message = error.error_message
                response_code = error.error_code
                return Response(
                    {
                        'status': response_code,
                        'message': "Checkup " + response_message,
                        'data': serializer.data
                    },
                )
            else:
                error = Error.objects.get(error_title = 'INVALID_ID')
                response_message = error.error_message
                response_code = error.error_code
                return Response(
                    {
                        'status': response_code,
                        'message': response_message,
                    },
                ) 
        else:
            checkup = CheckUp.objects.all()
            serializer = CheckupSerializer(checkup, many = True)
            error = Error.objects.get(error_title = 'RETRIEVED_SUCCESS')
            response_message = error.error_message
            response_code = error.error_code
            return Response(
                {
                    'status': response_code,
                    'message': 'Checkup ' + response_message,
                    'data': serializer.data
                },
            )
