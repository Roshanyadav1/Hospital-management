from rest_framework import serializers
from user.models import User


# User Serializer Class
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('is_verify',)

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        exclude = ('password', )


class UserLoginSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = ["user_email", "user_password", "is_verify"]