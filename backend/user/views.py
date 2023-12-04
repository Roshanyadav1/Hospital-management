from rest_framework.views import APIView
from rest_framework.response import Response
from user.models import User
from rest_framework import status
from user.serializers import *
from rest_framework.generics import GenericAPIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from error.models import Error
from rest_framework.permissions import IsAuthenticated
from user.models import User
import jwt


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    access_token = refresh.access_token

    return {
        'refresh': str(refresh),
        'access': str(access_token),
    }


class UserRegister(GenericAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        if User.objects.filter(employee_email=request.data.get('employee_email')).count() >= 1:
            error = Error.objects.get(error_title='ALREADY_REGISTERED')
            response_message = error.error_message
            response_code = error.error_code
            Response.status_code = error.error_code
            return Response(
                {
                    'status': response_code,
                    'message': 'Employee ' + response_message
                },
            )
        else:
            serializer.save()

        error = Error.objects.get(error_title='REGISTRATION_SUCCESS')
        response_message = error.error_message
        response_code = error.error_code
        Response.status_code = error.error_code
        return Response(
            {
                'status': response_code,
                'message': 'User ' + response_message
            },
        )


class UserDelete(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, input, format=None):
        id = input
        if User.objects.filter(user_id=id).count() >= 1:
            doctor = User.objects.get(user_id=id)
            doctor.delete()
            error = Error.objects.get(error_title='DELETE_SUCCESS')
            response_message = error.error_message
            response_code = error.error_code
            Response.status_code = error.error_code
            return Response(
                {
                    'status': response_code,
                    'message': "User " + response_message,
                },
            )
        error = Error.objects.get(error_title='INVALID_ID')
        response_message = error.error_message
        response_code = error.error_code
        Response.status_code = error.error_code
        return Response(
            {
                'status': response_code,
                'message': response_message,
            },
        )


class UserLoginView(GenericAPIView):
    serializer_class = UserLoginSerializer

    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)
        email = request.data.get('user_email')
        password = request.data.get('user_password')

        if User.objects.filter(user_email=email).count() >= 1:
            user = User.objects.get(user_email=email)
            is_verify = request.data.get('is_verify')

            if is_verify == 'true':
                token = get_tokens_for_user(user)
                Response.status_code = status.HTTP_200_OK
                return Response(
                    {
                        'status': status.HTTP_200_OK,
                        'message': "Logged In As " + user.user_role,
                        'data': {
                            'user_role': user.user_role,
                            'token': token,
                        }
                    },
                )
            else:
                user = authenticate(user_email=email, password=password)
                if user is not None:
                    token = get_tokens_for_user(user)
                    Response.status_code = status.HTTP_200_OK
                    return Response(
                        {
                            'status': status.HTTP_200_OK,
                            'message': "Logged In As " + user.user_role,
                            'data': {
                                'user_role': user.user_role,
                                'token': token,
                            }
                        },
                    )
                else:
                    Response.status_code = status.HTTP_400_BAD_REQUEST
                    return Response(
                        {
                            'status': status.HTTP_400_BAD_REQUEST,
                            'message': "Password Mismatch",
                        },
                    )
        else:
            Response.status_code = status.HTTP_404_NOT_FOUND
            return Response(
                {
                    'status': status.HTTP_404_NOT_FOUND,
                    'message': "User With This Email Is Not Found",
                },
            )


class UserVerificationView(APIView):
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        # request.GET.headers.setdefault('Content-Type', 'application/json')
        # token = request.GET.get('token')
        # user_id = request.GET.get('user_id')
        # print(token, user_id)
        # serializer = UserProfileSerializer(request.user)
        Response.status_code = status.HTTP_200_OK
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': "User Verified",
            },
        )


class UserView(APIView):
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        serializer = UserProfileSerializer(request.user)
        Response.status_code = status.HTTP_200_OK
        return Response(
            {
                'status': status.HTTP_200_OK,
                'message': "User Verified",
                'data': serializer.data,
            }
        )


class UserUpdate(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request, input, format=None):
        id = input
        if User.objects.filter(user_id=id).count() >= 1:
            doctor = User.objects.get(user_id=id)
            serializer = UserSerializer(
                doctor, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            error = Error.objects.get(error_title='UPDATE_SUCCESS')
            response_message = error.error_message
            response_code = error.error_code
            Response.status_code = error.error_code
            return Response(
                {
                    'status': response_code,
                    'message': 'User ' + response_message,
                },
            )
        else:
            error = Error.objects.get(error_title='INVALID_ID')
            response_message = error.error_message
            response_code = error.error_code
            Response.status_code = error.error_code
            return Response(
                {
                    'status': response_code,
                    'message': response_message,
                },
            )
