from disease.models import Disease
from disease.serializers import DiseaseSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.generics import GenericAPIView


class DiseaseAdd(GenericAPIView):
    serializer_class = DiseaseSerializer
    
    def post(self, request, format = None):
        serializer = DiseaseSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'Disease Successfully Added'
            },
        )

class DiseaseUpdate(APIView):
    def put(self, request, input, format = None):
        id = input
        if Disease.objects.filter(disease_id = id).count() >= 1:
            disease = Disease.objects.get(disease_id = id)
            serializer = DiseaseSerializer(disease, data = request.data)
            serializer.is_valid(raise_exception = True)
            serializer.save()
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': 'Complete Data Updated',
                }, 
            )
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': 'Invalid Disease Id', 
                },
            )
    
    def patch(self, request, input, format = None):
        id = input
        if Disease.objects.filter(disease_id=id).count() >= 1:
            disease = Disease.objects.get(disease_id=id)
            serializer = DiseaseSerializer(disease, data = request.data, partial=True)
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
                    'message': "Invalid Disease Id",
                },
            )

class DiseaseDelete(APIView):
    def delete(self, request, input, format=None):
        id = input
        if Disease.objects.filter(disease_id=id).count() >= 1:
            disease = Disease.objects.get(disease_id=id)
            disease.delete()
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Disease Data Deleted",
                },
            )
        else:
            return Response(
                {
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': "Invalid Disease Id",
                },
            )

class DiseaseView(APIView):
    def get(self, request, input = None, format = None):
        id = input
        if id is not None:
            if Disease.objects.filter(disease_id = id).count() >= 1:
                disease = Disease.objects.get(disease_id = id)
                serializer = DiseaseSerializer(disease)
                return Response(
                    {
                        'status': status.HTTP_200_OK,
                        'message': "Diseases Data Retrieved Successfully",
                        'data': serializer.data
                    },
                )
            else:
                return Response(
                    {
                        'status': status.HTTP_400_BAD_REQUEST,
                        'message': "Invalid Disease Id",
                    },
                )
        else:
            disease = Disease.objects.all()
            serializer = DiseaseSerializer(disease, many=True)
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Disese Data Retrieved Successfully",
                    'data': serializer.data
                },
            )