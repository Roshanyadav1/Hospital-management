from leave.serializers import *
from rest_framework.generics import GenericAPIView
from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter
from rest_framework.response import Response
from rest_framework.views import APIView
from leave.models import Leave
from rest_framework import status
from error.models import Error
from hospital_management.custom_paginations import CustomPagination
from hospital_management.responses import ResponseMessage
from rest_framework.permissions import IsAuthenticated
from user.models import User
import jwt


class LeaveRegister(GenericAPIView):
    serializer_class = LeaveSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        serializer = LeaveSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        response_message = ""
        response_code = ""

        header_value = request.headers['Authorization']
        token = header_value.split(' ')[1]
        payload = jwt.decode(token, "secret", algorithms=['HS256'])
        user_id = payload['user_id']
        user = User.objects.get(user_id=user_id)
        user_role = user.user_role

        if user_role == "Patient":
            Response.status_code = status.HTTP_401_UNAUTHORIZED
            return Response(
                {
                    'status': status.HTTP_401_UNAUTHORIZED,
                    'message': "Unauthorized Access",
                }
            )

        if user_role == "Manager":
            Response.status_code = status.HTTP_401_UNAUTHORIZED
            return Response(
                {
                    'status': status.HTTP_401_UNAUTHORIZED,
                    'message': "Unauthorized Access",
                }
            )

        if user_role == "Admin":
            Response.status_code = status.HTTP_401_UNAUTHORIZED
            return Response(
                {
                    'status': status.HTTP_401_UNAUTHORIZED,
                    'message': "Unauthorized Access",
                }
            )

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
                'message': 'Leave ' + response_message
            },
        )


class LeaveView(ListAPIView):
    queryset = Leave.objects.all()
    serializer_class = LeaveSerializer
    pagination_class = CustomPagination
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):

        response = super().list(request, *args, **kwargs)
        if request.GET.get('pageSize') != None:
            response.data['page_size'] = int(request.GET.get('pageSize'))
        response_message = ""
        response_code = ""

        header_value = request.headers['Authorization']
        token = header_value.split(' ')[1]
        payload = jwt.decode(token, "secret", algorithms=['HS256'])
        user_id = payload['user_id']
        user = User.objects.get(user_id=user_id)
        user_role = user.user_role

        if user_role == "Patient":
            Response.status_code = status.HTTP_401_UNAUTHORIZED
            return Response(
                {
                    'status': status.HTTP_401_UNAUTHORIZED,
                    'message': "Unauthorized Access",
                }
            )

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
                'message': "Leave " + response_message,
                'data': response.data,
            }
        )


class LeaveViewById(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, input=None, format=None):
        id = input
        if id is not None:
            if Leave.objects.filter(leave_id=id).count() >= 1:
                leave = Leave.objects.get(leave_id=id)
                serializer = LeaveSerializer(leave)
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
                        'message': "Leave " + response_message,
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


class LeaveUpdate(GenericAPIView):
    serializer_class = LeaveSerializer
    permission_classes = [IsAuthenticated]

    def patch(self, request, input, format=None):
        id = input
        if Leave.objects.filter(leave_id=id).count() >= 1:
            leave = Leave.objects.get(leave_id=id)
            serializer = LeaveSerializer(
                leave, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            response_message = ""
            response_code = ""

            header_value = request.headers['Authorization']
            token = header_value.split(' ')[1]
            payload = jwt.decode(token, "secret", algorithms=['HS256'])
            user_id = payload['user_id']
            user = User.objects.get(user_id=user_id)
            user_role = user.user_role

            if user_role == "Patient":
                Response.status_code = status.HTTP_401_UNAUTHORIZED
                return Response(
                    {
                        'status': status.HTTP_401_UNAUTHORIZED,
                        'message': "Unauthorized Access",
                    }
                )
            if user_role == "Manager":
                Response.status_code = status.HTTP_401_UNAUTHORIZED
                return Response(
                    {
                        'status': status.HTTP_401_UNAUTHORIZED,
                        'message': "Unauthorized Access",
                    }
                )
            if user_role == "Admin":
                Response.status_code = status.HTTP_401_UNAUTHORIZED
                return Response(
                    {
                        'status': status.HTTP_401_UNAUTHORIZED,
                        'message': "Unauthorized Access",
                    }
                )

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
                    'message': 'Leave ' + response_message,
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


class LeaveDelete(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, input, format=None):
        id = input
        if Leave.objects.filter(leave_id=id).count() >= 1:
            leave = Leave.objects.get(leave_id=id)
            leave.delete()
            response_message = ""
            response_code = ""

            header_value = request.headers['Authorization']
            token = header_value.split(' ')[1]
            payload = jwt.decode(token, "secret", algorithms=['HS256'])
            user_id = payload['user_id']
            user = User.objects.get(user_id=user_id)
            user_role = user.user_role

            if user_role == "Patient":
                Response.status_code = status.HTTP_401_UNAUTHORIZED
                return Response(
                    {
                        'status': status.HTTP_401_UNAUTHORIZED,
                        'message': "Unauthorized Access",
                    }
                )
            if user_role == "Admin":
                Response.status_code = status.HTTP_401_UNAUTHORIZED
                return Response(
                    {
                        'status': status.HTTP_401_UNAUTHORIZED,
                        'message': "Unauthorized Access",
                    }
                )
            if user_role == "Manager":
                Response.status_code = status.HTTP_401_UNAUTHORIZED
                return Response(
                    {
                        'status': status.HTTP_401_UNAUTHORIZED,
                        'message': "Unauthorized Access",
                    }
                )

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
                    'message': "Leave " + response_message,
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
