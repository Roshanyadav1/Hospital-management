from .models import Hospital
from rest_framework import serializers

class HospitalSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Hospital
        fields = '__all__'
        