from rest_framework import serializers
from user.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ('is_verify',)

class UserLoginSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = ["user_email", "user_password", "is_verify"]

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = ["member_id", "user_name", "user_email", "user_password", "user_role"]
