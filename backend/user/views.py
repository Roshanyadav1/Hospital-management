from rest_framework.views import APIView
from patient.models import Patient
from rest_framework.response import Response
from user.models import User
from rest_framework import status
from user.serializers import *
from rest_framework.generics import GenericAPIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'access': str(refresh.access_token),
    }

class UserRegister(GenericAPIView):
    serializer_class = UserSerializer
    
    def post(self, request, format = None):
        serializer = UserSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(
            {
                'status': status.HTTP_201_CREATED,
                'message': 'User Successfully Registered'
            },
        )
    
class UserDelete(APIView):
    def delete(self, request, input, format = None):
        id = input
        if User.objects.filter(user_id = id).count() >= 1:
            doctor = User.objects.get(user_id = id)
            doctor.delete()
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "User Data Deleted",
                },
            ) 
        return Response(
            {
                'status': status.HTTP_400_BAD_REQUEST,
                'message': "User Is Not Registered",
            },
        )

class UserView(APIView):
    def get(self, request, input = None, format = None):
        id = input
        if id is not None:
            if User.objects.filter(user_id = id).count() >= 1:
                doctor = User.objects.get(user_id = id)
                serializer = UserSerializer(doctor)
                return Response(
                    {
                        'status': status.HTTP_200_OK,
                        'message': "User Data Retrieved Successfully",
                        'data': serializer.data
                    },
                )
            else:
                return Response(
                    {
                        'status': status.HTTP_400_BAD_REQUEST,
                        'message': "User Is Not Registered",
                    },
                ) 
        else:
            patient = User.objects.all()
            serializer = UserSerializer(patient, many = True)
            return Response(
                {
                    'status': status.HTTP_200_OK,
                    'message': "Users Data Retrieved Successfully",
                    'data': serializer.data
                },
            )
    
class UserUpdate(APIView):
    def put(self, request, input, format = None):
        id = input
        if User.objects.filter(user_id = id).count() >= 1:
            doctor = User.objects.get(user_id = id)
            serializer = UserSerializer(doctor, data = request.data)
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
                    'message': 'User Is Not Registered', 
                },
            )
    
    def patch(self, request, input, format = None):
        id = input
        if User.objects.filter(user_id = id).count() >= 1:
            doctor = User.objects.get(user_id = id)
            serializer = UserSerializer(doctor, data = request.data, partial = True)
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
                    'message': "User Is Not Registered",
                },
            )
        
class UserLogin(GenericAPIView):
    serializer_class = UserLoginSerializer    

    def post(self, request, format = None):
        serializer = UserLoginSerializer(data = request.data)
        print("Working")
        email = request.data.get('user_email')
        
        if User.objects.filter(user_email = email).count() >= 1:
            user = User.objects.get(user_email = email)
            is_verify = request.data.get('is_verify')
            print(is_verify)
            if is_verify == 'true':
                token = get_tokens_for_user(user)
                data = {
                    'user_role': user.user_role,
                    'token': token, 
                }
                return Response(
                    {
                        'status': status.HTTP_200_OK,
                        'message': "Logged In As " + user.user_role,
                        'data': data
                    },
                )
            else:
                if request.data.get('user_password') == user.user_password:
                    token = get_tokens_for_user(user)
                    data = {
                        'user_role': user.user_role,
                        'token': token, 
                    }
                    return Response(
                        {
                            'status': status.HTTP_201_CREATED,
                            'message': "Logged In As " + user.user_role,
                            'data': data
                        },
                    )
                else:
                    return Response(
                        {
                            'status': status.HTTP_400_BAD_REQUEST,
                            'message': "Password Mismatch",
                        },
                    )
        else:
            return Response(
                {
                    'status': status.HTTP_404_NOT_FOUND,
                    'message': "User Does Not Exists",
                },
            )
                