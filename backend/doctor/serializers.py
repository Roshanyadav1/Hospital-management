from rest_framework.response import Response
from .models import Doctor
from rest_framework import serializers

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = "__all__"

    def validate(self, data):
        password = data.get('password')
        password2 = data.get('password2')
        
        if password != password2:
            raise serializers.ValidationError('Password And Confirm Password mismatch') 
        return data
    
class DoctorLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)
    class Meta:
        model = Doctor
        fields = ['email', 'password']
        
        