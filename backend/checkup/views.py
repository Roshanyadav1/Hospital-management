from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from checkup.models import CheckUp
from rest_framework import status
from checkup.serializers import CheckupSerializer


class CheckUpAdd(GenericAPIView):
    serializer_class = CheckupSerializer
    
    def post(self, request, format = None):
        serializer =  CheckupSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Checkup Successfully Added'
            },
        )

class CheckUpDelete(APIView):
    def delete(self, request, input = None, format = None):
        id = input
        checkup = CheckUp.objects.get(checkup_id =  id)
        checkup.delete()
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': "Checkup Data Deleted",
            },
        )

class CheckUpUpdate(APIView):
    def put(self, request, input = None, format = None):
        id = input
        checkup = CheckUp.objects.get(checkup_id = id)
        serializer =  CheckupSerializer.save(checkup, data = request.data)
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': 'Complete Data Updated',
            }, 
        )
    
    def patch(self, request, input = None, format = None):
        id = input
        checkup = CheckUp.objects.get(checkup_id =  id)
        serializer = CheckupSerializer.save(checkup, data = request.data, partial = True)
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': 'Partial Data Updated',
            }, 
        )

class CheckUpView(APIView):
    def get(self, request, input = None, format = None):
        id = input
        if id is not None:
            checkup = CheckUp.objects.get(checkup_id =  id) 
            serializer = CheckupSerializer(checkup)
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Checkup Data Retrieved Successfully",
                    'data': serializer.data
                },
            )
        else:
            checkup = CheckUp.objects.all()
            serializer = CheckupSerializer(checkup, many = True)
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Checkups Data Retrieved Successfully",
                    'data': serializer.data
                },
            )
