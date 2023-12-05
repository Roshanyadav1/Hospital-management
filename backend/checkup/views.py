from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from checkup.models import CheckUp
from rest_framework import status
from checkup.serializers import CheckupSerializer
from error.models import Error
from hospital_management.responses import ResponseMessage
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView


class CheckUpAdd(GenericAPIView):
    serializer_class = CheckupSerializer

    def post(self, request, format=None):
        serializer = CheckupSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        response_message = ""
        response_code = ""
        try:
            error = Error.objects.get(error_title='ADD_SUCCESS')
            response_message = error.error_message
            response_code = error.error_code
            Response.status_code = error.error_code
        except:
            response_message = ResponseMessage.ADD_SUCCESS
            response_code = status.HTTP_201_CREATED
        return Response(
            {
                'status': response_code,
                'message': 'Checkup ' + response_message
            },
        )


class CheckUpDelete(APIView):
    def delete(self, request, input=None, format=None):
        id = input
        if CheckUp.objects.filter(checkup_id=id).count() >= 1:
            checkup = CheckUp.objects.get(checkup_id=id)
            checkup.delete()
            response_message = ""
            response_code = ""
            try:
                error = Error.objects.get(error_title='DELETE_SUCCESS')
                response_message = error.error_message
                response_code = error.error_code
                Response.status_code = error.error_code
            except:
                response_message = ResponseMessage.DELETE_SUCCESS
                response_code = status.HTTP_200_OK
            return Response(
                {
                    'status': response_code,
                    'message': "Checkup " + response_message,
                },
            )
        else:
            response_message = ""
            response_code = ""
            try:
                error = Error.objects.get(error_title='INVALID_ID')
                response_message = error.error_message
                response_code = error.error_code
                Response.status_code = error.error_code
            except:
                response_message = ResponseMessage.INVALID_ID
                response_code = status.HTTP_400_BAD_REQUEST
            return Response(
                {
                    'status': response_code,
                    'message': response_message,
                },
            )


class CheckUpUpdate(APIView):

    def patch(self, request, input=None, format=None):
        id = input
        if CheckUp.objects.filter(checkup_id=id).count() >= 1:
            checkup = CheckUp.objects.get(checkup_id=id)
            serializer = CheckupSerializer.save(
                checkup, data=request.data, partial=True)
            response_message = ""
            response_code = ""
            try:
                error = Error.objects.get(error_title='UPDATE_SUCCESS')
                response_message = error.error_message
                response_code = error.error_code
                Response.status_code = error.error_code
            except:
                response_message = ResponseMessage.UPDATE_SUCCESS
                response_code = status.HTTP_200_OK
            return Response(
                {
                    'status': response_code,
                    'message': 'Checkup ' + response_message,
                },
            )
        else:
            response_message = ""
            response_code = ""
            try:
                error = Error.objects.get(error_title='INVALID_ID')
                response_message = error.error_message
                response_code = error.error_code
                Response.status_code = error.error_code
            except:
                response_message = ResponseMessage.INVALID_ID
                response_code = status.HTTP_400_BAD_REQUEST
            return Response(
                {
                    'status': response_code,
                    'message': response_message,
                },
            )


class CheckUpViewById(APIView):

    def get(self, request, input=None, format=None):
        id = input
        if id is not None:
            if CheckUp.objects.filter(checkup_id=id).count() >= 1:
                checkup = CheckUp.objects.get(checkup_id=id)
                serializer = CheckupSerializer(checkup)
                response_message = ""
                response_code = ""
                try:
                    error = Error.objects.get(error_title='RETRIEVED_SUCCESS')
                    response_message = error.error_message
                    response_code = error.error_code
                    Response.status_code = error.error_code
                except:
                    response_message = ResponseMessage.RETRIEVED_SUCCESS
                    response_code = status.HTTP_200_OK
                return Response(
                    {
                        'status': response_code,
                        'message': "Checkup " + response_message,
                        'data': serializer.data
                    },
                )
            else:
                response_message = ""
                response_code = ""
                try:
                    error = Error.objects.get(error_title='INVALID_ID')
                    response_message = error.error_message
                    response_code = error.error_code
                    Response.status_code = error.error_code
                except:
                    response_message = ResponseMessage.INVALID_ID
                    response_code = status.HTTP_400_BAD_REQUEST
                return Response(
                    {
                        'status': response_code,
                        'message': response_message,
                    },
                )


class CheckUpView(ListAPIView):
    queryset = CheckUp.objects.all()
    serializer_class = CheckupSerializer
    filterset_fields = ['doctor', 'patient', 'appointment', 'disease']
    pagination_class = PageNumberPagination

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        response_message = ""
        response_code = ""

        try:
            error = Error.objects.get(error_title='RETRIEVED_SUCCESS')
            response_message = error.error_message
            response_code = error.error_code
            Response.status_code = error.error_code
        except:
            response_message = ResponseMessage.RETRIEVED_SUCCESS
            response_code = status.HTTP_200_OK
        return Response(
            {
                'status': response_code,
                'message': "Appointment " + response_message,
                'data': response.data,
            }
        )
